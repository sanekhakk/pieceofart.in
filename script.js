const menuButton = document.getElementById('menuButton');
        const sideMenu = document.getElementById('sideMenu');

        // Toggle the menu visibility on button click
        menuButton.addEventListener('click', (event) => {
            sideMenu.classList.toggle('open');
            event.stopPropagation();
        });

        // Close the menu when clicked anywhere outside of it
        document.addEventListener('click', (event) => {
            if (!sideMenu.contains(event.target) && !menuButton.contains(event.target)) {
                sideMenu.classList.remove('open');
            }
        });

        // Close menu if a menu item is clicked
        sideMenu.addEventListener('click', (event) => {
            if (event.target.tagName === 'A') {
                sideMenu.classList.remove('open');
            }
        });

        // JavaScript to change banners
        let currentIndex = 0;
        const images = document.querySelectorAll('.carousel-image');
        const totalImages = images.length;

        function showNextBanner() {
            currentIndex = (currentIndex + 1) % totalImages;
            const offset = -currentIndex * 100;
            document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
        }

        setInterval(showNextBanner, 4000); // Change banner every 4 seconds
    // JavaScript (Optional) for Interactivity or Animations
    document.querySelectorAll('.buy-button').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Thank you for your purchase!');
        });
    });

    const slider = document.querySelector('.feedback-slider');
    const feedbacks = document.querySelectorAll('.feedback');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const dotsContainer = document.querySelector('.dots');
    let index = 0;

    // Create dots for each feedback
    feedbacks.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dotsContainer.appendChild(dot);
        dot.addEventListener('click', () => {
            moveToSlide(i);
        });
    });

    const dots = document.querySelectorAll('.dot');

    function updateDots() {
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    function moveToSlide(i) {
        index = i;
        slider.style.transform = `translateX(-${index * 100}%)`;
        updateDots();
    }

    function nextSlide() {
        if (index < feedbacks.length - 1) {
            index++;
        } else {
            index = 0;
        }
        moveToSlide(index);
    }

    function prevSlide() {
        if (index > 0) {
            index--;
        } else {
            index = feedbacks.length - 1;
        }
        moveToSlide(index);
    }

    rightArrow.addEventListener('click', nextSlide);
    leftArrow.addEventListener('click', prevSlide);

    // Auto-slide every 5 seconds
    setInterval(nextSlide, 5000);

    document.querySelectorAll(".social-icons a").forEach(icon => {
        icon.addEventListener("mouseover", () => {
            console.log(`Hovering over ${icon.querySelector(".tooltip").textContent}`);
        });

        icon.addEventListener("click", () => {
            console.log(`Clicked on ${icon.querySelector(".tooltip").textContent}`);
        });
    });