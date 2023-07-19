/* -----  cabeçalho     --------------------------------------------------------------------- */
import {
    users, posts, suggestUsers, likeButton
} from'./database.js';

const header = document.createElement("header");

const nameLogo = document.createElement("h3");
nameLogo.innerHTML = "TechPosters";
header.appendChild(nameLogo);

const navQuit = document.createElement("A");
const navQuitText = document.createTextNode("Sair");
navQuit.setAttribute("href", "https://www.google.com");
navQuit.appendChild(navQuitText);
header.appendChild(navQuit);

const body = document.getElementsByTagName("body")[0];
body.appendChild(header);

/* -----  main     --------------------------------------------------------------------- */

const main = document.createElement("main");
body.appendChild(main);

const col1 = document.createElement("div");
const col2 = document.createElement("div");
col1.classList.add("col1"); /* lado esquerdo */
col2.classList.add("col2"); /* lado direito */
main.appendChild(col1);
main.appendChild(col2);

const secondSubtitle = document.createElement("h4");
secondSubtitle.classList.add("secondSubtitle");
secondSubtitle.innerHTML = "Sugestões para Seguir";
secondSubtitle.classList.add("myComponent--Title2");
col2.appendChild(secondSubtitle);

/* -----  lado direito     --------------------------------------------------------------------- */

function renderSuggestUsers(userList) {
    for (let count = 0; count < userList.length; count++) {
        const profileSuggest = document.createElement("div");
        profileSuggest.classList.add("profile--Suggest");


        const imgProfile = document.createElement("img");
        imgProfile.classList.add("profile--img");

        imgProfile.src = userList[count].img;
        const divImg = document.createElement("div");
        divImg.classList.add("div--img");
        divImg.classList.add("grid-item");
        divImg.appendChild(imgProfile);

        const divInfoProfile = document.createElement("div");
        divInfoProfile.classList.add("info--profile");
        divInfoProfile.classList.add("grid-item");

        const nameProfile = document.createElement("h2");
        nameProfile.classList.add("profile--name");
        nameProfile.classList.add("myComponent--Title2");
        nameProfile.textContent = userList[count].user;

        const stackProfile = document.createElement("p");
        stackProfile.classList.add("stack--profile");
        stackProfile.classList.add("myComponent--Text2");
        stackProfile.textContent = userList[count].stack;

        divInfoProfile.appendChild(nameProfile);
        divInfoProfile.appendChild(stackProfile);


        const divFollowButton = document.createElement("div");
        divFollowButton.classList.add("boxFollowButton")
        divFollowButton.classList.add("grid-item");

        const followButton = document.createElement("button");
        followButton.classList.add("follow--button");
        followButton.classList.add("buttonStatus--active");

        followButton.textContent = "Seguindo";
        divFollowButton.appendChild(followButton);


        profileSuggest.appendChild(divImg);
        profileSuggest.appendChild(divInfoProfile);
        profileSuggest.appendChild(divFollowButton);

        col2.appendChild(profileSuggest);
            followButtonStatus()

    }
}

function followButtonStatus() {
    const col2 = document.querySelector('.col2');

    col2.addEventListener('click', function(event) {
    const button = event.target.closest('.follow--button');
    
    if (button) {
        if (button.classList.contains("buttonStatus--active")) {
        button.classList.remove("buttonStatus--active");
        button.classList.add("buttonStatus--inactive");
        
        button.textContent = "Seguir";
        } else {
        button.classList.remove("buttonStatus--inactive");
        button.classList.add("buttonStatus--active");
        button.textContent = "Seguindo";
        }
    }
    });
}

/* -----  lado esquerdo     --------------------------------------------------------------------- */


function renderUsers (profileList, posts, img) {
    
    for (let count = 0; count < profileList.length; count++) {

        const profile = document.createElement("div");
        profile.className = "profile";
    
        if(profileList[count].id === 2){
            const postPage = document.createElement("h1");
            postPage.innerHTML = "Posts";
            postPage.classList.add("myComponent--Title1");
            profile.appendChild(postPage)
        }

        const profileUser = document.createElement("div");
        profileUser.classList.add("profile--User");
        col1.appendChild(profileUser);

        const imgUser = document.createElement("img");
        imgUser.classList.add("profile--img");
        imgUser.src = profileList[count].img;
        const divImg = document.createElement("div");
        divImg.classList.add("div--img");
        divImg.classList.add("grid-item");
        divImg.appendChild(imgUser);
        profileUser.appendChild(divImg);
        
        const divInfoProfile = document.createElement("div");
        divInfoProfile.classList.add("info--profile");
        divInfoProfile.classList.add("grid-item");
        
        const nameProfile = document.createElement("h2");
        nameProfile.classList.add("profile--name");
        nameProfile.classList.add("myComponent--Title2");
        nameProfile.textContent = profileList[count].user;
        
        const stackProfile = document.createElement("p");
        stackProfile.classList.add("stack--profile");
        stackProfile.classList.add("myComponent--Text2");
        stackProfile.textContent = profileList[count].stack;
        
        divInfoProfile.appendChild(nameProfile);
        divInfoProfile.appendChild(stackProfile);
        
        col1.appendChild(profile);
        profile.appendChild(profileUser);
        
        profileUser.appendChild(divImg);
        profileUser.appendChild(divInfoProfile);


        
        if(profileList[count].id > 1){
            const postUser = document.createElement("div");
            postUser.classList.add("postUser");
            
            const titlePostUser = document.createElement("h3");
            titlePostUser.classList.add("postUser__title");
            titlePostUser.classList.add("myComponent--Title1");
            const postIndex = profileList[count].id - 2
            titlePostUser.innerHTML = posts[postIndex].title;
            postUser.appendChild(titlePostUser);
            
            const textPostUser = document.createElement("p");
            textPostUser.classList.add("postUser__text");
            textPostUser.classList.add("myComponent--Text1");
            textPostUser.innerHTML = posts[postIndex].text;
            postUser.appendChild(textPostUser);

            const interactArea = document.createElement("div");
            interactArea.classList.add("interact__area"); /* Pai */
            postUser.appendChild(interactArea);
            
            const openPostUser = document.createElement("button");
            openPostUser.classList.add("show__modal");
            openPostUser.classList.add("learn--more");
            openPostUser.innerHTML = "Abrir Post"
            interactArea.appendChild(openPostUser);

            /* ----------- Criação do modal ------------------------------------------------------------------- */

            const dialog = document.createElement("dialog");
            dialog.classList.add("modalContainer");
            interactArea.appendChild(dialog);


            openPostUser.addEventListener("click", () =>{
                dialog.showModal();
            });

            const divModal = document.createElement("div"); 
            divModal.classList.add("modal");
            dialog.appendChild(divModal);

            const profileModal = document.createElement("div");
            profileModal.classList.add("profileModal");
            divModal.appendChild(profileModal);
            

            const divModalImg = document.createElement("div");
            divModalImg.classList.add("modalImg");

            const modalImg = document.createElement("img");
            modalImg.src = profileList[count].img; 
            modalImg.classList.add("modalImg");
            divModalImg.appendChild(modalImg);

            const titlesmodal = document.createElement("div");
            titlesmodal.classList.add("titlesModal");
            profileModal.append(divModalImg, titlesmodal);

            const titleModal = document.createElement("h1");
            titleModal.classList.add("myComponent--Title2");
            titleModal.classList.add("titleModal");
            const subtitleModal = document.createElement("h4");
            titleModal.innerText = posts[postIndex].user;
            subtitleModal.innerText = posts[postIndex].stack;
            titlesmodal.append(titleModal, subtitleModal);

            const divPostModal = document.createElement("div");
            divPostModal.classList.add("divPostModal");
            dialog.appendChild(divPostModal);

            const titlePostModal = document.createElement("h1");
            titlePostModal.classList.add("titlePostModal");
            titlePostModal.classList.add("myComponent--Title1");
            titlePostModal.innerText = posts[postIndex].title;
            divPostModal.appendChild(titlePostModal); 

            const textPostModal = document.createElement("p");
            textPostModal.classList.add("textPostModal");
            textPostModal.classList.add("myComponent--Text2");
            textPostModal.innerHTML = posts[postIndex].text;
            divPostModal.appendChild(textPostModal);

            
            const closeButton = document.createElement('button');
            closeButton.className = 'modal__closeButton';
            closeButton.innerHTML = '&#x2716';

            closeButton.addEventListener("click", () =>{
                dialog.close();
            });

            divModal.appendChild(closeButton);


/* -----------------  Área interativa  -------------------------------------------------- */

                const likeButton = document.createElement("div"); 
                likeButton.classList.add("postUser__likeButton"); /* Filho */

                const divHeartIcon = document.createElement("div");
                divHeartIcon.classList.add("box_heart");
                // divHeartIcon.classList.add("liked");
                const imgHeart = document.createElement("img");
                imgHeart.classList.add("heart");
                imgHeart.src = img[0].img; ;
                likeButton.appendChild(imgHeart);

                const likeCount = document.createElement("p"); /* Filho */
                likeCount.classList.add("count__likes");
                likeCount.innerHTML = posts[postIndex].likes;
                
                likeButton.addEventListener('click', function () {
                    if (divHeartIcon.classList.contains('liked')) {
                        divHeartIcon.classList.remove('liked');
                        imgHeart.src = img[0].img;
                        likeCount.innerText = posts[postIndex].likes;

                    } else {    
                    divHeartIcon.classList.add('liked');
                    imgHeart.src = img[1].img;
                    likeCount.innerText = posts[postIndex].likes + 1;
                    }
                });

                interactArea.appendChild(likeButton);
                likeButton.appendChild(likeCount);
                /* interactArea.appendChild(likeCount); */

                /* -------  ícone de coração  ----------- */
                profile.appendChild(postUser)
                
            } else {
                const addPost = document.createElement("div");
                addPost.classList.add("add--post");
                profile.appendChild(addPost);

                const addTitle = document.createElement("div");
                addTitle.classList.add("title--newPost");
                addPost.appendChild(addTitle);
                const inputTitle = document.createElement("input");
                inputTitle.classList.add("input--title");
                addTitle.appendChild(inputTitle);
                inputTitle.type = "text"; 
                inputTitle.placeholder =   "Digitar título do post"

                const addTextpost = document.createElement("div");
                addTextpost.classList.add("text--newPost");
                addPost.appendChild(addTextpost);
                const inputText = document.createElement("input");
                inputText.classList.add("input--text");
                addTextpost.appendChild(inputText);
                inputText.type = "text";
                inputText.placeholder = "Digitar descrição do post"

                const submitpost = document.createElement("div");
                submitpost.classList.add("submit--post");
                addPost.appendChild(submitpost);
                const submitpostButton = document.createElement("input");
                submitpostButton.classList.add("submit--button");
                submitpostButton.type = "submit";
                submitpostButton.value = "Postar";
                submitpost.appendChild(submitpostButton);
            }
        
        }
}

renderUsers(users, posts, likeButton);
renderSuggestUsers (suggestUsers)