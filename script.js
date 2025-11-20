/* ============================================
   IVONNE'S BILINGUAL CHILDCARE - JAVASCRIPT
   ============================================ */

// Content translations
const translations = {
    es: {
        'hero.badge': 'Cuidado Bilingüe de Confianza',
        'hero.title': 'Donde Cada Niño Crece Feliz en Dos Idiomas',
        'hero.subtitle': 'Cuidado infantil cálido, seguro y totalmente bilingüe en Sacramento. Un entorno familiar donde los niños aprenden, juegan y crecen en español e inglés.',
        'hero.ctaPrimary': 'Agenda Tu Tour Gratuito',
        'hero.ctaSecondary': 'Llamar Ahora',
        'hero.trustLine': '⭐ 24 años de experiencia • Cientos de familias confían en nosotros',
        
        'benefits.title': 'Por Qué las Familias Nos Eligen',
        'benefits.subtitle': 'Todo lo que buscas para el desarrollo de tu hijo',
        'benefits.items.0.title': 'Cuidado con Amor',
        'benefits.items.0.description': 'Relaciones cálidas, respeto por cada niño y comunicación constante con las familias.',
        'benefits.items.1.title': 'Programa Bilingüe',
        'benefits.items.1.description': 'Inmersión natural en español e inglés a través del juego, canciones, cuentos y rutinas diarias.',
        'benefits.items.2.title': 'Familias Primero',
        'benefits.items.2.description': 'Trabajamos en equipo contigo para apoyar el desarrollo social, emocional y académico de tu hijo.',
        'benefits.items.3.title': 'Alimentación Saludable',
        'benefits.items.3.description': 'Comidas y snacks orgánicos nutritivos preparados con amor cada día.',
        
        'about.badge': 'Conoce a Ivonne',
        'about.title': 'Una Educadora Apasionada con más de 24 Años de Experiencia',
        'about.text': 'Soy María Ivonne Béjar, educadora de primera infancia y fundadora de Ivonne\'s Bilingual Childcare & Preschool. Cuento con más de 20 años de experiencia trabajando con bebés, niños pequeños y preescolares en un entorno familiar, cálido e inclusivo.\n\nEstudié Psicología en mi país natal y mi pasión es acompañar a los niños y a sus familias en sus primeros años de vida, con un enfoque especial en el bilingüismo, el respeto y la alegría por aprender.\n\nAdemás de dirigir mi programa, soy una líder comprometida en la defensa de los derechos de las educadoras de cuidado infantil en California, participando activamente en espacios de negociación, capacitación y organización comunitaria.',
        'about.credentials.0': 'Licenciada por el Estado de California',
        'about.credentials.1': 'Miembro NAFCC',
        'about.credentials.2': 'Más de 24 años de experiencia',
        'about.credentials.3': 'Líder en defensa de educadoras',
        
        'program.badge': 'Nuestro Programa',
        'program.title': 'Aprendizaje a Través del Juego',
        'program.subtitle': 'Edades 0-5 años • Full-time & Part-time',
        'program.features.0': 'Inmersión bilingüe español-inglés',
        'program.features.1': 'Curriculum basado en el juego',
        'program.features.2': 'Desarrollo socioemocional',
        'program.features.3': 'Preparación para kindergarten',
        'program.features.4': 'Horarios flexibles y asequibles',
        'program.features.5': 'Grupos pequeños con atención personalizada',
        
        'steps.title': 'Cómo Empezar',
        'steps.items.0.title': 'Agenda Tu Visita',
        'steps.items.0.description': 'Llámanos o completa el formulario para agendar un tour gratuito.',
        'steps.items.1.title': 'Conoce el Espacio',
        'steps.items.1.description': 'Visita nuestras instalaciones, conoce a Ivonne y haz todas tus preguntas.',
        'steps.items.2.title': 'Inscribe a Tu Hijo',
        'steps.items.2.description': 'Completa el proceso de inscripción y comienza esta hermosa aventura.',
        
        'testimonials.title': 'Lo Que Dicen las Familias',
        'testimonials.items.0.text': '"Mi hija se siente como en casa y está aprendiendo español e inglés de una manera natural y alegre."',
        'testimonials.items.0.author': '— Mamá de preescolar',
        'testimonials.items.1.text': '"Ivonne trata a los niños con tanto amor y respeto. Estamos muy agradecidos de haber encontrado este lugar."',
        'testimonials.items.1.author': '— Familia en Sacramento',
        'testimonials.items.2.text': '"El programa bilingüe es excepcional. Mi hijo está prosperando aquí y siempre está emocionado de ir."',
        'testimonials.items.2.author': '— Padre de niño pequeño',
        
        'faq.title': 'Preguntas Frecuentes',
        'faq.items.0.question': '¿Qué edades aceptan?',
        'faq.items.0.answer': 'Aceptamos niños desde recién nacidos hasta 5 años, incluyendo programas de PreK.',
        'faq.items.1.question': '¿Mi hijo necesita hablar español?',
        'faq.items.1.answer': 'No, aceptamos niños que hablan solo inglés, solo español, o ambos. La inmersión bilingüe es natural y se adapta a cada niño.',
        'faq.items.2.question': '¿Qué incluye el programa?',
        'faq.items.2.answer': 'Incluye educación bilingüe, comidas orgánicas, materiales educativos, y comunicación diaria con las familias sobre el progreso de su hijo.',
        'faq.items.3.question': '¿Están licenciados?',
        'faq.items.3.answer': 'Sí, estamos completamente licenciados por el Estado de California y somos miembros de NAFCC.',
        
        'finalCta.title': '¿Lista para Dar el Siguiente Paso?',
        'finalCta.subtitle': 'Agenda tu tour gratuito hoy y conoce el lugar donde tu hijo crecerá feliz.',
        'finalCta.button': 'Agendar Tour Gratuito',
        'finalCta.alternativeText': 'o llámanos al (916) 419-3563',
        
        'contact.title': 'Solicita Información o Agenda Tu Tour',
        'contact.fields.name': 'Nombre Completo',
        'contact.fields.email': 'Correo Electrónico',
        'contact.fields.phone': 'Teléfono',
        'contact.fields.childAge': 'Edad del Niño',
        'contact.fields.message': 'Mensaje (opcional)',
        'contact.submit': 'Enviar Solicitud',
        'contact.success': '¡Gracias! Te contactaremos pronto.',
        
        'footer.tagline': 'Cuidado bilingüe con amor en Sacramento',
        'footer.hours': 'Lunes - Viernes: 7:00 AM - 6:00 PM',
        'footer.hours.label': 'Horarios',
        'footer.contact.label': 'Contacto',
        'footer.location.label': 'Ubicación',
        'footer.copyright': '© 2024 Ivonne\'s Bilingual Childcare & Preschool. Todos los derechos reservados.',
    },
    en: {
        'hero.badge': 'Trusted Bilingual Care',
        'hero.title': 'Where Every Child Grows Happy in Two Languages',
        'hero.subtitle': 'Warm, safe, fully bilingual childcare in Sacramento. A family environment where children learn, play, and grow in Spanish and English.',
        'hero.ctaPrimary': 'Schedule Your Free Tour',
        'hero.ctaSecondary': 'Call Now',
        'hero.trustLine': '⭐ 24 years of experience • Hundreds of families trust us',
        
        'benefits.title': 'Why Families Choose Us',
        'benefits.subtitle': 'Everything you\'re looking for in your child\'s development',
        'benefits.items.0.title': 'Care with Love',
        'benefits.items.0.description': 'Warm relationships, respect for each child, and constant communication with families.',
        'benefits.items.1.title': 'Bilingual Program',
        'benefits.items.1.description': 'Natural Spanish-English immersion through play, songs, stories, and daily routines.',
        'benefits.items.2.title': 'Families First',
        'benefits.items.2.description': 'We work as a team with you to support your child\'s social, emotional, and academic development.',
        'benefits.items.3.title': 'Healthy Nutrition',
        'benefits.items.3.description': 'Nutritious organic meals and snacks prepared with love every day.',
        
        'about.badge': 'Meet Ivonne',
        'about.title': 'A Passionate Educator with Over 24 Years of Experience',
        'about.text': 'I\'m María Ivonne Béjar, early childhood educator and founder of Ivonne\'s Bilingual Childcare & Preschool. I have over 20 years of experience working with infants, toddlers, and preschoolers in a family-oriented, warm, and inclusive environment.\n\nI studied Psychology in my home country, and my passion is supporting children and their families during their early years, with a special focus on bilingualism, respect, and the joy of learning.\n\nIn addition to running my program, I\'m a committed leader in advocating for the rights of childcare educators in California, actively participating in negotiation spaces, training, and community organizing.',
        'about.credentials.0': 'Licensed by the State of California',
        'about.credentials.1': 'NAFCC Member',
        'about.credentials.2': 'Over 24 years of experience',
        'about.credentials.3': 'Leader in childcare advocacy',
        
        'program.badge': 'Our Program',
        'program.title': 'Learning Through Play',
        'program.subtitle': 'Ages 0-5 • Full-time & Part-time',
        'program.features.0': 'Spanish-English bilingual immersion',
        'program.features.1': 'Play-based curriculum',
        'program.features.2': 'Social-emotional development',
        'program.features.3': 'Kindergarten readiness',
        'program.features.4': 'Flexible and affordable schedules',
        'program.features.5': 'Small groups with personalized attention',
        
        'steps.title': 'How to Get Started',
        'steps.items.0.title': 'Schedule Your Visit',
        'steps.items.0.description': 'Call us or complete the form to schedule a free tour.',
        'steps.items.1.title': 'See the Space',
        'steps.items.1.description': 'Visit our facilities, meet Ivonne, and ask all your questions.',
        'steps.items.2.title': 'Enroll Your Child',
        'steps.items.2.description': 'Complete the enrollment process and begin this beautiful journey.',
        
        'testimonials.title': 'What Families Say',
        'testimonials.items.0.text': '"My daughter feels at home and is learning Spanish and English in such a natural and joyful way."',
        'testimonials.items.0.author': '— Preschool Mom',
        'testimonials.items.1.text': '"Ivonne treats the children with so much love and respect. We are so grateful to have found this place."',
        'testimonials.items.1.author': '— Sacramento Family',
        'testimonials.items.2.text': '"The bilingual program is exceptional. My son is thriving here and is always excited to go."',
        'testimonials.items.2.author': '— Toddler Dad',
        
        'faq.title': 'Frequently Asked Questions',
        'faq.items.0.question': 'What ages do you accept?',
        'faq.items.0.answer': 'We accept children from newborns to 5 years old, including PreK programs.',
        'faq.items.1.question': 'Does my child need to speak Spanish?',
        'faq.items.1.answer': 'No, we accept children who speak only English, only Spanish, or both. Bilingual immersion is natural and adapts to each child.',
        'faq.items.2.question': 'What does the program include?',
        'faq.items.2.answer': 'It includes bilingual education, organic meals, educational materials, and daily communication with families about your child\'s progress.',
        'faq.items.3.question': 'Are you licensed?',
        'faq.items.3.answer': 'Yes, we are fully licensed by the State of California and are members of NAFCC.',
        
        'finalCta.title': 'Ready to Take the Next Step?',
        'finalCta.subtitle': 'Schedule your free tour today and see the place where your child will grow happy.',
        'finalCta.button': 'Schedule Free Tour',
        'finalCta.alternativeText': 'or call us at (916) 419-3563',
        
        'contact.title': 'Request Information or Schedule Your Tour',
        'contact.fields.name': 'Full Name',
        'contact.fields.email': 'Email',
        'contact.fields.phone': 'Phone',
        'contact.fields.childAge': 'Child\'s Age',
        'contact.fields.message': 'Message (optional)',
        'contact.submit': 'Send Request',
        'contact.success': 'Thank you! We\'ll contact you soon.',
        
        'footer.tagline': 'Bilingual care with love in Sacramento',
        'footer.hours': 'Monday - Friday: 7:00 AM - 6:00 PM',
        'footer.hours.label': 'Hours',
        'footer.contact.label': 'Contact',
        'footer.location.label': 'Location',
        'footer.copyright': '© 2024 Ivonne\'s Bilingual Childcare & Preschool. All rights reserved.',
    }
};

// Current language
let currentLanguage = localStorage.getItem('language') || 'es';

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguage();
    initializeMobileMenu();
    initializeFAQ();
    initializeForm();
});

// Language switching
function initializeLanguage() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === currentLanguage) {
            btn.classList.add('active');
        }
        
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
    
    updatePageLanguage();
}

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    updatePageLanguage();
}

function updatePageLanguage() {
    const elements = document.querySelectorAll('[data-i18n]');
    const trans = translations[currentLanguage];
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (trans[key]) {
            const text = trans[key];
            
            // Handle multiline text
            if (text.includes('\n')) {
                element.innerHTML = '';
                text.split('\n\n').forEach(paragraph => {
                    const p = document.createElement('p');
                    p.textContent = paragraph;
                    element.appendChild(p);
                });
            } else {
                element.textContent = text;
            }
        }
    });
    
    // Update labels with data-i18n-key
    const labelElements = document.querySelectorAll('[data-i18n-key]');
    labelElements.forEach(element => {
        const key = element.getAttribute('data-i18n-key');
        if (trans[key]) {
            element.textContent = trans[key];
        }
    });
    
    // Update HTML content (for quoted text)
    const htmlElements = document.querySelectorAll('[data-i18n-html]');
    htmlElements.forEach(element => {
        const key = element.getAttribute('data-i18n-html');
        if (trans[key]) {
            element.innerHTML = trans[key];
        }
    });
}

// Mobile menu toggle
function initializeMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-mobile .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        });
    });
}

// FAQ toggle
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
}

function toggleFaq(button) {
    const faqItem = button.closest('.faq-item');
    if (faqItem) {
        faqItem.classList.toggle('active');
    }
}

// Form handling
function initializeForm() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
}

function handleFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formMessage = document.getElementById('formMessage');
    const trans = translations[currentLanguage];
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        childAge: document.getElementById('childAge').value,
        message: document.getElementById('message').value,
    };
    
    // Validate form
    if (!formData.name || !formData.email || !formData.phone) {
        showFormMessage(trans['contact.success'], 'error');
        return;
    }
    
    // Show success message
    showFormMessage(trans['contact.success'], 'success');
    
    // Reset form
    form.reset();
    
    // Log form data (in production, send to server)
    console.log('Form submitted:', formData);
    
    // Optional: Send to server
    // sendFormToServer(formData);
}

function showFormMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    
    // Hide message after 3 seconds
    setTimeout(() => {
        formMessage.className = 'form-message';
    }, 3000);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add animation to elements on scroll
function observeElements() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.benefit-card, .step-card, .testimonial-card').forEach(el => {
        observer.observe(el);
    });
}

// Initialize animations when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observeElements);
} else {
    observeElements();
}

// Utility function to send form data to server (optional)
function sendFormToServer(formData) {
    // Example: Send to your backend
    // fetch('/api/contact', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData)
    // })
    // .then(response => response.json())
    // .then(data => console.log('Success:', data))
    // .catch((error) => console.error('Error:', error));
}

// Prevent form submission if needed
window.addEventListener('beforeunload', function(e) {
    const form = document.getElementById('contactForm');
    if (form && form.classList.contains('dirty')) {
        e.preventDefault();
        e.returnValue = '';
    }
});
