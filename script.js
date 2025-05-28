// Script principal do protótipo Kadihope

document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const authButtons = document.querySelector('.auth-buttons');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            authButtons.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
    }
    
    // Slider de depoimentos
    const testimonialDots = document.querySelectorAll('.testimonial-dots .dot');
    
    if (testimonialDots.length > 0) {
        testimonialDots.forEach((dot, index) => {
            dot.addEventListener('click', function() {
                // Remover classe active de todos os dots
                testimonialDots.forEach(d => d.classList.remove('active'));
                // Adicionar classe active ao dot clicado
                this.classList.add('active');
                
                // Aqui seria implementada a lógica para mudar o slide
                console.log(`Mudando para o slide ${index + 1}`);
            });
        });
    }
    
    // Simulação de busca
    const searchBar = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    
    if (searchButton) {
        searchButton.addEventListener('click', function() {
            if (searchBar.value.trim() !== '') {
                alert(`Buscando por: ${searchBar.value}`);
            }
        });
    }
    
    // Simulação de inscrição na newsletter
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            
            if (emailInput.value.trim() !== '') {
                alert(`Email ${emailInput.value} inscrito com sucesso!`);
                emailInput.value = '';
            }
        });
    }
    
    // Simulação de solicitação de equipamento
    const requestButtons = document.querySelectorAll('.equipment-card .btn-primary');
    
    if (requestButtons.length > 0) {
        requestButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const equipmentTitle = this.closest('.equipment-card').querySelector('h3').textContent;
                alert(`Solicitação enviada para: ${equipmentTitle}`);
            });
        });
    }
    
    // Simulação de seletor de idioma
    const languageSelector = document.querySelector('.language-selector select');
    
    if (languageSelector) {
        languageSelector.addEventListener('change', function() {
            alert(`Idioma alterado para: ${this.options[this.selectedIndex].text}`);
        });
    }
    
    // Animação suave de scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    console.log('Kadihope prototype initialized');
});
