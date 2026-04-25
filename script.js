// Animation for skill bars when scrolling into view
window.addEventListener('scroll', () => {
    const skills = document.querySelectorAll('.skill-level');
    skills.forEach(skill => {
        const rect = skill.getBoundingClientRect();
        if(rect.top < window.innerHeight){
            skill.style.width = skill.getAttribute('style').split(":")[1];
        }
    });
});
