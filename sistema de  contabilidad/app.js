/**
 * César Reyes Jaramillo - Financial Control Module Landing Logic
 * Refined for High Conversion & Performance
 */

document.addEventListener('DOMContentLoaded', () => {

    lucide.createIcons();


    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealElements = document.querySelectorAll('.reveal, .reveal-parallax');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');

                if (!entry.target.classList.contains('reveal-parallax')) {
                    observer.unobserve(entry.target);
                }
            }
        });
    }, observerOptions);

    revealElements.forEach(el => observer.observe(el));


    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });


    window.addEventListener('scroll', () => {
        const parallaxEls = document.querySelectorAll('.reveal-parallax.active');
        parallaxEls.forEach(el => {
            const speed = 0.05;
            const rect = el.getBoundingClientRect();
            const offset = (window.innerHeight - rect.top) * speed;
            const img = el.querySelector('img');
            if(img) {
                img.style.transform = `translateY(${offset}px) scale(1.02)`;
            }
        });
    });


    const phone = "593963410409";
    const defaultMsg = encodeURIComponent("Hola César, me interesa el Módulo de Control Financiero para mi hostería. Me gustaría recibir más información.");
    
    document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
        link.href = `https://wa.me/${phone}?text=${defaultMsg}`;
    });


    const menuToggle = document.getElementById('menuToggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {

            const nav = document.querySelector('.md\\:flex');
            nav.classList.toggle('hidden');
            nav.classList.toggle('flex-col');
            nav.classList.toggle('absolute');
            nav.classList.toggle('top-20');
            nav.classList.toggle('left-0');
            nav.classList.toggle('w-full');
            nav.classList.toggle('bg-white');
            nav.classList.toggle('p-8');
            nav.classList.toggle('shadow-xl');
            nav.classList.toggle('z-40');
        });
    }

    console.log("Finance Control Module Landing: Refinement Active.");
});
