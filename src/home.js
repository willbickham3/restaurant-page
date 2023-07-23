import orcCook from './images/Zug-Zug.jpg'
import robbyflay from './images/robby-flay.jpg'
import paragraph from './paragraphHolder';
import { imageCreater, containerDiv } from './imageCreater';
import subSectionCreater from './subsection';

const string1 = `In the lively port town of Booty Bay, Chef Zug, a burly orc with a passion for transforming wild game into soulful dishes, met Chef Robby Flay, a human with an innate flair for innovative culinary creations. Despite their diverse backgrounds, they bonded over their shared love for cooking. Zug, raised in the harsh wilderness of Durotar, developed a reputation among his tribe for his hearty and rustic dishes, while Robby honed his skills in Stormwind, blending flavors with finesse.`;
const string2 = `Tasting each other's creations, they realized the potential of their combined talents. Together, they opened a dynamic restaurant that celebrated the best of both their culinary worlds. Chef Zug's signature "Zug's Wild Stew," featuring tender game meat and aromatic herbs, harmoniously complemented Chef Robby Flay's "Flay's Fusion Medley," a delightful blend of Eastern Kingdoms' flavors with an innovative touch.`;
const string3 = `Their restaurant in Booty Bay became a melting pot of tastes, drawing patrons from all corners of Azeroth. As word spread of their unique alliance and culinary harmony, Zug and Flay earned fame as ambassadors of culinary unity, bringing together the Horde and the Alliance through the language of food.`;

const subheading = 'Meet the Cooks!'

function homePage() {
    const greetingDiv = subSectionCreater('div', 'sub-header', subheading);
    const imageContainer = containerDiv('div', 'image-container');
    const orcImage = imageCreater('image', orcCook);
    const humanImage = imageCreater('image', robbyflay);
    const introduction = subSectionCreater('div', 'sub-section', null)

    document.querySelector('#content').appendChild(greetingDiv);
    imageContainer.append(humanImage, orcImage);
    greetingDiv.append(imageContainer, introduction);
    introduction.append(paragraph(string1), paragraph(string2), paragraph(string3));
}

export default homePage