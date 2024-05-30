document.addEventListener('DOMContentLoaded', function () {
  const fullname = document.getElementById('fullname');
  const validateFullname = () => {
    if (fullname.value.trim().length <= 7) {
      alert('Please, type your first and last name');
      return false;
    }
    return true;
  };
  fullname.addEventListener('blur', validateFullname);

  const age = document.getElementById('age');
  const validateAge = () => {
    if (age.value < 18) {
      alert('Only 18 plus people are allowed to register here');
      return false;
    }
    return true;
  };
  age.addEventListener('change', validateAge);

  const email = document.getElementById('email');
  const validateEmail = () => {
    if (!email.value.includes('@')) {
      alert('Please use a valid email');
      return false;
    }
    return true;
  };
  email.addEventListener('blur', validateEmail);

  const password = document.getElementById('password');
  const validatePassword = () => {
    const pattern = /[@%&]/;
    if (password.value.length < 5 || !pattern.test(password.value)) {
      alert(
        'Password must be at least 5 charts and contain at least one special character (@, %, or &)'
      );
      return false;
    }
    return true;
  };
  password.addEventListener('change', validatePassword);

  form.addEventListener('submit', function (event) {
    if (
      !validateFullname() ||
      !validateAge() ||
      !validateEmail() ||
      !validatePassword()
    ) {
      event.preventDefault();
    }
  });
});
