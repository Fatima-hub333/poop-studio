const nav = document.getElementById('navHeader');
const navToggle = document.querySelector('#navToggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click',()=>{
    openFixed();
});

window.addEventListener('resize',()=>{checkScreensize();});
window.addEventListener('load',()=>{checkScreensize();});


function openFixed(){
    nav.classList.toggle('shownav');
    if (nav.classList.contains('shownav')){
        links.classList.remove('links');
        links.classList.add('showLink');
    }
    else{
        links.classList.remove('showLink');
        links.classList.add('links');
    }
}


function checkScreensize(){
    if(window.innerWidth > 800){
        if (nav.classList.contains('shownav')){
            nav.classList.remove('shownav');
            links.classList.remove('showLink');
            links.classList.add('links');
        }
    }
}

const seeAll = document.querySelector('#see-all');
const img1_img2 = document.querySelectorAll('.img7 , .img8');

seeAll.addEventListener('click',()=>{
    img1_img2.forEach(img=>{
        img.style.display = "block";
    });
});
   
