import facebookIcon from './facebookIcon.svg'

function contactPage() {
    //grab Parentwrapper
    const removableSections = document.querySelector('.removableSections')

    //make find us page layout
    const contactTitle = document.createElement('h1')
    const number = document.createElement('h2')
    const numberMessage = document.createElement('h3')
    const hoursWrapper = document.createElement('div')
    const facebookWrapper = document.createElement('div')
    const facebook = new Image();

    //add classes
    contactTitle.classList.add('subMenuTitle')
    number.classList.add('subMenuTitle')
    numberMessage.classList.add('numberMessage')
    hoursWrapper.classList.add('hoursWrapper')
    facebookWrapper.classList.add('sectionWrapper')
    facebook.classList.add('facebook')

    //add content
    contactTitle.textContent = 'Give us a call!'
    number.textContent = '01480 473322'
    numberMessage.textContent = 'Call us to book a table or order a takeaway today!'
    facebook.src = facebookIcon;
    let hours = ['Closed Tuesday!','Mon - Sat: 6pm - 10.30pm', 'Sunday: 12pm - 9.30pm', 'Open Bank Holidays!']

    for (let i = 0; i < hours.length; i++) {
        const time = hours[i];
        const hour = document.createElement('p')
        hour.textContent = time
        hoursWrapper.appendChild(hour)
    }
    facebook.addEventListener('click', () => {
        window.open('https://www.facebook.com/Long-Yuen-Court-chinese-restaurant-154558591257823/?ref=page_internal');
    })

    //append
    removableSections.append(contactTitle, number, numberMessage, hoursWrapper, facebookWrapper)
    facebookWrapper.appendChild(facebook)
}

export default contactPage