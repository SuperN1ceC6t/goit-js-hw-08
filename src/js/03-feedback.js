import { throttle } from 'lodash'

const form = document.querySelector(".feedback-form")
const emailInput = form.querySelector('input[name="email"]')
const messageInput = form.querySelector('textarea[name="message"]')

const saveFormData = () => {
    const formData = {
        email: emailInput.value,
        message: messageInput.value,
    }
    localStorage.setItem('feedback-form-state', JSON.stringify(formData))
}

const populateSaveFormData = () => {
    const savedFormData = localStorage.getItem('feedback-form-state')
    if (savedFormData) {
        const formData = JSON.parse(savedFormData)
        emailInput.value = formData.email;
        messageInput.value = formData.message;
    }
}

const submitForm = (event) => {
    event.preventDefault()
    const formData = {
        email: emailInput.value,
        message: messageInput.value,
    }
    if (validateForm(formData)) {
        console.log(formData);
        form.reset()
    } else { alert('All fields must be fiellded') }
    localStorage.clear()
    emailInput.value = ''
    messageInput.value = ''
}

function validateForm(data) {
    for (let key in data) {
        if (data[key] === '') { return false }
    }
    return true
}

emailInput.addEventListener('input', throttle(saveFormData, 500))
messageInput.addEventListener('input', throttle(saveFormData, 500))
form.addEventListener('submit', submitForm)

populateSaveFormData()