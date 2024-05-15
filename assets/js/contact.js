/*=============== EMAIL JS ===============*/
const contactForm = document.getElementsById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail=(e) =>{
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_35m62c7','template_mnl5pol','contact-form','t9BJLzyOkEhkPFobd')
    .then(()=>{
         // Show sent message.
         contactMessage.textContent = '  Message sent successfully ✅'

          // Remove message after five seconds
          setTimeout(() =>{
            contactMessage.textContent = ''
          }, 5000) 
            // Clear input fields
            contactForm.reset()  
    },() =>{
          // Show error message
          contactMessage.textContent = 'Message not sent (service error) ❌'

    })
}

contactForm.addEventListener('submit', sendEmail)