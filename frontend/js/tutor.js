document.addEventListener('DOMContentLoaded', () => {
    // Wait slightly to ensure Driver.js is loaded from CDN
    setTimeout(() => {
        if (typeof window.driver === 'undefined') {
            console.error("Driver.js not loaded.");
            return;
        }

        const driver = window.driver.js.driver;
        const driverObj = driver({
            showProgress: true,
            animate: true,
            padding: 10,
            popoverClass: 'driver-theme',
            steps: [
                {
                    element: '#navbarNav',
                    popover: {
                        title: 'Navigation Menu',
                        description: 'Use these links to explore Education, Healthcare, Agriculture, and Policies.',
                        side: "bottom", align: 'start'
                    }
                },
                {
                    element: '#languageDropdown',
                    popover: {
                        title: 'Multilingual Support',
                        description: 'Select your preferred language here. We support multiple Indian languages.',
                        side: "bottom", align: 'end'
                    }
                },
                {
                    element: '#hero-section',
                    popover: {
                        title: 'Welcome to Gruhjeevandeep',
                        description: 'This is your guiding light for a better life. Empowering you with vital knowledge.',
                        side: "bottom", align: 'center'
                    }
                },
                {
                    element: '#services-grid',
                    popover: {
                        title: 'Core Services',
                        description: 'Click on any of these cards to dive deep into specific opportunities and resources.',
                        side: "top", align: 'center'
                    }
                },
                {
                    element: '#about',
                    popover: {
                        title: 'About Us',
                        description: 'Learn more about our non-profit organization and our mission.',
                        side: "top", align: 'center'
                    }
                }
            ]
        });

        // Add floating tutor button to DOM
        const tutorBtn = document.createElement('button');
        tutorBtn.className = 'btn-tutor';
        tutorBtn.innerHTML = '<i class="fas fa-question"></i>';
        tutorBtn.title = 'Start Interactive Tutor';
        document.body.appendChild(tutorBtn);

        tutorBtn.addEventListener('click', () => {
            driverObj.drive();
        });

    }, 500);
});
