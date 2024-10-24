document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    const first_name = document.querySelector('.first_name').value.trim();
    const last_name = document.querySelector('.last_name').value.trim();
    const email = document.querySelector('.email').value.trim();
    const phone = document.querySelector('.number').value.trim();
    const password = document.querySelector('.password').value.trim();

    const formData = {
        first_name,
        last_name,
        email,
        phone,
        password
    };

    console.log(formData);

    document.querySelector('.first_name').value = '';
    document.querySelector('.last_name').value = '';
    document.querySelector('.email').value = '';
    document.querySelector('.number').value = '';
    document.querySelector('.password').value = '';

});

const menu_toggle = document.querySelector('.menu-toggle');
const smallNav = document.querySelector('.small-nav');
const cross = document.querySelector('.cross-button')

function openNav() {
   smallNav.style.right = '0%'
   smallNav.style.display='flex';
}

// Function to close the small navigation
function closeNav() {
  smallNav.style.right = '-100%';
  smallNav.style.display='none';
}

// Event listener for the menu toggle button
menu_toggle.addEventListener('click', openNav);

// Event listener for the cross button
cross.addEventListener('click', closeNav)


    