 // Initialize portfolio functionality
        document.addEventListener('DOMContentLoaded', function() {
            initializePortfolio();
        });

        function initializePortfolio() {
            // Setup smooth scrolling for navigation
            setupSmoothScrolling();
            
            // Initialize scroll animations
            initializeScrollAnimations();
            
            // Setup hover effects
            setupHoverEffects();
            
            // Update current year
            updateCurrentYear();
        }

        function setupSmoothScrolling() {
            document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        const offsetTop = targetElement.offsetTop - 80; // Account for sticky nav
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        }

        function initializeScrollAnimations() {
            const animateElements = document.querySelectorAll('.animate-on-scroll');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animated');
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            animateElements.forEach(el => observer.observe(el));
        }

        function setupHoverEffects() {
            // Enhanced project card hover effects
            document.querySelectorAll('.project-card').forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-10px) scale(1.02)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                });
            });

            // Skill card stagger animation on hover
            const skillsGrid = document.querySelector('.skills-grid');
            if (skillsGrid) {
                skillsGrid.addEventListener('mouseenter', function() {
                    const cards = this.querySelectorAll('.skill-card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.style.transform = 'translateY(-5px)';
                        }, index * 50);
                    });
                });

                skillsGrid.addEventListener('mouseleave', function() {
                    const cards = this.querySelectorAll('.skill-card');
                    cards.forEach(card => {
                        card.style.transform = 'translateY(0)';
                    });
                });
            }
        }

        function downloadResume() {
            // In a real implementation, this would download the actual PDF
            alert('Downloading resume...');
            
            // Simulate download analytics
            console.log('📊 Analytics: Resume downloaded');
        }

        function updateCurrentYear() {
            const yearElement = document.querySelector('.current-year');
            if (yearElement) {
                yearElement.textContent = new Date().getFullYear();
            }
        }

        // Typing effect for tagline
        function typeWriter(element, text, speed = 50) {
            let i = 0;
            element.innerHTML = '';
            
            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }
            type();
        }

        // Initialize typing effect on page load
        window.addEventListener('load', function() {
            const tagline = document.querySelector('.tagline');
            if (tagline) {
                const originalText = tagline.textContent;
                typeWriter(tagline, originalText, 50);
            }
        });

        // Parallax effect for header
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const header = document.querySelector('header');
            
            if (header) {
                const rate = scrolled * -0.3;
                header.style.transform = `translateY(${rate}px)`;
            }

            // Update navigation style on scroll
            const nav = document.querySelector('nav');
            if (nav) {
                if (scrolled > 100) {
                    nav.style.background = 'rgba(255, 255, 255, 0.98)';
                    nav.style.boxShadow = '0 2px 30px rgba(0,0,0,0.15)';
                } else {
                    nav.style.background = 'rgba(255, 255, 255, 0.95)';
                    nav.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
                }
            }
        });