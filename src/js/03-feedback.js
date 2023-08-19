import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  email: document.querySelector('.feedback-form input[name="email"]'),
};

// Load form state from local storage on page load
const savedState = JSON.parse(localStorage.getItem('feedback-form-state'));
if (savedState) {
  refs.email.value = savedState.email;
  refs.textarea.value = savedState.message;
}

// Handle form submit
refs.form.addEventListener('submit', onFormSubmit);

// Handle textarea input with throttling
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

function onFormSubmit(event) {
  event.preventDefault();

  const formData = {
    email: refs.email.value,
    message: refs.textarea.value,
  };

  console.log(formData); // Display form data in the console

  // Clear form fields and local storage
  refs.form.reset();
  localStorage.removeItem('feedback-form-state');
}

function onTextareaInput() {
  // Save form state to local storage
  const currentState = {
    email: refs.email.value,
    message: refs.textarea.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(currentState));
}