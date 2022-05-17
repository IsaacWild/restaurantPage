function menuPage() {
    //make menu page
    const contentTitle = document.createElement('h1')
    const crispyTitle = document.createElement('h2')
    const crispyTitleWrapper = document.createElement('div')
    const crispyNoodleWrapper = document.createElement('div')
    const chowMeinTitle = document.createElement('h2')
    const chowMeinTitleWrapper = document.createElement('div')
    const chowMeinWrapper = document.createElement('div')

    //add classes
    crispyTitle.classList.add('subMenuTitle')
    crispyNoodleWrapper.classList.add('subMenuWrapper')
    chowMeinTitle.classList.add('subMenuTitle')
    chowMeinWrapper.classList.add('subMenuWrapper')
    //add content
    contentTitle.textContent = 'Our Menu'
    crispyTitle.textContent = "Cripsy Noodle's"
    chowMeinTitle.textContent = 'Chow Mein'
    //append
    removableSections.append(contentTitle, crispyTitleWrapper, crispyNoodleWrapper, chowMeinTitleWrapper, chowMeinWrapper)
    crispyTitleWrapper.appendChild(crispyTitle)
    chowMeinTitleWrapper.appendChild(chowMeinTitle)

    //function to fill sections
    //menu as an array item,price
    function crispyMenu() {
        let fullMenu = ['House Special,8.80', 'King Prawns with mixed Veg,8.60', 'Chicken with Mixed Veg,7.90', 'Chicken with Green Pepper & Black Bean,7.90', 'Beef with Mixed Veg,7.90', 'Beef with Green Pepper & Black Bean,7.90', 'Pork with Mixed Veg,7.90']
        //go through and split to get each individual item and price
        for (var i = 0; i < (fullMenu.length); i++) {
            const menuItem = fullMenu[i].split(",")
            const currentItem = menuItem[0]
            const currentPrice = menuItem[1]
            // add each item and price into the DOM and append 
            const item = document.createElement('p')
            item.textContent = currentItem
            const price = document.createElement('p')
            price.textContent = `£${currentPrice}`
            crispyNoodleWrapper.append(item, price)
        }
    }
    crispyMenu();

    function chowMeinMenu() {
        let fullMenu = ['House Special,6.50', 'King Prawn,7.00', 'Chicken,6.30', 'Beef,6.30', 'Shrimp,6.30', 'Roast,6.30', 'Mixed Veg,6.30']
        //go through and split to get each individual item and price
        for (var i = 0; i < (fullMenu.length); i++) {
            const menuItem = fullMenu[i].split(",")
            const currentItem = menuItem[0]
            const currentPrice = menuItem[1]
            // add each item and price into the DOM and append 
            const item = document.createElement('p')
            item.textContent = currentItem
            const price = document.createElement('p')
            price.textContent = `£${currentPrice}`
            chowMeinWrapper.append(item, price)
        }
    }
    chowMeinMenu();
}

export default menuPage