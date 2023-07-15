const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddentElements = document.querySelectorAll('.hidden');
hiddentElements.forEach(el => {
    observer.observe(el);
});


const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show2');
        } else {
            entry.target.classList.remove('show2');
        }
    });
});

const hiddentElements2 = document.querySelectorAll('.hidden2');
hiddentElements2.forEach(el => {
    observer2.observe(el);
});