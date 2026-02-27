window.onload = function () {

    window.scrollTo(0, 0); 

    handleScroll(); 
    handleSectionScroll();
};

window.addEventListener("scroll", function () {

    requestAnimationFrame(() => {
        handleScroll(); 
        handleSectionScroll(); 
    });
});

function handleScroll() {
    const logoName = document.querySelector("header strong.logo-name");
    const logo = document.querySelector(".logo");
    
    if (window.scrollY > 0) {
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
    const triggerPoint = windowHeight * 0.80;

    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        
        if (rect.top < triggerPoint && rect.bottom > 0) {
            const progress = (triggerPoint - rect.top) / triggerPoint;
            
            const opacityValue = Math.min(1, progress * 5); 

            const translateYValue = Math.max(0, 50 * (1 - progress)); 

            section.style.transform = `translateY(${translateYValue}px)`;
            section.style.opacity = opacityValue;

        } 

        else if (rect.top >= triggerPoint) {
            section.style.transform = 'translateY(50px)';
            section.style.opacity = 0;
        } 

        else if (rect.bottom <= 0) {
             section.style.transform = 'translateY(0)';
             section.style.opacity = 1;
        }
    });
}

const uploadBtn = document.querySelector('.upload-btn');
const fileList = document.getElementById('file-list');

if (uploadBtn) {
    uploadBtn.addEventListener('click', () => {
        const fileName = prompt("Nom du fichier à simuler :");
        
        if (fileName) {
            const fileDiv = document.createElement('div');
            fileDiv.className = 'file-card';

            fileDiv.innerHTML = `
                <span>📄</span> 
                <p>${fileName}</p>
            `;
            
            fileList.appendChild(fileDiv);
            
            alert(`${fileName} a été crypté et stocké en toute sécurité sur le territoire national (RDC) !`);
        }
    });
}
