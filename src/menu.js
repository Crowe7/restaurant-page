
import Food0 from './assets/burger.jpeg';
import Food1 from './assets/pancake.jpeg';
import Food2 from './assets/squeggs.jpeg';
import Food3 from './assets/steak.jpeg';
import makeHome from './home';

function makeMenu() {
    // THIS CODE WET AF
    const burger = new Image();
    burger.classList.add('image');
    burger.src = Food0;

    const pancake = new Image();
    pancake.classList.add('image');
    pancake.src = Food1;

    const squeggs = new Image();
    squeggs.classList.add('image');
    squeggs.src = Food2;

    const steak = new Image();
    steak.classList.add('image');
    steak.src = Food3;

    let contentWrapperer = document.querySelector('.content-wrapper-wrapper');
    contentWrapperer.innerHTML = "";

    let contentWrapper = document.createElement('div');
    contentWrapper.classList.add('menu-wrapper');
    contentWrapperer.appendChild(contentWrapper);

    for(let i = 0; i<=3; i++) {
       let card = document.createElement('div');
       contentWrapper.appendChild(card);
       if(i === 0) {
            card.appendChild(burger);

            let cardTextWrapper = document.createElement('div');
            card.appendChild(cardTextWrapper);

            let textHeader = document.createElement('h4');
            textHeader.innerText = 'Good mmmBurger';
            cardTextWrapper.appendChild(textHeader);

            let price = document.createElement('p');
            price.innerText = '$13.99';
            cardTextWrapper.appendChild(price);

       }
       else if(i === 1) {
        card.appendChild(pancake);

        let cardTextWrapper = document.createElement('div');
        card.appendChild(cardTextWrapper);

        let textHeader = document.createElement('h4');
        textHeader.innerText = 'pancake.?';
        cardTextWrapper.appendChild(textHeader);

        let price = document.createElement('p');
        price.innerText = '$7.00';
        cardTextWrapper.appendChild(price);
       }
       else if( i === 2) {
        card.appendChild(squeggs);

        let cardTextWrapper = document.createElement('div');
        card.appendChild(cardTextWrapper);

        let textHeader = document.createElement('h4');
        textHeader.innerText = 'squeggs';
        cardTextWrapper.appendChild(textHeader);

        let price = document.createElement('p');
        price.innerText = '$1 per square';
        cardTextWrapper.appendChild(price);
       }
       else {
        card.appendChild(steak);

        let cardTextWrapper = document.createElement('div');
        card.appendChild(cardTextWrapper);

        let textHeader = document.createElement('h4');
        textHeader.innerText = 'mop water steak';
        cardTextWrapper.appendChild(textHeader);

        let price = document.createElement('p');
        price.innerText = 'go get it and its free';
        cardTextWrapper.appendChild(price)
       }
    }
}

export default makeMenu;

