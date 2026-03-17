let btnOpen = document.querySelectorAll('.project-card > button');
let btnClose = document.querySelectorAll('.card-content button');
let topics = document.querySelectorAll('.list-elements');
let wrappers = document.querySelectorAll('.img-wrapper');
let links = document.querySelectorAll('.link-container p');
let projectCards = document.querySelectorAll('.project-card');


btnOpen.forEach((button) => {
    button.addEventListener('click', () => {
        let content = button.nextElementSibling;
        content.classList.remove('hidden');
        button.classList.add('hidden');

    });
});



btnClose.forEach((button) => {
    button.addEventListener('click', () => {
        let content = button.parentElement;
        const openBtn = content.previousElementSibling;
        content.classList.add('hidden');
        openBtn.classList.remove('hidden');
    });
});



topics.forEach((topic) => {
    let text = topic.textContent;
    switch (text) {
        case 'Java Swing':
            let imgSwing = document.createElement('img');
            imgSwing.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg';
            imgSwing.width = 30;
            topic.insertAdjacentElement('afterbegin', imgSwing);
            imgSwing.style.marginRight = '20px';
            imgSwing.style.verticalAlign = 'middle';
            break;
        case 'Java':
            let imgJava = document.createElement('img');
            imgJava.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg';
            imgJava.width = 30;
            topic.insertAdjacentElement('afterbegin', imgJava);
            imgJava.style.marginRight = '20px';
            imgJava.style.verticalAlign = 'middle';
            break;
            case 'SQLWorkbench':
            let imgSQL = document.createElement('img');
            imgSQL.src = 'https://cdn.simpleicons.org/mysql/4479A1';
            imgSQL.width = 30;
            topic.insertAdjacentElement('afterbegin', imgSQL);
            imgSQL.style.marginRight = '20px';
            imgSQL.style.verticalAlign = 'middle';
            break;
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
        case 'React.js':
            let img7 = document.createElement('img');
            img7.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg';
            img7.width = 30;
            topic.insertAdjacentElement('afterbegin', img7);
            img7.style.marginRight = '20px';
            img7.style.verticalAlign = 'middle';
            break;
            case 'React Native':
            let imgrn = document.createElement('img');
            imgrn.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg';
            imgrn.width = 30;
            topic.insertAdjacentElement('afterbegin', imgrn);
            imgrn.style.marginRight = '20px';
            imgrn.style.verticalAlign = 'middle';
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
            img9.src = 'https://cdn.simpleicons.org/postman/FF6C37';
            img9.width = 30;
            topic.insertAdjacentElement('afterbegin', img9);
            img9.style.marginRight = '20px';
            img9.style.verticalAlign = 'middle';
            break;
    }


});

links.forEach((link) => {
    if (link.innerHTML.includes('GitHub')) {
        let imgGitHub = document.createElement('img');
        imgGitHub.src = 'https://cdn.simpleicons.org/github/FFFFFF';
        imgGitHub.width = 20;
        link.insertAdjacentElement('afterbegin', imgGitHub);
        imgGitHub.style.marginRight = '20px';
        imgGitHub.style.marginBottom = '5px';
        imgGitHub.style.verticalAlign = 'middle';
    }
    if (link.innerHTML.includes('Vercel')) {
        let imgVercel = document.createElement('img');
        imgVercel.src = 'https://cdn.simpleicons.org/vercel/FFFFFF';
        imgVercel.width = 20;
        link.insertAdjacentElement('afterbegin', imgVercel);
        imgVercel.style.marginRight = '20px';
        imgVercel.style.marginBottom = '5px';
        imgVercel.style.verticalAlign = 'middle';
    }
        if (link.innerHTML.includes('Render')) {
        let imgRender = document.createElement('img');
        imgRender.src = 'https://cdn.simpleicons.org/render/FFFFFF';
        imgRender.width = 20;
        link.insertAdjacentElement('afterbegin', imgRender);
        imgRender.style.marginRight = '20px';
        imgRender.style.marginBottom = '5px';
        imgRender.style.verticalAlign = 'middle';
    }
});