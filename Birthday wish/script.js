// Custom cursor
const cursor = document.getElementById('cursor');
let mouseX = 0, mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
});

// Simple entrance - just click anywhere on the screen
const entranceScreen = document.getElementById('entranceScreen');
const mainSite = document.getElementById('mainSite');

entranceScreen.addEventListener('click', function() {
    // Create confetti
    createConfetti();
    
    // Hide entrance and show main site
    entranceScreen.style.opacity = '0';
    setTimeout(() => {
        entranceScreen.classList.add('hidden');
        mainSite.style.display = 'block';
        typeHeroTitle();
    }, 1000);
});

function typeHeroTitle() {
    const title = document.getElementById('heroTitle');
    const text = '🎉 Happy Birthday Ashini! 🎉 <br> Wishing you all the joy and happiness today!';
    
    // Clear previous text and add typing cursor
    title.innerHTML = '<span class="typing-cursor">|</span>';
    
    let i = 0;
    let currentText = '';
    let lastTime = 0;
    const typingSpeed = 80; // milliseconds between characters
    
    function animateTyping(currentTime) {
        if (currentTime - lastTime >= typingSpeed) {
            // Add character by character
            currentText += text[i];
            
            // Update the content smoothly
            title.innerHTML = currentText + '<span class="typing-cursor">|</span>';
            
            i++;
            lastTime = currentTime;
            
            if (i >= text.length) {
                // Remove cursor when done
                setTimeout(() => {
                    title.innerHTML = currentText;
                }, 500);
                return; // Stop animation
            }
        }
        
        // Continue animation
        requestAnimationFrame(animateTyping);
    }
    
    // Start the animation
    requestAnimationFrame(animateTyping);
}


// Confetti animation
function createConfetti() {
    const container = document.getElementById('confettiContainer');
    const colors = ['#ff69b4', '#dda0dd', '#87ceeb', '#98fb98', '#ffd700', '#ff6347'];
    
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 3 + 's';
            container.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 3000);
        }, i * 50);
    }
}

// Photo gallery slideshow (every 5 seconds) and support new class 'gallary-slide'
let currentSlide = 0;
const slides = document.querySelectorAll('.gallery-container .gallery-slide, .gallery-container .gallary.slide');

if (slides.length > 0) {
    // Wrap existing captions into a right-side caption container
    slides.forEach((slide) => {
        const img = slide.querySelector('img');
        if (!img) return;
        // Collect text nodes (captions) after the image
        const nodes = Array.from(slide.childNodes).filter(n => n !== img && (n.nodeType === 3 || n.nodeType === 1));
        const captionText = nodes.map(n => n.textContent).join('').trim();
        if (captionText) {
            // Remove existing nodes and create caption div
            nodes.forEach(n => n.remove());
            const captionDiv = document.createElement('div');
            captionDiv.className = 'caption';
            captionDiv.textContent = captionText;
            slide.appendChild(captionDiv);
        }
    });

    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 2500);
}
// Attach balloon click events dynamically
function popBalloon(balloon, message) {
    // Show the message inside the balloon
    balloon.style.animation = 'none';  // stop floating
    balloon.style.transform = 'scale(1.5)';
    balloon.textContent = message;
    balloon.style.fontSize = '0.7rem';

    // Reset balloon after 3 seconds
    setTimeout(() => {
        balloon.textContent = '🎈';
        balloon.style.fontSize = '1rem';
        balloon.style.transform = 'scale(1)';
        balloon.style.animation = 'balloonFloat 3s ease-in-out infinite'; // restart animation
    }, 3000);
}

const balloonMessages = [
    "You are beautiful! ✨",
    "perfect Combination of Pure soul and brain! 💛",
    "You make every day brighter for everyone! ☀️",
    "You deserve all the happiness and Attention! 🌈",
    " What makes you special is your spirit, your dream and your goals. 🦄",
    "Never stop being wonderful! 🌟"
];

document.querySelectorAll('.balloon').forEach((balloon, index) => {
    balloon.addEventListener('click', () => {
        popBalloon(balloon, balloonMessages[index]);
    });
});

// Reset balloon after 3 seconds
setTimeout(() => {
    balloon.innerHTML = '🎈';
    balloon.style.fontSize = '1rem';
    balloon.style.transform = 'scale(1)';
    balloon.style.animation = 'balloonFloat 3s ease-in-out infinite';
}, 3000);

function generateWish() {
    const display = document.getElementById('wishDisplay');
    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    
    display.style.opacity = '0';
    setTimeout(() => {
        display.textContent = randomWish;
        display.style.opacity = '1';
    }, 300);
}

// Get audio and button
const music = document.getElementById('backgroundMusic');
const musicToggle = document.getElementById('musicToggle');

// Toggle music on button click
musicToggle.addEventListener('click', function () {
    if (music.paused) {
        music.play();
        this.textContent = '🎵'; // icon for playing
    } else {
        music.pause();
        this.textContent = '🔇'; // icon for muted
    }
});

// Also try to auto-play after entrance click
entranceScreen.addEventListener('click', function () {
    // start music on first click
    music.play().catch(err => console.log("Autoplay blocked until user clicks:", err));

    // show site content
    entranceScreen.style.opacity = '0';
    setTimeout(() => {
        entranceScreen.classList.add('hidden');
        mainSite.style.display = 'block';
        typeHeroTitle();
    }, 1000);
});

// Improve mobile compatibility: show default cursor on touch devices
try {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        document.body.style.cursor = 'auto';
        const customCursor = document.getElementById('cursor');
        if (customCursor) customCursor.style.display = 'none';
    }
} catch (_) {}

// Virtual Gift Box interaction
const giftBox = document.getElementById('giftBox');
const giftMessage = document.getElementById('giftMessage');
if (giftBox && giftMessage) {
    let opened = false;
    const placeholderHTML = '<div class="gift-content"><img class="gift-img" src="jatin1.jpg" alt="Surprise"><div class="gift-text">You have got my heart, what else I can give you ❤️</div></div>';
    giftMessage.innerHTML = placeholderHTML;
    giftBox.addEventListener('click', () => {
        opened = !opened;
        giftBox.setAttribute('aria-expanded', String(opened));
        giftMessage.setAttribute('aria-hidden', String(!opened));
        giftMessage.classList.toggle('show', opened);
    });
}

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    darkModeToggle.textContent = '☀️';
}

darkModeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    
    // Update button icon and save preference
    if (body.classList.contains('dark-mode')) {
        this.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        this.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});
