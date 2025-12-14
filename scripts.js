window.onload = function () {
    window.scrollTo(0, 0); 
    handleScroll(); 
    handleSectionScroll();
};

window.addEventListener("scroll", function () {
    handleScroll(); 
    handleSectionScroll(); 
});

function handleScroll() {
    const logoName = document.querySelector("header strong.logo-name");
    const logo = document.querySelector(".logo");
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        logo.classList.add("visible-logo");
        logoName.classList.remove("visible-logo-name"); 
    } else {
        logo.classList.remove("visible-logo");
        logoName.classList.add("visible-logo-name");
    }
}

function handleSectionScroll() {
    const sections = document.querySelectorAll('.section');
    const windowHeight = window.innerHeight;

    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        
        const triggerPoint = windowHeight * 0.80; 

        if (rect.top < triggerPoint && rect.bottom > 0) {
            
            const progress = (triggerPoint - rect.top) / triggerPoint;
            
            const opacityValue = Math.min(1, progress * 5); 
            
            const translateYValue = Math.max(0, 50 * (1 - progress)); 

            section.style.transform = `translateY(${translateYValue}px)`;
            section.style.opacity = opacityValue;

        } else if (rect.top >= triggerPoint) {
            section.style.transform = 'translateY(50px)';
            section.style.opacity = 0;
        } else if (rect.bottom <= 0) {
             section.style.transform = 'translateY(0)';
             section.style.opacity = 1;
        }
    });
}
