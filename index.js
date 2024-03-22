facebook = document.querySelector('.facebook');
insta = document.querySelector('.insta');
twitter = document.querySelector('.twitter');
pinterest = document.querySelector('.pinterest');
wet = document.querySelector('.wet');
no = document.querySelector('.no');
no1 = document.querySelector('.no1');
no2 = document.querySelector('.no2');
no3 = document.querySelector('.no3');
nom = document.querySelector('.nom');
nom1 = document.querySelector('.nom1');
nom2 = document.querySelector('.nom2');
nom3 = document.querySelector('.nom3');
harm = document.querySelector('.harm');
uls = document.querySelector('.uls');

facebook.addEventListener('click',()=>{
    no.classList.add('wet');
    nom.classList.toggle('wet');
});

insta.addEventListener('click',()=>{
    no1.classList.add('wet');
    nom1.classList.toggle('wet');
});

twitter.addEventListener('click',()=>{
    no2.classList.add('wet');
    nom2.classList.toggle('wet');
});

pinterest.addEventListener('click',()=>{
    no3.classList.add('wet');
    nom3.classList.toggle('wet');
});

harm.addEventListener('click',()=>{
     uls.classList.toggle('none')
});