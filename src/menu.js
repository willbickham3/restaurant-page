import paragraph from "./paragraphHolder";
import createTabsWithImage from "./tabCreater";
import { imageCreater, containerDiv } from "./imageCreater";
import subSectionCreater from "./subsection";
import orcCook from './images/Zug-Zug.jpg'

// paragraph(string) <-- requires string argument but appends paragraph element
// createTabsWithImage(element, text, classList, ImageSrc) <-- element to be created with inner text, class name and image appended to it
// subSectionCreater(element, className, subSect)
// containerDiv(element, className)
// imageCreater(classList, imgSource)

const menu1Description = `<span>Description:</span> A strong and energizing brew crafted by the resourceful Goblins. This potent concoction blends aromatic coffee beans with hints of caramel and vanilla, creating a flavorful pick-me-up for weary travelers.`

const menu2Description = `<span>Description:</span> A whimsical and delightful dessert straight from the inventive minds of Gnomish engineers. This sweet creation features layers of sponge cake, creamy vanilla custard, and colorful raspberry jam, topped with a dollop of whipped cream and garnished with a tiny edible gear.`


class newMenuItem{
    constructor(foodName, foodPic, description) {
        this.foodName = foodName;
        this.foodPic = foodPic;
        this.description = description;
    }
    menu() {
        const foodContainer = containerDiv('div', 'food-container');
        const foodLabel = subSectionCreater('h2', 'food-name', this.foodName);
        const foodimage = imageCreater('image', this.foodPic);
        const foodDescription = paragraph(this.description);
        foodContainer.append(foodLabel, foodimage, foodDescription);
        return foodContainer
    }

}

const menu1 = new newMenuItem('Goblin Rocket Fuel', orcCook, menu1Description);
const menu2 = new newMenuItem('Gnomish Delight Dessert', orcCook, menu2Description)
const menu3 = new newMenuItem('peepoo', orcCook, 'I poop my pants')

function createMenu() {
    const menuContainer = containerDiv('div', 'menu');
    document.querySelector('#content').appendChild(menuContainer);
    menuContainer.append(menu1.menu(), menu2.menu())
}

export default createMenu