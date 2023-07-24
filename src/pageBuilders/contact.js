// paragraph(string) <-- requires string argument but appends paragraph element
// createTabsWithImage(element, text, classList, ImageSrc) <-- element to be created with inner text, class name and image appended to it
// subSectionCreater(element, className, subSect)
// containerDiv(element, className)
// imageCreater(classList, imgSource)

import { containerDiv } from "../createrFunctions/imageCreater";
import paragraph from "../createrFunctions/paragraphHolder";
import createTabsWithImage from "../createrFunctions/tabCreater";


function contactUs() {
    const contentContainer = document.querySelector('#content');

    const container = containerDiv('div', 'contact-page', null);

   const contactContainer = containerDiv('div', 'sub-section', null);
   const subHeader = containerDiv('div', 'sub-header', `Contact Us`);
   const welcome = containerDiv('div', 'sub-text', `Welcome to the Giggling Goblet - A Culinary Adventure in Azeroth!`);
   const moreWelcome = containerDiv('div', 'sub-text', `We'd love to hear from you! If you have any questions, suggestions, or inquiries, please feel free to get in touch with us. Our team is dedicated to providing you with the best dining experience in Azeroth. Whether you're a seasoned adventurer or a first-time visitor, we're here to make your time with us unforgettable.`);

   contactContainer.append(subHeader, welcome, moreWelcome)

   const locationContainer = containerDiv('div', 'sub-section', null);
   const locationHeader = containerDiv('div', 'sub-header', `Location:`);
   const locationAddress = containerDiv('div', 'sub-text', `Under the Flight Master`);
   const locationCity = containerDiv('div', 'sub-text', `Booty Bay, Stranglethorn Vale`);
   const locationWorld = containerDiv('div', 'sub-text', `Azeroth`);

   locationContainer.append(locationHeader, locationAddress, locationCity, locationWorld);

   const hoursContainer = containerDiv('div', 'sub-section', null);
   const hoursHeader = containerDiv('div', 'sub-header', `Tavern Hours:`);
   const hours = containerDiv('div', 'sub-text', `Monday to Sunday: Noon - 4AM`);

   hoursContainer.append(hoursHeader, hours);

   const aboutChefsContainer = containerDiv('div', 'sub-section', null);
   const aboutChefs = containerDiv('div', 'sub-header', `Chefs Zug and Robby Flay:`);
   const chefComment = containerDiv('div', 'sub-text', `Have a question for our legendary Chefs? Want to know more about the inspiration behind their creations? You can reach out to Chef Zug and Chef Robby Flay directly by sending an email to: Zug@Gryphonmail.com or Flay@Gryphonmail.com. They might even share some of their culinary secrets with you!`)

   aboutChefsContainer.append(aboutChefs, chefComment)

   contentContainer.appendChild(container);
   container.append(contactContainer, locationContainer, hoursContainer, aboutChefsContainer)

}

export default contactUs