document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(this);

    const data = {
        name: formData.get("uname"),
        email: formData.get("email"),
        mobile: formData.get("mobile"),
        file: formData.get("file") ? formData.get("file").name : "No file uploaded",
        feedback: formData.get("feedback"),
    };

    console.log("Form Submitted:", data);

    alert("Form submitted successfully!");
});

const stars = document.querySelectorAll('.star');
const ratingText = document.getElementById('ratingText');

stars.forEach(star => {
    star.addEventListener('click', () => {
        const value = star.dataset.value;
        ratingText.textContent = `Rating: ${value}`;
        
        stars.forEach(s => s.classList.remove('active'));
        star.classList.add('active');
        let prev = star;
        while (prev.previousElementSibling) {
            prev = prev.previousElementSibling;
            prev.classList.add('active');
        }
    });

    star.addEventListener('mouseover', () => {
        stars.forEach(s => s.classList.remove('hover'));
        star.classList.add('hover');
        let prev = star;
        while (prev.previousElementSibling) {
            prev = prev.previousElementSibling;
            prev.classList.add('hover');
        }
    });

    star.addEventListener('mouseleave', () => {
        stars.forEach(s => s.classList.remove('hover'));
    });
});