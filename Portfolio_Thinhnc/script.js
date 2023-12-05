/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== Back to Top =====*/
document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.querySelector('.backtotop');

    backToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


/*=== Contact ====*/
function sendMail() {
    // Collect data from form elements
    var name = document.querySelector("#name").value;
    var senderEmail = document.querySelector("#email").value;
    var subject = document.querySelector("#subject").value;
    var message = document.querySelector("#message").value;

    // Display a message to the user if all fields are empty
    if (!name && !senderEmail && !subject && !message) {
        alert("Please enter some information before sending the email.");
        return;
    }

    // Check if any of the required fields are empty
    if (!name || !senderEmail || !subject || !message) {
        // Display a message to the user
        alert("Please fill out all fields before sending the email.");
        return; // Do not proceed with sending the email
    }

    // Initialize Email.js
    emailjs.init("awonNP5eIycs7In4O");

    // Set parameters for the email
    var params = {
        name: name,
        senderemail: senderEmail,
        subject: subject,
        message: message,
    };

    // Set service and template IDs
    var serviceID = "service_prgo3qq";
    var templateID = "template_rxi4tls";

    // Send the email
    emailjs.send(serviceID, templateID, params)
        .then(res => {
            // Email sent successfully
            alert("Email sent successfully");
        })
        .catch(error => {
            // Error sending email
            console.error("Error sending email:", error);
        });
}


/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    //     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });
sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 }); 