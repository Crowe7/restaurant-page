import './style.css';
import makeHome from './home';
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

    function makeHeader() {
        document.body.classList.add('background');
    
    
        let header = document.createElement('header');
        header.classList.add('header');
        document.body.appendChild(header);
    
        let headerH1 = document.createElement('h1');
        headerH1.innerText = 'Generic Breakfast and Bad Coffee';
        header.appendChild(headerH1);
    
        let buttonWrapper = document.createElement('div');
        buttonWrapper.classList.add('button-wrapper');
        header.appendChild(buttonWrapper);
    
        menuButtons(buttonWrapper);
        // MOVE THIS TO AN INIT PAGE FUNCTION
        setCurrTab(buttonWrapper, document.getElementById('0'));

    }
    makeHeader();
    // makeHome();
    function menuButtons(buttonWrapper) {
        for(let i = 0; i <= 2; i++) {
            let button = document.createElement('button');
            button.classList.add('menu');
            button.setAttribute('id', i);
            //add an if checking the id then assign one of the tab functions based on the number of the clicked tab
            button.addEventListener('click', () => {
                setCurrTab(buttonWrapper, button);
            });
            buttonWrapper.appendChild(button);
        }
        let home = document.getElementById('0');
        home.innerText = "Home";

        let menu = document.getElementById('1');
        menu.innerText = 'Menu';

        let about = document.getElementById('2');
        about.innerText = 'About';

    }

    function setCurrTab(buttonWrapper, tab) {
        let buttons = buttonWrapper.children;
        for(let i = 0; i < buttons.length; i++) {
            if(tab === buttons[i]) {
                buttons[i].classList.add('current-tab');
            }
            else {
                if(buttons[i].classList.contains('current-tab')) {
                    buttons[i].classList.remove('current-tab');
                }
            }
        }
    }

//TODO make clear page logic when button is clicked then load correct page