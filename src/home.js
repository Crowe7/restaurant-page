/* <body class="background">
    <header class="header">
        <h1>Generic Breakfast and Bad Coffee</h1>
        <div class="button-wrapper">
            <button id="homeTab" class="menu" type="button">Home</button>
            <button id="menuTab" class="menu" type="button">Menu</button>
            <button id="aboutTab" class="menu" type="button">About</button>
        </div>
    </header>
    <div class="content-wrapper-wrapper">
    <div class="content-wrapper">
        <h2>This diner is really rundown and is used almost exclusivly for money laundering!</h2>
        <p>Don't order here today!</p>
    </div>
    </div> */

function makeHome() {
    let contentWrapperer = document.querySelector('.content-wrapper-wrapper');
    contentWrapperer.innerHTML = "";

    let contentWrapper = document.createElement('div');
    contentWrapper.classList.add('content-wrapper');
    contentWrapperer.appendChild(contentWrapper);

    let sectionHeader = document.createElement('h2');
    sectionHeader.innerText = 'This diner is really rundown and is used almost exclusivly for money laundering!';
    contentWrapper.appendChild(sectionHeader);

    let sectionPara = document.createElement('p');
    sectionPara.innerText = "Don't order here today!";
    contentWrapper.appendChild(sectionPara);
}

export default makeHome;