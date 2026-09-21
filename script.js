// ================= BOOKING BUTTON =================

const bookingButton = document.querySelector(".nav-button");

bookingButton.addEventListener("click", function () {
    console.log("Booking button clicked!");
});


// ================= SMOOTH SCROLL =================

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const section = document.querySelector(
            link.getAttribute("href")
        );

        if (section) {

            event.preventDefault();

            section.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});