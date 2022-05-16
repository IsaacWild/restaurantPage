import './style.css'
import Icon from './dragonIcon.svg';

//this is where my site will be born!
//Div overlay layout
const pageWrapper = document.querySelector("#content");
const headerWrapper = document.createElement('div');
const titleWrapper = document.createElement('div');
const menuWrapper = document.createElement('div');
const findUsWrapper = document.createElement('div');
const contactWrapper = document.createElement('div');
const footerWrapper = document.createElement('div');


//add classes
pageWrapper.classList.add('pageWrapper')
headerWrapper.classList.add('headerWrapper');
titleWrapper.classList.add('headerWrapper');
menuWrapper.classList.add('sectionWrapper');
findUsWrapper.classList.add('sectionWrapper');
contactWrapper.classList.add('sectionWrapper');
footerWrapper.classList.add('footerWrapper');

//Append time!
pageWrapper.append(headerWrapper,titleWrapper,menuWrapper,findUsWrapper,contactWrapper,footerWrapper);

//headerWrapper Childern - logo
const myIcon = new Image();
myIcon.src = Icon;
myIcon.classList.add('icon');
const name = document.createElement('p');
name.classList.add('name');
name.textContent = 'Long Yuen Court';
headerWrapper.append(myIcon, name);




//make footer with (Icons by svgrepo.com) link to https://www.svgrepo.com/