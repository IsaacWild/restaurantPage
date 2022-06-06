import page1 from './menu/page1.png'
import page2 from './menu/page2.png'
import page3 from './menu/page3.png'
import page4 from './menu/page4.png'
import page5 from './menu/page5.png'

function menuPage() {


    //make menu page layout
    const removableSections = document.querySelector('.removableSections')
    const contentTitle = document.createElement('h1')
    const menuWrapper = document.createElement('div')
    const menuPage1 = document.createElement('img')
    const menuPage2 = document.createElement('img')
    const menuPage3 = document.createElement('img')
    const menuPage4 = document.createElement('img')
    const menuPage5 = document.createElement('img')
    //classes
    menuWrapper.classList.add('menuWrapper')
    menuPage1.classList.add('menuPage')
    menuPage2.classList.add('menuPage')
    menuPage3.classList.add('menuPage')
    menuPage4.classList.add('menuPage')
    menuPage5.classList.add('menuPage')

    //add content
    contentTitle.textContent = 'Our Menu'
    menuPage1.setAttribute('src' , page1)
    menuPage2.setAttribute('src' , page2)
    menuPage3.setAttribute('src' , page3)
    menuPage4.setAttribute('src' , page4)
    menuPage5.setAttribute('src' , page5)

    //append
    removableSections.append(contentTitle, menuWrapper)
    menuWrapper.append(menuPage1, menuPage2, menuPage3, menuPage4, menuPage5)
    


}


export default menuPage