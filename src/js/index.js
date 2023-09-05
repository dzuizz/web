console.log("HEY")

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
});

const inactiveElements = document.querySelectorAll('inactive');
inactiveElements.forEach((el) => observer.observe(el));