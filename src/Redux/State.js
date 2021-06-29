import {rerenderEntireTree} from "../Render";

let state = {
    profilePage: {
        postsData: [
            {
                id: 1,
                message: 'Hi how are you?',
                likesCount: 65,
            },
            {
                id: 2,
                message: 'It is my first project',
                likesCount: 12,
            }
        ],
    },
    dialogsPage: {
        messagesData: [
            {
                id: 1,
                message: 'Hi'
            },
            {
                id: 2,
                message: 'Your car is broken'
            },
            {
                id: 3,
                message: 'I am working at the moment'
            },
            {
                id: 4,
                message: 'Are you hungry?'
            },
            {
                id: 5,
                message: 'Yeah that is my number'
            },
            {
                id: 6,
                message: 'Ok, thanks'
            },
        ],
        dialogsData: [
            {
                id: 1,
                name: 'Dmytro'
            },
            {
                id: 2,
                name: 'Andriy'
            },
            {
                id: 3,
                name: 'Oleg'
            },
            {
                id: 4,
                name: 'John'
            },
            {
                id: 5,
                name: 'Katya'
            },
            {
                id: 6,
                name: 'Ivan'
            }
        ],
    },
    sideBar: {
        users: [
            {
                id: 1,
                image: 'https://www.meme-arsenal.com/memes/12f76916028fc69eace80be7a8b2c419.jpg',
            },
            {
                id: 2,
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQArK-zKGlr_c5QbixCsX-m6IFrzqldB7HNyN9t886Z_0YC4pfe3LOaNzDWc6XXrZWPOdZUvus7sX9Sfg&usqp=CAU',
            },
            {
                id: 3,
                image: 'https://www.meme-arsenal.com/memes/ede6da73f226721ea502fde3e1ad9088.jpg',
            },
            {
                id: 4,
                image: 'https://cs6.pikabu.ru/post_img/2017/05/16/7/1494935376181977968.jpg',
            },
        ]
    },
}

export let addNewPost = (newPostMessage) => {
    let newPostData = {
        id: 3,
        message: newPostMessage,
        likesCount: 0,
    }
    state.profilePage.postsData.push(newPostData);
    rerenderEntireTree(state);
};

export default state;
