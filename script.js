document.addEventListener('DOMContentLoaded', () => {

    // --- Tab Logic for Vision/Mission Card ---
    window.openTab = function(evt, tabName) {
        // Hide all tab contents
        const tabContents = document.getElementsByClassName("tab-content");
        for (let i = 0; i < tabContents.length; i++) {
            tabContents[i].classList.remove("active");
        }

        // Remove active class from all buttons
        const tablinks = document.getElementsByClassName("tab-btn");
        for (let i = 0; i < tablinks.length; i++) {
            tablinks[i].classList.remove("active");
        }

        // Show current tab and add active class to button
        document.getElementById(tabName).classList.add("active");
        evt.currentTarget.classList.add("active");
    }

    // --- Counter Animation Logic ---
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // The lower the slower

    const startCounting = (counter) => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(() => startCounting(counter), 20); 
        } else {
            counter.innerText = target;
        }
    };

    // Intersection Observer to start counting when scrolled into view
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const countObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounting(entry.target);
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        countObserver.observe(counter);
    });
});
