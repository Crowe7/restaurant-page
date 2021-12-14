function makeContact() {
    let contentWrapperer = document.querySelector('.content-wrapper-wrapper');
    contentWrapperer.innerHTML = "";

    let contentWrapper = document.createElement('div');
    contentWrapper.classList.add('content-wrapper');
    contentWrapperer.appendChild(contentWrapper);

    let sectionHeader = document.createElement('h2');
    sectionHeader.innerText = "Don't contact pls";
    contentWrapper.appendChild(sectionHeader);
}

export default makeContact;