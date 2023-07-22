function subSectionCreater(className, subSect) {
    const subSection = document.createElement('div');
    subSection.classList.add(className);
    subSection.innerHTML = subSect;
    return subSection
}

export default subSectionCreater