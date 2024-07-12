
const form = document.getElementById('registrationForm');
const nameDisplay = document.getElementById('displayName');
const emailDisplay = document.getElementById('displayEmail');
const registrationDataDiv = document.getElementById('registrationData');
const editButton = document.getElementById('editButton');
const deleteButton = document.getElementById('deleteButton');


loadRegistrationData();


form.addEventListener('submit', (event) => {
  event.preventDefault();
  saveRegistrationData();
  form.reset();
});


editButton.addEventListener('click', () => {
  updateRegistrationData();
});


deleteButton.addEventListener('click', () => {
  deleteRegistrationData();
});


function saveRegistrationData() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const registrationData = { name, email, password };
  localStorage.setItem('registrationData', JSON.stringify(registrationData));

  loadRegistrationData();
}


function loadRegistrationData() {
  const registrationData = JSON.parse(localStorage.getItem('registrationData'));

  if (registrationData) {
    nameDisplay.textContent = registrationData.name;
    emailDisplay.textContent = registrationData.email;
    registrationDataDiv.classList.remove('hidden');
  } else {
    nameDisplay.textContent = '';
    emailDisplay.textContent = '';
    registrationDataDiv.classList.add('hidden');
  }
}


function updateRegistrationData() {
  const registrationData = JSON.parse(localStorage.getItem('registrationData'));

  if (registrationData) {
    const newName = prompt('Enter new name:', registrationData.name);
    const newEmail = prompt('Enter new email:', registrationData.email);

    registrationData.name = newName;
    registrationData.email = newEmail;

    localStorage.setItem('registrationData', JSON.stringify(registrationData));
    loadRegistrationData();
  }
}


function deleteRegistrationData() {
  localStorage.removeItem('registrationData');
  loadRegistrationData();
}