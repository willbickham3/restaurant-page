function subSectionCreater(element, className, subSect) {
    const subSection = document.createElement(element);
    subSection.classList.add(className);
    subSection.innerHTML = subSect;
    return subSection
}

export default subSectionCreater