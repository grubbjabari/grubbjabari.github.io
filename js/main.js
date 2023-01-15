/* Show Menu Functions */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* Validate if constant exists */

/* Menu Shown */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*Remove Menu Mobile*/

const navLink = document.querySelectorAll('.nav_link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*SwiperProjects */

let swiperProjects = new Swiper(".projects_container", {
    loop: true,
    spaceBetween: 24,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });

/* email */

const contactForm = document.getElementsById('contact-form'),
    contactName = document.getElementsById('contact-name'),
    contactEmail = document.getElementsById('contact-email'),
    contactProject = document.getElementsById('contact-project'),
    contactMessage = document.getElementsById('contact-message');

const sendEmail = (e) =>{
    e00.preventDefault()

    //Checks if field has a value
    if(contactName.value === '' || contactEmail.value === '' || contactProject.value === ''){
        //Add and remove color
        contactMessage.classList.remove('color-blue')
        contactMessage.classList.add('color-red');

        //Show message
        contactMessage.textContent = 'Write all the input fields!';
    } else {
        // ServiceID - templateID - #form - publicKey
        emailjs.sendForm('service_ji2vq9q', 'template_b4qko2s', '#contact-form','CQmLzhhvxyhzMoVBH')
            .then(() => {
                // Show message and add color
                contactMessage.classList.add('color-blue')
                contactMessage.textContent = 'Message sent'

                //Remove message after five seconds
                setTimeout(() => {
                    contactMessage.textContent = ''
                 }, 5000)
            }, (error) =>{
                alert('Sorry, Something went wrong', error)
            })
    }
}

contactForm.addEventListener('submit', sendEmail)