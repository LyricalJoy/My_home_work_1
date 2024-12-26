const sliderContainer = document.querySelector('.slider-container');
        const images = document.querySelectorAll('.slider img');
        const caption = document.querySelector('.slider .caption');
        const status = document.querySelector('.slider .status');
        const prevButton = document.getElementById('prev');
        const nextButton = document.getElementById('next');

        const captions = [
            'SCAR-L',
            'M416',
            'Гроза',
            'AKM',
            'Beryl M762'
        ];

        let currentIndex = 0;
        const imageWidth = images[0].clientWidth;

        function updateSlider() {
            sliderContainer.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
            caption.textContent = captions[currentIndex];
            status.textContent = `Слайд ${currentIndex + 1} из ${images.length}`;
            prevButton.disabled = currentIndex === 0;
            nextButton.disabled = currentIndex === images.length - 1;
        }
        
        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateSlider();
            }
        });
        
        nextButton.addEventListener('click', () => {
            if (currentIndex < images.length - 1) {
                currentIndex++;
                updateSlider();
            }
        });
        
        // Инициализация слайдера
        updateSlider();