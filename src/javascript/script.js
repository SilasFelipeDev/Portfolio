const navItems = document.querySelectorAll('ul li');
const mobileBtn = document.getElementById('mobile_btn');
const menuMobile = document.getElementById('mobile_menu');
const menuToggleIcon = document.getElementById('menu_toggle_icon');

navItems.forEach(item =>{
    item.addEventListener('click', function(){
        navItems.forEach(i =>i.classList.remove('active'));

        this.classList.add('active');
    })
});

mobileBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('active');

    if(menuToggleIcon.classList.contains('fa-bars')) {
        menuToggleIcon.classList.remove('fa-bars');
        menuToggleIcon.classList.add('fa-x');
    } else {
        menuToggleIcon.classList.remove('fa-x');
        menuToggleIcon.classList.add('fa-bars');
    }
});