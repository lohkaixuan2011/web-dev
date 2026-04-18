var codingProject = document.querySelectorAll (".project");

codingProject.forEach((project, index) => {
    project.dataset.aos = "fade-down";
    project.dataset.aosDuration = 1500;
    project.dataset.aosDelay = index * 300; [0, 1, 2, 3, ]
})

AOS.init({
    once: true
});