import './style.css'
import "./menu.css"
import Icon from './dragonIcon.svg';
import menuIcon from './menuIcon.svg'
import findIcon from './findIcon.svg'
import contactIcon from './contactIcon.svg'

import menuPage from './menu';

//this is where my site will be born!
//Div overlay layout
const pageWrapper = document.querySelector("#content");
const headerWrapper = document.createElement('div');
const titleWrapper = document.createElement('div');
const removableSections = document.createElement('div');
const menuWrapper = document.createElement('div');
const findUsWrapper = document.createElement('div');
const contactWrapper = document.createElement('div');
const footerWrapper = document.createElement('div');


//add classes
pageWrapper.classList.add('pageWrapper')
headerWrapper.classList.add('headerWrapper');
titleWrapper.classList.add('titleWrapper');
removableSections.classList.add('removableSections')
menuWrapper.classList.add('sectionWrapper');
findUsWrapper.classList.add('sectionWrapper');
contactWrapper.classList.add('sectionWrapper');
footerWrapper.classList.add('footerWrapper');

//Append time!
pageWrapper.append(headerWrapper, titleWrapper, menuWrapper, removableSections, footerWrapper);
removableSections.append(menuWrapper, findUsWrapper, contactWrapper)


//headerWrapper Childern - logo
const myIcon = new Image();
myIcon.src = Icon;
myIcon.classList.add('icon');
const name = document.createElement('p');
name.classList.add('name');
name.textContent = 'Long Yuen Court';
headerWrapper.append(myIcon, name);


//titleWrapper Children - Welcome message
const menuLink = document.createElement('p')
menuLink.textContent = 'Menu'
menuLink.addEventListener('click', () => {
    removeChildren()
    menuPage()
})
const findUsLink = document.createElement('p')
findUsLink.textContent = 'Find Us'
findUsLink.addEventListener('click', () => {
    removeChildren()
})
const contactLink = document.createElement('p')
contactLink.textContent = 'Contact Us'
contactLink.addEventListener('click', () => {
    removeChildren()
})

titleWrapper.append(menuLink, findUsLink, contactLink)

function removeChildren() {
    while (removableSections.firstChild) {
        removableSections.removeChild(removableSections.lastChild);
    }
}

//menuWrapper Children - Title, Pic, Message, Link
//create children
const menuTitle = document.createElement('h1')
const menuImage = new Image()
menuImage.src = menuIcon;
const menuMessage = document.createElement('p')
const menuSectionLink = document.createElement('p')
//Add style
menuImage.classList.add('pageIcon')
menuSectionLink.classList.add('pageLink')
//Add content
menuTitle.textContent = 'Our Menu'
menuMessage.textContent = 'Our menu offers a large range of dishes hand crafted by our chefs and celebrated by our customers!'
menuSectionLink.textContent = 'VIEW MENU'
menuSectionLink.addEventListener('click', () => {
    removeChildren()
    menuPage()
})
//Append Time
menuWrapper.append(menuTitle, menuImage, menuMessage, menuSectionLink)

//findUsWrapper Children - Title, Pic, Message, Link
const findTitle = document.createElement('h1')
const findImage = new Image();
findImage.src = findIcon;
const findMessage = document.createElement('p')
const findSectionLink = document.createElement('p')
//Add style
findImage.classList.add('pageIcon')
findSectionLink.classList.add('pageLink')
//Add content
findTitle.textContent = 'Find Us'
findMessage.textContent = "Located in the cozy village of Little Paxton you'll find a warm welcome from us here everytime!"
findSectionLink.textContent = 'SEE LOCATION'
findSectionLink.addEventListener('click', () => {
    removeChildren()
})
//Append Time
findUsWrapper.append(findTitle, findImage, findMessage, findSectionLink)


//contactUsWrapper Children - Title, Pic, Message, Link
const contactTitle = document.createElement('h1')
const contactImage = new Image()
contactImage.src = contactIcon;
const contactMessage = document.createElement('p')
const contactSectionLink = document.createElement('p')
//Add style
contactImage.classList.add('pageIcon')
contactSectionLink.classList.add('pageLink')
//Add content
contactTitle.textContent = 'Contact Us'
contactMessage.textContent = "Trying to chat with us? Give us a call to book a table or place a takeaway with us!"
contactSectionLink.textContent = 'OUR NUMBER'
contactSectionLink.addEventListener('click', () => {
    removeChildren()
    menuPage()
})
//Append Time
contactWrapper.append(contactTitle, contactImage, contactMessage, contactSectionLink)


// footerWrapper Children - footer
const footer = document.createElement('a')
footer.textContent = 'Icons by svgrepo.com'
footer.href = 'https://www.svgrepo.com/'
footerWrapper.appendChild(footer)