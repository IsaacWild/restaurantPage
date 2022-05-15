import './style.css'
import Icon from './dragonIcon.svg';

//this is where my site will be born!
const pageContent = document.querySelector("#content");
const pageWrapper = document.createElement('div');
pageWrapper.classList.add('pageWrapper');
pageContent.appendChild(pageWrapper);

const header = document.createElement('div');
header.classList.add('header');
pageWrapper.appendChild(header);

const myIcon = new Image();
myIcon.src = Icon;
const logo = document.createElement('div');
const title = document.createElement('div');
const facebook = document.createElement('div');
myIcon.classList.add('icon')
logo.classList.add('logo');
title.classList.add('title');
facebook.classList.add('facebook')

header.append(logo, facebook, title);
logo.appendChild(myIcon);

title.textContent = 'Welcome to Long Yuen Court';


//make footer with (Icons by svgrepo.com) link to https://www.svgrepo.com/