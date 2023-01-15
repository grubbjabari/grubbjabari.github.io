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

const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactProject = document.getElementById('contact-project'),
    contactMessage = document.getElementById('contact-message');

const sendEmail = (e) =>{
    e.preventDefault()

    //Checks if field has a value
    if(contactName.value === '' || contactEmail.value === '' || contactProject.value === ''){
        //Add and remove color
        contactMessage.classList.remove('color-blue')
        contactMessage.classList.add('color-red')

        //Show message
        contactMessage.textContent = 'Write all the input fields!'
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

/* Scroll sections Active link*/

const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/* Show scroll up */

const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* Dark Light Theme */

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'


// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-fill' : 'ri-sun-line'

// Validate if the user previously chose a topic
if (selectedTheme) {
  // If validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-fill' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/* Header Background */
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/* Scrol Reveal Animation*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true /* Animations repeat*/
})

sr.reveal('.home_data, .project_container, .footer_container')
sr.reveal('.home_info div', {delay: 600, origin: 'bottom', intval: 100})
sr.reveal('.skills_content:nth-child(1), .contact_content:nth-child(1)', {origin: 'left'})
sr.reveal('.skills_content:nth-child(2), .contact_content:nth-child(2)', {origin: 'right'})
sr.reveal('.skills_content:nth-child(1)', {origin: 'left'})