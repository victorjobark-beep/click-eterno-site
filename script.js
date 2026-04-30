/* ======================================
   Click Eterno Photography — JavaScript
   ====================================== */

document.addEventListener('DOMContentLoaded', () => {
    // ---- Navbar Scroll Effect ----
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        lastScroll = currentScroll;
    });

    // ---- Mobile Menu Toggle ----
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('open');
        navLinks.classList.toggle('open');
        document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
    });

    // Close menu on link click
    navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('open');
            navLinks.classList.remove('open');
            document.body.style.overflow = '';
        });
    });

    // ---- Smooth Scroll for anchor links ----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80;
                const targetPos = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top: targetPos, behavior: 'smooth' });
            }
        });
    });

    // ---- Scroll Reveal Animations ----
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add fade-in class to elements
    const animateElements = document.querySelectorAll(
        '.about-text, .about-images, .service-card, .portfolio-item, ' +
        '.contact-info, .contact-form, .section-tag, .section-title'
    );
    animateElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // ---- Counter Animation ----
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.stat-number');
                counters.forEach(counter => {
                    const target = parseInt(counter.getAttribute('data-target'));
                    const duration = 2000;
                    const step = target / (duration / 16);
                    let current = 0;

                    const updateCounter = () => {
                        current += step;
                        if (current < target) {
                            counter.textContent = Math.ceil(current);
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.textContent = target;
                        }
                    };
                    updateCounter();
                });
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.about-stats');
    if (statsSection) counterObserver.observe(statsSection);

    // ---- Portfolio Filter ----
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');

            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            portfolioItems.forEach(item => {
                const category = item.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        item.style.display = '';
                        requestAnimationFrame(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                            item.style.transition = 'all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)';
                        });
                    }, 200);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // ---- Testimonial Slider ----
    const testimonials = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    let slideInterval;

    function goToSlide(index) {
        testimonials.forEach(t => t.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));
        testimonials[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        const next = (currentSlide + 1) % testimonials.length;
        goToSlide(next);
    }

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.getAttribute('data-index'));
            goToSlide(index);
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, 5000);
        });
    });

    slideInterval = setInterval(nextSlide, 5000);

    // ---- Form Handling ----
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        submitBtn.textContent = 'A enviar...';
        submitBtn.disabled = true;

        try {
            const formData = new FormData(form);
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                submitBtn.textContent = '✓ Enviado com sucesso!';
                submitBtn.style.background = '#2a7d4f';
                form.reset();
                setTimeout(() => {
                    submitBtn.textContent = 'Enviar Pedido';
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                }, 4000);
            } else {
                throw new Error('Erro no envio');
            }
        } catch (error) {
            submitBtn.textContent = '✗ Erro — tente novamente';
            submitBtn.style.background = '#8b2c2c';
            submitBtn.disabled = false;
            setTimeout(() => {
                submitBtn.textContent = 'Enviar Pedido';
                submitBtn.style.background = '';
            }, 3000);
        }
    });

    // ---- Parallax effect on hero ----
    const heroImg = document.querySelector('.hero-img');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset < window.innerHeight) {
            const offset = window.pageYOffset * 0.3;
            heroImg.style.transform = `scale(1.05) translateY(${offset}px)`;
        }
    });
});
