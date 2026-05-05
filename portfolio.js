/* ======================================
   Click Eterno — Portfolio Page JS
   ====================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ---- Navbar ----
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

    // ---- Build filters and grid from PHOTO_DATA ----
    const filtersEl = document.getElementById('portfolioFilters');
    const gridEl = document.getElementById('portfolioGrid');

    // Create filter buttons
    PHOTO_DATA.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'filter-btn';
        btn.setAttribute('data-filter', cat.category);
        btn.textContent = cat.label;
        filtersEl.appendChild(btn);
    });

    PHOTO_DATA.forEach(cat => {
        const folder = cat.category === 'aniversario'
            ? 'aniversario-festa-e-eventos'
            : cat.category;

        cat.photos.forEach(photo => {
            const item = document.createElement('div');
            item.className = 'portfolio-item';
            item.setAttribute('data-category', cat.category);

            item.innerHTML = `
                <img src="portfolio/${folder}/${photo.file}" alt="${photo.alt}" loading="lazy">
                <div class="portfolio-overlay">
                    <span class="portfolio-cat">${cat.label}</span>
                </div>
            `;
            gridEl.appendChild(item);
        });
    });

    // ---- Filter logic ----
    function applyFilter(filter) {
        document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-filter') === filter);
        });

        document.querySelectorAll('.portfolio-item').forEach(item => {
            const match = filter === 'all' || item.getAttribute('data-category') === filter;
            item.style.display = match ? '' : 'none';
            if (match) {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.96)';
                requestAnimationFrame(() => {
                    item.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                });
            }
        });
    }

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            applyFilter(btn.getAttribute('data-filter'));
        });
    });

    // ---- Auto-filter from URL param (?cat=casamento) ----
    const params = new URLSearchParams(window.location.search);
    const catParam = params.get('cat');
    if (catParam) {
        applyFilter(catParam);
    }

    // ---- Scroll reveal ----
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

    document.querySelectorAll('.portfolio-item').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // ---- Lightbox ----
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    const lightboxCounter = document.getElementById('lightboxCounter');

    let lbItems = [];
    let lbIndex = 0;

    function getVisible() {
        return Array.from(document.querySelectorAll('.portfolio-item'))
            .filter(el => el.style.display !== 'none');
    }

    function openLightbox(index, items) {
        lbItems = items;
        lbIndex = index;
        updateLightbox();
        lightbox.classList.add('active');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    function updateLightbox() {
        const img = lbItems[lbIndex].querySelector('img');
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightboxCounter.textContent = `${lbIndex + 1} / ${lbItems.length}`;
        lightboxPrev.style.visibility = lbIndex === 0 ? 'hidden' : 'visible';
        lightboxNext.style.visibility = lbIndex === lbItems.length - 1 ? 'hidden' : 'visible';
    }

    gridEl.addEventListener('click', (e) => {
        const item = e.target.closest('.portfolio-item');
        if (!item) return;
        const visible = getVisible();
        const index = visible.indexOf(item);
        if (index !== -1) openLightbox(index, visible);
    });

    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });

    lightboxPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        if (lbIndex > 0) { lbIndex--; updateLightbox(); }
    });

    lightboxNext.addEventListener('click', (e) => {
        e.stopPropagation();
        if (lbIndex < lbItems.length - 1) { lbIndex++; updateLightbox(); }
    });

    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft' && lbIndex > 0) { lbIndex--; updateLightbox(); }
        if (e.key === 'ArrowRight' && lbIndex < lbItems.length - 1) { lbIndex++; updateLightbox(); }
    });
});
