import paragraph from "./paragraphHolder";
import createTabsWithImage from "./tabCreater";
import { imageCreater, containerDiv } from "./imageCreater";
import subSectionCreater from "./subsection";
import gnomish from './images/gnomish-delight.jpg'
import grf from './images/goblinrocketfuel.jpg'
import fusionmedley from './images/fusion-medley.jpg';
import zugstew from './images/zug-stew.jpg'
import stormwindSteak from './images/stormwind-steak.jpg'
import murlocsushi from './images/murloc-sushi.jpg'
import pandarenbuns from './images/pandaren-bao.jpg'
import elfsalad from './images/elven-salad.jpg'

// paragraph(string) <-- requires string argument but appends paragraph element
// createTabsWithImage(element, text, classList, ImageSrc) <-- element to be created with inner text, class name and image appended to it
// subSectionCreater(element, className, subSect)
// containerDiv(element, className)
// imageCreater(classList, imgSource)

//fusion medley
const menu1Description = `<span>Description:</span> The renowned Chef Robby Flay showcases his culinary brilliance with this Fusion Medley, blending flavors from different regions of Azeroth. A delightful combination of tender grilled dragon meat, aromatic spices, grilled spiky vegetables, and a drizzle of tangy citrus glaze, creating an explosion of flavors in every bite.`;

//zug's wild stew
const menu2Description = `<span>Description:</span> A hearty stew prepared by the legendary Chef Zug, known for his expertise in combining the most exotic ingredients from Azeroth's forests and wilderness. This flavorful stew is filled with tender pieces of wild game, foraged mushrooms, root vegetables, and a blend of secret herbs`;

// Stormwind Steak
const menu3Description = `<span>Description:</span> An homage to the capital city of the Alliance, this platter features perfectly grilled Stormwind Steaks, seasoned with a blend of herbs and spices. Served with roasted potatoes and a side of sautéed green beans, this dish is a comforting favorite among adventurers.`;

// Murloc Sushi
const menu4Description = `<span>Description:</span> A daring creation inspired by the fish-like Murlocs, this sushi roll features fresh raw fish, seaweed, and a zesty wasabi aioli. Served with pickled ginger and soy dipping sauce, it's an adventurous delicacy for sushi enthusiasts.`;

//Pandaren Bao Buns
const menu5Description = `<span>Description:</span> Taking inspiration from the Pandaren culture, these steamed bao buns are filled with succulent shredded pork, marinated in a special soy glaze. Topped with pickled vegetables and fresh cilantro, these buns offer a burst of flavors and textures.`;

// Darnassian Salad
const menu6Description = `<span>Description:</span> A light and refreshing salad reminiscent of the Night Elves' connection to nature. This dish combines fresh greens, mixed berries, toasted nuts, and crumbled feta cheese, drizzled with a tangy berry vinaigrette.`;

//Gnomish Delight
const menu7Description = `<span>Description:</span> A whimsical and delightful dessert straight from the inventive minds of Gnomish engineers. This sweet creation features layers of sponge cake, creamy vanilla custard, and colorful raspberry jam, topped with a dollop of whipped cream and garnished with a tiny edible gear.`

// Goblin Rocket Fuel
const menu8Description = `<span>Description:</span> A strong and energizing brew crafted by the resourceful Goblins. This potent concoction blends aromatic coffee beans with hints of caramel and vanilla, creating a flavorful pick-me-up for weary travelers.`



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

const menu1 = new newMenuItem(`Robby's Fusion Medley`, fusionmedley, menu1Description);
const menu2 = new newMenuItem(`Zug's World Famous Wild Stew`, zugstew, menu2Description);
const menu3 = new newMenuItem(`Stormwind Steak`, stormwindSteak, menu3Description);
const menu4 = new newMenuItem(`Murloc Sushi Roll`, murlocsushi, menu4Description);
const menu5 = new newMenuItem(`Pandaren Bao Buns`, pandarenbuns, menu5Description);
const menu6 = new newMenuItem(`Darnassian Salad`, elfsalad, menu6Description);
const menu7 = new newMenuItem(`Gnomish Delight`, gnomish, menu7Description);

function createMenu() {
    const menuContainer = containerDiv('div', 'menu');
    document.querySelector('#content').appendChild(menuContainer);
    menuContainer.append(menu1.menu(), menu2.menu(), menu3.menu(), menu4.menu(), menu5.menu(), menu6.menu(), menu7.menu())
}

export default createMenu