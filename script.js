// Professional LinkTree Enhancement Script
class LinkTreeApp {
    constructor() {
        this.animationQueue = [];
        this.isLoaded = false;
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        this.init();
    }

    init() {
        // Wait for DOM content to load
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.onDOMReady());
        } else {
            this.onDOMReady();
        }
    }

    onDOMReady() {
        console.log('🚀 Professional LinkTree initialized');
        
        // Initialize all features
        this.setupLoadingAnimation();
        this.setupScrollAnimations();
        this.setupLinkInteractions();
        this.setupProfileAnimations();
        this.setupSocialInteractions();
        this.setupAccessibility();
        this.setupPerformanceOptimizations();
        
        // Start the loading sequence
        this.startLoadingSequence();
    }

    setupLoadingAnimation() {
        const loadingOverlay = document.getElementById('loadingOverlay');
        
        if (loadingOverlay) {
            // Simulate loading time for dramatic effect
            setTimeout(() => {
                loadingOverlay.classList.add('hidden');
                this.triggerEntranceAnimations();
                this.isLoaded = true;
            }, 1500);
        } else {
            // If no loading overlay, start animations immediately
            this.triggerEntranceAnimations();
            this.isLoaded = true;
        }
    }

    triggerEntranceAnimations() {
        // Animate profile section
        this.animateElement('.profile-wrapper', 0);
        
        // Animate section header
        this.animateElement('.section-header', 200);
        
        // Animate link cards with stagger
        const linkCards = document.querySelectorAll('.link-card');
        linkCards.forEach((card, index) => {
            this.animateElement(card, 300 + (index * 100));
        });
        
        // Animate social section
        this.animateElement('.social-section', 300 + (linkCards.length * 100) + 100);
        
        // Animate footer
        this.animateElement('.footer', 300 + (linkCards.length * 100) + 200);
    }

    animateElement(selector, delay = 0) {
        const element = typeof selector === 'string' ? document.querySelector(selector) : selector;
        
        if (element) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                element.style.transition = 'all 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, delay);
        }
    }

    setupScrollAnimations() {
        // Create intersection observer for scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    this.triggerElementAnimation(entry.target);
                }
            });
        }, this.observerOptions);

        // Observe all animatable elements
        const animatableElements = document.querySelectorAll(
            '.link-card, .social-icon, .profile-wrapper'
        );
        
        animatableElements.forEach(el => observer.observe(el));
    }

    triggerElementAnimation(element) {
        // Add custom animations based on element type
        if (element.classList.contains('link-card')) {
            this.animateLinkCard(element);
        } else if (element.classList.contains('social-icon')) {
            this.animateSocialIcon(element);
        }
    }

    animateLinkCard(card) {
        // Add dynamic animation effects
        card.style.animation = 'fadeInUp 0.6s ease forwards, float 6s ease-in-out infinite 2s';
    }

    animateSocialIcon(icon) {
        // Add subtle bounce animation
        icon.style.animation = 'fadeInUp 0.4s ease forwards, bounce 2s ease-in-out infinite 1s';
    }

    setupLinkInteractions() {
        const linkCards = document.querySelectorAll('.link-card');
        
        linkCards.forEach(card => {
            // Enhanced hover effects
            card.addEventListener('mouseenter', (e) => this.onLinkHover(e, true));
            card.addEventListener('mouseleave', (e) => this.onLinkHover(e, false));
            
            // Click analytics and feedback
            card.addEventListener('click', (e) => this.onLinkClick(e));
            
            // Touch interactions for mobile
            card.addEventListener('touchstart', (e) => this.onLinkTouch(e, true));
            card.addEventListener('touchend', (e) => this.onLinkTouch(e, false));
        });
    }

    onLinkHover(event, isEntering) {
        const card = event.currentTarget;
        const icon = card.querySelector('.link-icon');
        const arrow = card.querySelector('.link-arrow');
        
        if (isEntering) {
            // Enhanced hover animation
            card.style.transform = 'translateY(-6px) scale(1.02)';
            card.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.2)';
            
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
            }
            
            if (arrow) {
                arrow.style.transform = 'translateX(8px) scale(1.2)';
            }
            
            // Add ripple effect
            this.createRippleEffect(card, event);
            
        } else {
            // Reset animations
            card.style.transform = '';
            card.style.boxShadow = '';
            
            if (icon) {
                icon.style.transform = '';
            }
            
            if (arrow) {
                arrow.style.transform = '';
            }
        }
    }

    onLinkClick(event) {
        const card = event.currentTarget;
        const linkText = card.querySelector('h3')?.textContent || 'Unknown Link';
        
        // Analytics tracking (if you have analytics)
        console.log(`🔗 Link clicked: ${linkText}`);
        
        // Visual feedback
        this.createClickFeedback(card);
        
        // Add to user interaction history (optional)
        this.trackUserInteraction('link_click', linkText);
    }

    onLinkTouch(event, isStart) {
        const card = event.currentTarget;
        
        if (isStart) {
            card.style.transform = 'scale(0.98)';
            card.style.transition = 'transform 0.1s ease';
        } else {
            setTimeout(() => {
                card.style.transform = '';
            }, 100);
        }
    }

    createRippleEffect(element, event) {
        const ripple = document.createElement('div');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple 0.6s linear;
            left: ${x}px;
            top: ${y}px;
            width: ${size}px;
            height: ${size}px;
            pointer-events: none;
            z-index: 1;
        `;
        
        element.style.position = 'relative';
        element.style.overflow = 'hidden';
        element.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    createClickFeedback(element) {
        element.style.transform = 'scale(0.95)';
        element.style.transition = 'transform 0.1s ease';
        
        setTimeout(() => {
            element.style.transform = '';
        }, 150);
    }

    setupProfileAnimations() {
        const profilePic = document.querySelector('.profile-pic');
        const onlineIndicator = document.querySelector('.online-indicator');
        
        if (profilePic) {
            // Add interactive profile picture
            profilePic.addEventListener('click', () => {
                this.triggerProfileAnimation();
            });
            
            // Subtle breathing animation for online indicator
            if (onlineIndicator) {
                setInterval(() => {
                    onlineIndicator.style.animation = 'none';
                    setTimeout(() => {
                        onlineIndicator.style.animation = 'pulse 2s ease-in-out infinite';
                    }, 10);
                }, 4000);
            }
        }
    }

    triggerProfileAnimation() {
        const profilePic = document.querySelector('.profile-pic');
        const profileInfo = document.querySelector('.profile-info');
        
        // Fun easter egg animation
        profilePic.style.animation = 'spin 1s ease-in-out';
        
        setTimeout(() => {
            profilePic.style.animation = '';
        }, 1000);
        
        // Animate profile info
        if (profileInfo) {
            profileInfo.style.animation = 'bounce 0.5s ease';
            setTimeout(() => {
                profileInfo.style.animation = '';
            }, 500);
        }
        
        console.log('👋 Thanks for clicking my profile!');
    }

    setupSocialInteractions() {
        const socialIcons = document.querySelectorAll('.social-icon');
        
        socialIcons.forEach(icon => {
            icon.addEventListener('mouseenter', (e) => this.onSocialHover(e, true));
            icon.addEventListener('mouseleave', (e) => this.onSocialHover(e, false));
            icon.addEventListener('click', (e) => this.onSocialClick(e));
        });
    }

    onSocialHover(event, isEntering) {
        const icon = event.currentTarget;
        
        if (isEntering) {
            icon.style.transform = 'translateY(-4px) scale(1.1) rotate(5deg)';
            icon.style.filter = 'brightness(1.2) saturate(1.2)';
        } else {
            icon.style.transform = '';
            icon.style.filter = '';
        }
    }

    onSocialClick(event) {
        const icon = event.currentTarget;
        const platform = this.getSocialPlatform(icon);
        
        console.log(`📱 Social platform clicked: ${platform}`);
        this.trackUserInteraction('social_click', platform);
        
        // Visual feedback
        icon.style.animation = 'bounce 0.4s ease';
        setTimeout(() => {
            icon.style.animation = '';
        }, 400);
    }

    getSocialPlatform(icon) {
        const classes = icon.className;
        if (classes.includes('facebook')) return 'Facebook';
        if (classes.includes('twitter')) return 'Twitter';
        if (classes.includes('instagram')) return 'Instagram';
        if (classes.includes('linkedin')) return 'LinkedIn';
        if (classes.includes('tiktok')) return 'TikTok';
        if (classes.includes('discord')) return 'Discord';
        return 'Unknown';
    }

    setupAccessibility() {
        // Enhanced keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                this.handleTabNavigation(e);
            }
        });
        
        // Screen reader improvements
        this.improveScreenReaderExperience();
        
        // High contrast mode detection
        this.handleHighContrastMode();
    }

    handleTabNavigation(event) {
        const focusableElements = document.querySelectorAll(
            'a, button, [tabindex]:not([tabindex="-1"])'
        );
        
        focusableElements.forEach(el => {
            el.addEventListener('focus', () => {
                el.style.outline = '3px solid var(--primary-color)';
                el.style.outlineOffset = '2px';
            });
            
            el.addEventListener('blur', () => {
                el.style.outline = '';
                el.style.outlineOffset = '';
            });
        });
    }

    improveScreenReaderExperience() {
        // Add ARIA labels and descriptions
        const linkCards = document.querySelectorAll('.link-card');
        linkCards.forEach((card, index) => {
            const title = card.querySelector('h3')?.textContent;
            const description = card.querySelector('p')?.textContent;
            
            if (title && description) {
                card.setAttribute('aria-label', `${title}: ${description}`);
                card.setAttribute('role', 'link');
            }
        });
        
        // Add live region for dynamic content
        const liveRegion = document.createElement('div');
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.style.position = 'absolute';
        liveRegion.style.left = '-10000px';
        liveRegion.id = 'live-region';
        document.body.appendChild(liveRegion);
    }

    handleHighContrastMode() {
        // Detect high contrast mode
        if (window.matchMedia('(prefers-contrast: high)').matches) {
            document.body.classList.add('high-contrast');
        }
        
        // Listen for changes
        window.matchMedia('(prefers-contrast: high)').addEventListener('change', (e) => {
            if (e.matches) {
                document.body.classList.add('high-contrast');
            } else {
                document.body.classList.remove('high-contrast');
            }
        });
    }

    setupPerformanceOptimizations() {
        // Lazy load images
        this.setupLazyLoading();
        
        // Optimize animations for performance
        this.optimizeAnimations();
        
        // Memory management
        this.setupMemoryManagement();
    }

    setupLazyLoading() {
        const images = document.querySelectorAll('img[src]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.style.opacity = '0';
                        img.style.transition = 'opacity 0.3s ease';
                        
                        img.onload = () => {
                            img.style.opacity = '1';
                        };
                        
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            images.forEach(img => imageObserver.observe(img));
        }
    }

    optimizeAnimations() {
        // Use requestAnimationFrame for smooth animations
        let animationFrame;
        
        const optimizedAnimate = (callback) => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
            
            animationFrame = requestAnimationFrame(callback);
        };
        
        // Store reference for cleanup
        this.animationFrame = animationFrame;
    }

    setupMemoryManagement() {
        // Clean up event listeners and animations when page unloads
        window.addEventListener('beforeunload', () => {
            this.cleanup();
        });
    }

    trackUserInteraction(type, data) {
        // Store interaction data (localStorage, analytics, etc.)
        const interaction = {
            type,
            data,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent
        };
        
        // Store in localStorage for demo purposes
        try {
            const interactions = JSON.parse(localStorage.getItem('linkTreeInteractions') || '[]');
            interactions.push(interaction);
            
            // Keep only last 50 interactions
            if (interactions.length > 50) {
                interactions.splice(0, interactions.length - 50);
            }
            
            localStorage.setItem('linkTreeInteractions', JSON.stringify(interactions));
        } catch (error) {
            console.warn('Could not store interaction data:', error);
        }
    }

    startLoadingSequence() {
        // Add dynamic loading messages
        const loadingSpinner = document.querySelector('.loading-spinner p');
        const messages = [
            'Loading your experience...',
            'Preparing your links...',
            'Almost ready...',
            'Welcome!'
        ];
        
        let messageIndex = 0;
        const messageInterval = setInterval(() => {
            if (loadingSpinner && messageIndex < messages.length - 1) {
                messageIndex++;
                loadingSpinner.textContent = messages[messageIndex];
            } else {
                clearInterval(messageInterval);
            }
        }, 400);
        
        // Store interval for cleanup
        this.messageInterval = messageInterval;
    }

    cleanup() {
        // Clean up intervals and animation frames
        if (this.messageInterval) {
            clearInterval(this.messageInterval);
        }
        
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
        }
        
        console.log('🧹 LinkTree app cleaned up');
    }
}

// Additional CSS animations
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    @keyframes bounce {
        0%, 20%, 60%, 100% { transform: translateY(0); }
        40% { transform: translateY(-10px); }
        80% { transform: translateY(-5px); }
    }
    
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    
    @keyframes ripple {
        to { transform: scale(4); opacity: 0; }
    }
    
    .high-contrast {
        --primary-color: #000;
        --text-primary: #000;
        --text-secondary: #333;
        --background: #fff;
        --surface: #fff;
        --border: #000;
    }
    
    .high-contrast .link-card {
        border: 2px solid #000;
    }
    
    .high-contrast .social-icon {
        border: 2px solid #000;
    }
`;

document.head.appendChild(additionalStyles);

// Initialize the app
const linkTreeApp = new LinkTreeApp();

// Add service worker for offline functionality (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(() => console.log('🔧 Service Worker registered'))
            .catch(() => console.log('⚠️ Service Worker registration failed'));
    });
}

// Export for global access (if needed)
window.LinkTreeApp = LinkTreeApp;
