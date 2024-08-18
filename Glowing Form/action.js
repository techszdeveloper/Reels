const LogInBtnLink = document.querySelector('.LogInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const wrapper = document.querySelector('.wrapper');
signUpBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
    });
LogInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});