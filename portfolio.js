//!
//?
//TODO
//*

//TODO Active Links

//* Nav Bar Links

let navbarsame = document.querySelectorAll('.nav-bar-same');
let navbarhome = document.querySelector('.nav-bar-home');
for (let i = 0; i < navbarsame.length; i++) {
    navbarsame[i].addEventListener('mouseenter',()=>{
        navbarsame[i].classList.add('nav-bar-same-active');
        navbarsame[i].classList.remove('nav-bar-same-passive');
    })
    navbarsame[i].addEventListener('mouseleave',()=>{
        navbarsame[i].classList.remove('nav-bar-same-active');
        navbarsame[i].classList.remove('nav-bar-home');
        navbarsame[i].classList.add('nav-bar-same-passive');
        if(navbarsame[i]==navbarhome){
            navbarsame[i].classList.add('nav-bar-home');
            navbarsame[i].classList.remove('nav-bar-same-passive');
        }
    })
}

//* Alt Bar Links

let altbarsame = document.querySelectorAll('.alt-bar-same')
for (let i = 0; i < altbarsame.length; i++) {
    altbarsame[i].addEventListener('mouseenter',()=>{
        altbarsame[i].classList.add('alt-bar-same-active');
        altbarsame[i].classList.remove('alt-bar-same-passive');
    })
    altbarsame[i].addEventListener('mouseleave',()=>{
        altbarsame[i].classList.remove('alt-bar-same-active');
        altbarsame[i].classList.add('alt-bar-same-passive');
    })
}

// navbutact.addEventListener('click', ()=>{
//     navbutact.classList.add('display-none');
//     navbutdeact.classList.remove('display-none');
//     altbar.classList.remove('display-none');
// })

// navbutdeact.addEventListener('click', ()=>{
//     navbutdeact.classList.add('display-none');
//     navbutact.classList.remove('display-none');
//     altbar.classList.add('display-none');
// })

let portnavlinkact = document.querySelector('.portfolio-nav-bar-link-active');
let portnavlinkpass = document.querySelector('.portfolio-nav-bar-link-passive');
let altbar = document.querySelector('.alt-bar-head');

portnavlinkact.addEventListener('click', ()=>{
    portnavlinkact.classList.add('display-none')
    portnavlinkpass.classList.remove('display-none')
    altbar.classList.remove('display-none');
})


portnavlinkpass.addEventListener('click', ()=>{
    portnavlinkpass.classList.add('display-none')
    portnavlinkact.classList.remove('display-none')
    altbar.classList.add('display-none');
})

//* Foot Links

let footleft = document.querySelector('.f-top-left-a')
footleft.addEventListener('mouseenter',()=>{
    footleft.classList.add('f-top-left-a-active');
    footleft.classList.remove('f-top-left-a-passive');
})
footleft.addEventListener('mouseleave',()=>{
    footleft.classList.remove('f-top-left-a-active');
    footleft.classList.add('f-top-left-a-passive');
})


let footright = document.querySelectorAll('.f-contact-services-links');
for (let i = 0; i < footright.length; i++) {
    footright[i].addEventListener('mouseenter',()=>{
        footright[i].classList.add('f-top-contact-services-active');
        footright[i].classList.remove('f-top-contact-services-passive');
    })
    footright[i].addEventListener('mouseleave',()=>{
        footright[i].classList.remove('f-top-contact-services-active');
        footright[i].classList.add('f-top-contact-services-passive');
    })
}

//TODO Viewable Photos

//* Change In Size

let photos = document.querySelectorAll('.photo');
for (let i = 0; i < photos.length; i++) {
    photos[i].addEventListener('mouseenter',()=>{
        photos[i].classList.add('photo-hover-active');
        photos[i].classList.remove('photo-hover-passive');
    })
    photos[i].addEventListener('mouseleave',()=>{
        photos[i].classList.remove('photo-hover-active');
        photos[i].classList.add('photo-hover-passive');
    })
}

