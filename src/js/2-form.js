const form = document.querySelector('.feedback-form');
const LOCAL_STORAGE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

// Відновлення даних при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (savedData) {
    formData = JSON.parse(savedData);
    form.elements.email.value = formData.email || '';
    form.elements.message.value = formData.message || '';
  }
});

// Збереження даних у локальне сховище
form.addEventListener('input', (event) => {
  const { name, value } = event.target;
  formData[name] = value.trim();
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
});

// Сабміт форми
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const { email, message } = formData;
  if (!email || !message) {
    alert('Fill please all fields');
    return;
  }

  console.log('Submitted data:', formData);

  localStorage.removeItem(LOCAL_STORAGE_KEY);
  formData = { email: '', message: '' };
  form.reset();
});
