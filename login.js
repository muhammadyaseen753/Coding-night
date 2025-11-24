
 document.addEventListener('DOMContentLoaded', function() {
            const loginFormContainer = document.getElementById('login-form-container');
            const signupFormContainer = document.getElementById('signup-form-container');
            const showSignupLink = document.getElementById('show-signup');
            const showLoginLink = document.getElementById('show-login');
            
            showSignupLink.addEventListener('click', function(e) {
                e.preventDefault();
                loginFormContainer.classList.add('form-hidden');
                signupFormContainer.classList.remove('form-hidden');
            });
            
            showLoginLink.addEventListener('click', function(e) {
                e.preventDefault();
                signupFormContainer.classList.add('form-hidden');
                loginFormContainer.classList.remove('form-hidden');
            });
            
            document.getElementById('login-form').addEventListener('submit', function(e) {
                e.preventDefault();
               
            });
            
            document.getElementById('signup-form').addEventListener('submit', function(e) {
                e.preventDefault();
            });
            
            document.getElementById('terms-link').addEventListener('click', function(e) {
                e.preventDefault();
          
            });
            
            document.getElementById('privacy-link').addEventListener('click', function(e) {
                e.preventDefault();
        
            });

        });
document.getElementById('signup-btn').addEventListener('click', function(e) {
    e.preventDefault();
    const name = document.getElementById('signup-name').value;
    localStorage.setItem("userAccount", name);
    window.location.href = "homefeed.html";
    if(document.getElementById('signup-confirm-password').value != document.getElementById('signup-password').value){
        alert('the comfirm password and password is not the same')
        window.location.href = "login.html";
    }
});
