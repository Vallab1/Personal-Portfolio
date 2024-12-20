
var projectsSlider = document.querySelector('.projects-slider');
var slideAmount = 300;
var currentScrollPosition = 0;
function slideProjects(direction) {
    if (direction === 'left') {
        currentScrollPosition -= slideAmount;
        if (currentScrollPosition < 0) {
            currentScrollPosition = 0;
        }
    } else if (direction === 'right') {
        currentScrollPosition += slideAmount;
        if (currentScrollPosition > projectsSlider.scrollWidth - projectsSlider.clientWidth) {
            currentScrollPosition = projectsSlider.scrollWidth - projectsSlider.clientWidth;
        }
    }
    projectsSlider.scrollTo({
        left: currentScrollPosition,
        behavior: 'smooth',
    });
}

document.getElementById('button-download').addEventListener('click', function() {
    const link = document.createElement('a');
    
    link.href = '"E:/Document/Baijnath/Baijnath.pdf"';
    
    link.download = 'My_Resume.pdf';
    
    document.body.appendChild(link);
    
    link.click();
    
    document.body.removeChild(link);
});
