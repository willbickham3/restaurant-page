function paragraph(string) {
    const pContent = document.createElement('p');
    pContent.innerHTML = string;
    return pContent
}

export default paragraph