window.onload = function() {
    const balls = document.querySelectorAll('.ball');
    
    balls.forEach((ball) => {
      const randomLeft = Math.random() * 100;
      const randomDelay = Math.random() * 5; 
      const randomDuration = Math.random() * 5 + 5;
      
      ball.style.animationDelay = `${randomDelay}s`;
      ball.style.animationDuration = `${randomDuration}s`;
      ball.style.left = `${randomLeft}vw`;
      ball.style.top = `-60%`;
    });
  };



  document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('signup');
    const registerBtn = document.getElementById('signin');
    const loginForm = document.querySelector('.form-box.login');
    const registerForm = document.querySelector('.form-box.register');
    const loginFormElement = loginForm.querySelector('form');
    const registerFormElement = registerForm.querySelector('form');

    loginBtn.addEventListener('click', (e) => {
        e.preventDefault(); 
        loginForm.classList.remove('active');
        loginFormElement.reset();
        setTimeout(() => {
            registerForm.classList.add('active');
        }, 300); 
    });

    registerBtn.addEventListener('click', (e) => {
        e.preventDefault(); 
        registerForm.classList.remove('active');
        registerFormElement.reset();
        setTimeout(() => {
            loginForm.classList.add('active');
        }, 300); 
    });
});




document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('.form-box.login form');
  const registerForm = document.querySelector('.form-box.register form');

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const usernamePattern = /^[a-zA-Z0-9]+$/;
  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

  const loginErrorMessage = document.querySelector('.form-box.login .error-message');
  const registerErrorMessage = document.querySelector('.form-box.register .error-message');

  loginForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const username = document.getElementById('usernamelog').value;
      const password = document.getElementById('passwordlog').value;

      if (!username.match(usernamePattern)) {
          showError(loginErrorMessage, "Invalid username. Only letters and numbers are allowed.");
      } else if (!password.match(passwordPattern)) {
          showError(loginErrorMessage, "Password must be at least 6 characters and include both letters and numbers.");
      } else {
        loginErrorMessage.style.display = 'none';
        window.location.href = `Survey.html?username=${encodeURIComponent(username)}`;
      }
  });

  registerForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const username = document.getElementById('usernamereg').value;
      const email = document.getElementById('emailreg').value;
      const password = document.getElementById('passwordreg').value;

      if (!username.match(usernamePattern)){
        showError(registerErrorMessage, "Username must contain only letters and numbers.");
      } else if (!password.match(passwordPattern)) {
        showError(registerErrorMessage, "Password must be at least 6 characters and include both letters and numbers.");
      } else if (!email.match(emailPattern)) {
        showError(registerErrorMessage, "Please enter a valid email address.");
      } else {
          registerErrorMessage.style.display = 'none';
      }
  });

  function showError(element, message) {
      element.style.display = 'block';
      element.textContent = message;
      element.classList.add('error-animation');
      
      setTimeout(() => {
          element.classList.remove('error-animation');
      }, 1000);
      setTimeout(() => {
          element.style.display = 'none';
      }, 3000);
    
  }
});

