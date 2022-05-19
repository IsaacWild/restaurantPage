function findUsPage() {
    //grab Parentwrapper
    const removableSections = document.querySelector('.removableSections')

    //make find us page layout
    const findUsTitle = document.createElement('h1')
    const address = document.createElement('h2')
    const mapWrapper = document.createElement('div')
    const map = document.createElement('iframe')

    //add classes
    findUsTitle.classList.add('subMenuTitle')
    address.classList.add('subMenuTitle')
    mapWrapper.classList.add('mapWrapper')
    map.setAttribute('src',"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2442.5181339988885!2d-0.2677444484278234!3d52.25213556369856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877c4407fc9ec0f%3A0xd2b4d68d7f397f1d!2sLong%20Yuen%20Court%20Chinese%20Restaurant%20%26%20Take%20Away.!5e0!3m2!1sen!2suk!4v1652982094674!5m2!1sen!2suk")
    // map.style.width = "800"
    // map.style.height = "600" 
    // map.style.border = "0"
    map.style.allowfullscreen = ''
    map.style.loading = "lazy"
    map.referrerPolicy = "no-referrer-when-downgrade"
    map.classList.add('map')

    //add content
    findUsTitle.textContent = 'Where are we??'
    address.textContent = 'Conservatory Village, Great N Rd, Little Paxton, Saint Neots PE19 6EN'

    //append
    removableSections.append(findUsTitle, address, mapWrapper)
    mapWrapper.appendChild(map)
}

export default findUsPage