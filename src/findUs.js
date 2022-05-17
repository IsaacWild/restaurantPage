function findUsPage() {
    //grab Parentwrapper
    const removableSections = document.querySelector('.removableSections')

    //make find us page layout
    const findUsTitle = document.createElement('h1')
    const address = document.createElement('h2')
    const mapWrapper = document.createElement('div')

    //add classes
    findUsTitle.classList.add('subMenuTitle')
    address.classList.add('subMenuTitle')
    mapWrapper.classList.add('mapWrapper')

    //add content
    findUsTitle.textContent = 'Where are we??'
    address.textContent = 'Conservatory Village, Great N Rd, Little Paxton, Saint Neots PE19 6EN'
    mapWrapper.textContent = 'Add screen shot of map or get plugin for google maps working??'

    //append
    removableSections.append(findUsTitle, address, mapWrapper)
}

export default findUsPage