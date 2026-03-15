let btn = document.querySelectorAll('.project-card button');
let btnclose = document.querySelectorAll('.card-content button');
let topics = document.querySelectorAll('.list-elements');
let wrappers = document.querySelectorAll('.img-wrapper');
const themeToggle = document.getElementById('theme-toggle');


btn.forEach((button) => {
    button.addEventListener('click', () => {
        if(button.nextElementSibling.classList.contains('hidden')) {
            
            button.nextElementSibling.classList.remove('hidden');
            button.classList.add('hidden');
            
        } else {
            button.nextElementSibling.classList.add('hidden');
            button.classList.remove('hidden');
            
          
        }
        
    });
});


btnclose.forEach((button) => {
    button.addEventListener('click', () => {
        if(button.parentElement.classList.contains('hidden')) {
            button.parentElement.classList.remove('hidden');
            button.parentElement.previousElementSibling.classList.add('hidden');
        } else {
            button.parentElement.classList.add('hidden');
            button.parentElement.previousElementSibling.classList.remove('hidden');
        }
    });
});



topics.forEach((topic) => {
    let text = topic.textContent;
    switch(text) {
        case 'Typescript':
            let img = document.createElement('img');
            img.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg';
            img.width = 30;
            topic.insertAdjacentElement('afterbegin', img);
            img.style.marginRight = '20px';
            img.style.verticalAlign = 'middle';
            break;
        case 'Next.js':
            let img2 = document.createElement('img');
            img2.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg';
            img2.width = 30;
            topic.insertAdjacentElement('afterbegin', img2);
            img2.style.marginRight = '20px';
            img2.style.verticalAlign = 'middle';
            break;
        case 'Consumo de API REST':
            let img3 = document.createElement('img');
            img3.src = 'https://cdn.simpleicons.org/postman/FF6C37';
            img3.width = 30;
            topic.insertAdjacentElement('afterbegin', img3);
            img3.style.marginRight = '20px';
            img3.style.verticalAlign = 'middle';
            break;
        case 'Supabase':
            let img4 = document.createElement('img');
            img4.src = 'https://cdn.simpleicons.org/supabase/3ECF8E';
            img4.width = 30;
            topic.insertAdjacentElement('afterbegin', img4);
            img4.style.marginRight = '20px';
            img4.style.verticalAlign = 'middle';
            break;
        case 'Express':
            let img5 = document.createElement('img');
            img5.src = 'https://cdn.simpleicons.org/express/ffffff';
            img5.width = 30;
            topic.insertAdjacentElement('afterbegin', img5);
            img5.style.marginRight = '20px';
            img5.style.verticalAlign = 'middle';
            break;
        case 'SQLite':
            let img6 = document.createElement('img');
            img6.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg';
            img6.width = 30;
            topic.insertAdjacentElement('afterbegin', img6);
            img6.style.marginRight = '20px';
            img6.style.verticalAlign = 'middle';
            break;
        case 'React':
            let img7 = document.createElement('img');
            img7.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg';
            img7.width = 30;
            topic.insertAdjacentElement('afterbegin', img7);
            img7.style.marginRight = '20px';
            img7.style.verticalAlign = 'middle';
            break;
        case 'JavaScript':
            let img8 = document.createElement('img');
            img8.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg';
            img8.width = 30;
            topic.insertAdjacentElement('afterbegin', img8);
            img8.style.marginRight = '20px';
            img8.style.verticalAlign = 'middle';
            break;
        case 'Postman':
            let img9 = document.createElement('img');
            img9.src = '';
            img9.width = 30;
            topic.insertAdjacentElement('afterbegin', img9);
            img9.style.marginRight = '20px';
            img9.style.verticalAlign = 'middle';
            break;
    }


});