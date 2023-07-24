function paragraph(element ,string) {
    const pContent = document.createElement(element);
    pContent.innerHTML = string;
    return pContent
}

export default paragraph