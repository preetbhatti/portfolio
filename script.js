// Ensure GSAP and ScrollTrigger are loaded in your HTML head or before this script
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/ScrollTrigger.min.js"></script>

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

// --- Basic Fade-in and Slide-up Animations ---

gsap.utils.toArray('.section').forEach(section => {
    gsap.from(section, { // from() sets the initial state
        opacity: 0, // Start with opacity 0
        y: 50, // Start 50px down
        duration: 1, // Animation duration
        ease: 'power2.out', // Easing function
        scrollTrigger: { // Create a scroll trigger for each section
            trigger: section, // Element that triggers the animation
            start: 'top 80%', // When the top of the trigger hits 80% of the viewport height
            toggleActions: 'play none none none', // Play the animation once
        }
    });
});

// --- More Complex Animations for Specific Elements ---

// Example: Animate the profile picture
gsap.from('.profile-picture', {
    opacity: 0,
    scale: 0.5,
    duration: 1,
    ease: 'back.out(1.2)',
    scrollTrigger: {
        trigger: '.profile-picture', // Element that triggers the animation
        start: 'top 80%',
        toggleActions: 'play none none none',
    }
});

// Example: Animate skill bars (assuming you have elements with class 'skill-bar')
gsap.utils.toArray('.skill-bar').forEach(bar => {
    gsap.from(bar, { // Animate the width from 0% to its natural width
        width: '0%',
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: bar, // Element that triggers the animation
            start: 'top 90%',
            toggleActions: 'play none none none',
        }
    });
});

// Example: Staggered animation for project items (assuming elements with class 'project-item')
//gsap.from('.project-item', { // Apply animation to all elements with class 'project-item'
//    opacity: 0, // Start with opacity 0
//    y: 50, // Start 50px down
//    duration: 0.8, // Animation duration for each item
//    stagger: 0.3, // Stagger the animation by 0.3 seconds for each subsequent item
//    ease: 'power2.out', // Easing function
//    scrollTrigger: {
//        trigger: '.project-grid', // Assuming projects are in a container with class 'project-grid'
//        start: 'top 80%', // When the top of the trigger hits 80% of the viewport height
//        toggleActions: 'play none none none', // Play the animation once
//    }
//});

// --- More specific animations for different elements ---

// Example: Animate elements with a specific class (e.g., '.animated-heading')
gsap.utils.toArray('.animated-heading').forEach(heading => {
    gsap.from(heading, {
        opacity: 0, // Start with opacity 0
        x: -50, // Start 50px to the left
        duration: 1, // Animation duration
        ease: 'power3.out',
        scrollTrigger: {
            trigger: heading,
            start: 'top 85%',
            toggleActions: 'play none none none',
        }
    });
});

// Example: Animate elements with another class (e.g., '.animated-text')
//gsap.from('.animated-text', { // Apply animation to all elements with class 'animated-text'
//    opacity: 0, // Start with opacity 0
//    y: 30, // Start 30px down
//    duration: 1, // Animation duration
//    ease: 'power2.out', // Easing function
//    stagger: 0.1, // Stagger the animation slightly if multiple elements
//    scrollTrigger: {
//        trigger: '.animated-text', // Element that triggers the animation
//        start: 'top 90%',
//        toggleActions: 'play none none none',
//    }
//});