/* ======================================
   Click Eterno Photography — JavaScript
   ====================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ---- Navbar Scroll Effect ----
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ---- Mobile Menu Toggle ----
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('open');
        navLinks.classList.toggle('open');
        document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
    });

    navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('open');
            navLinks.classList.remove('open');
            document.body.style.overflow = '';
        });
    });

    // ---- Smooth Scroll ----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const targetPos = target.getBoundingClientRect().top + window.pageYOffset - 80;
                window.scrollTo({ top: targetPos, behavior: 'smooth' });
            }
        });
    });

    // ---- Scroll Reveal ----
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll(
        '.about-text, .photographer-img-wrapper, .service-card, .portfolio-item, ' +
        '.contact-info, .contact-form, .section-tag, .section-title, .carousel-item'
    ).forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // ---- Counter Animation ----
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.stat-number').forEach(counter => {
                    const target = parseInt(counter.getAttribute('data-target'));
                    const step = target / (2000 / 16);
                    let current = 0;
                    const update = () => {
                        current += step;
                        if (current < target) {
                            counter.textContent = Math.ceil(current);
                            requestAnimationFrame(update);
                        } else {
                            counter.textContent = target;
                        }
                    };
                    update();
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
                const match = filter === 'all' || item.getAttribute('data-category') === filter;
                item.style.opacity = '0';
                item.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    item.style.display = match ? '' : 'none';
                    if (match) {
                        requestAnimationFrame(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                            item.style.transition = 'all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)';
                        });
                    }
                }, match ? 200 : 300);
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

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            goToSlide(parseInt(dot.getAttribute('data-index')));
            clearInterval(slideInterval);
            slideInterval = setInterval(() => goToSlide((currentSlide + 1) % testimonials.length), 5000);
        });
    });

    slideInterval = setInterval(() => goToSlide((currentSlide + 1) % testimonials.length), 5000);

    // ---- Form Handling ----
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        submitBtn.textContent = 'A enviar...';
        submitBtn.disabled = true;

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
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
                throw new Error();
            }
        } catch {
            submitBtn.textContent = '✗ Erro — tente novamente';
            submitBtn.style.background = '#8b2c2c';
            submitBtn.disabled = false;
            setTimeout(() => {
                submitBtn.textContent = 'Enviar Pedido';
                submitBtn.style.background = '';
            }, 3000);
        }
    });

    // ---- Parallax Hero ----
    const heroImg = document.querySelector('.hero-img');
    if (heroImg) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset < window.innerHeight) {
                heroImg.style.transform = `scale(1.05) translateY(${window.pageYOffset * 0.3}px)`;
            }
        });
    }

    // ---- Categories Carousel ----
    const track = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');

    if (track && prevBtn && nextBtn) {
        const scrollAmount = () => {
            const item = track.querySelector('.carousel-item');
            return item ? item.offsetWidth + 4 : 284;
        };

        prevBtn.addEventListener('click', () => {
            track.scrollBy({ left: -scrollAmount() * 2, behavior: 'smooth' });
        });

        nextBtn.addEventListener('click', () => {
            track.scrollBy({ left: scrollAmount() * 2, behavior: 'smooth' });
        });

        // Click on carousel item → go to that portfolio category
        track.querySelectorAll('.carousel-item').forEach(item => {
            item.addEventListener('click', () => {
                const category = item.getAttribute('data-goto');
                const btn = document.querySelector(`.filter-btn[data-filter="${category}"]`);
                if (btn) {
                    btn.click();
                    const portfolio = document.getElementById('portfolio');
                    if (portfolio) {
                        const targetPos = portfolio.getBoundingClientRect().top + window.pageYOffset - 80;
                        window.scrollTo({ top: targetPos, behavior: 'smooth' });
                    }
                }
            });
        });
    }

    // ---- Lightbox ----
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    const lightboxCounter = document.getElementById('lightboxCounter');

    let lightboxItems = [];
    let lightboxIndex = 0;

    function getVisibleItems() {
        return Array.from(document.querySelectorAll('.portfolio-item'))
            .filter(item => item.style.display !== 'none');
    }

    function openLightbox(index, items) {
        lightboxItems = items;
        lightboxIndex = index;
        showLightboxImage();
        lightbox.classList.add('active');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    function showLightboxImage() {
        const item = lightboxItems[lightboxIndex];
        const img = item.querySelector('img');
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightboxCounter.textContent = `${lightboxIndex + 1} / ${lightboxItems.length}`;
        lightboxPrev.style.visibility = lightboxIndex === 0 ? 'hidden' : 'visible';
        lightboxNext.style.visibility = lightboxIndex === lightboxItems.length - 1 ? 'hidden' : 'visible';
    }

    portfolioItems.forEach(item => {
        item.addEventListener('click', () => {
            const visible = getVisibleItems();
            const index = visible.indexOf(item);
            if (index !== -1) openLightbox(index, visible);
        });
    });

    lightboxClose.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    lightboxPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        if (lightboxIndex > 0) {
            lightboxIndex--;
            showLightboxImage();
        }
    });

    lightboxNext.addEventListener('click', (e) => {
        e.stopPropagation();
        if (lightboxIndex < lightboxItems.length - 1) {
            lightboxIndex++;
            showLightboxImage();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft' && lightboxIndex > 0) { lightboxIndex--; showLightboxImage(); }
        if (e.key === 'ArrowRight' && lightboxIndex < lightboxItems.length - 1) { lightboxIndex++; showLightboxImage(); }
    });
});
