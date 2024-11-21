// toggle menu 
const toggleBtn = document.querySelectorAll(".toggle");
const toggleMenu = document.getElementById("hiddenMenu");
toggleMenu.style.display = 'none';
let toggle = false;
toggleBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        toggle = !toggle;
        if (!toggle) {
            toggleMenu.style.display = 'none';
        } else {
            toggleMenu.style.display = "flex"
        }

    })
})