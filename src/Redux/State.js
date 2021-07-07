const addNewPost = 'ADD-NEW-POST';
const updatePostText = 'UPDATE-NEW-POST';
const addDialogInfoBtn = 'ADD-NEW-MESSAGE';
const onChangeAreaText = 'ON-CHANGE-UPDATE';

let store = {
    _state: {
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
            newPostText: "It's a current value for textarea",
        },
        dialogsPage: {
            messagesTextArea: " It's a current value for textarea ",
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
                },
                {
                    id: 7,
                    name: 'Petro'
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
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
        //rerender our app page
    },

    //function that refers to rerenderEntireTree function in the index.js
    subscribe(observer) {
        this._callSubscriber = observer
    },

    // //function that adds a post to the page in profile
    // addNewPost() {
    //     let newPostData = {
    //         id: 3,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0,
    //     }
    //     this._state.profilePage.postsData.push(newPostData);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this._state);
    // },
    //
    // //function that changes text in profile textarea
    // updateNewPost(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },

    // ----------------------------------------------------------------
    //function that adds a new message to the page in Dialogs
    addNewMessage() {
        let newMessageData = {
            id: 7,
            message: this._state.dialogsPage.messagesTextArea,
        }
        this._state.dialogsPage.messagesData.push(newMessageData);
        this._callSubscriber(this._state)
    },
    //function that changes text in messages textarea
    onChangeUpdate(text) {
        this._state.dialogsPage.messagesTextArea = text;
        this._callSubscriber(this._state);
    },
    // ----------------------------------------------------------------

    dispatch(action) { //type: {'ADD-NEW-POST'}
        if (action.type === 'ADD-NEW-POST') {//function that adds a post to the page in profile
            let newPostData = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            }
            this._state.profilePage.postsData.push(newPostData);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST') { //function that changes text in profile textarea
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'ADD-NEW-MESSAGE') { //function that adds a new message to the page in Dialogs
            let newMessageData = {
                id: 7,
                message: this._state.dialogsPage.messagesTextArea,
            }
            this._state.dialogsPage.messagesData.push(newMessageData);
            this._state.dialogsPage.messagesTextArea = '';
            this._callSubscriber(this._state)
        } else if (action.type === 'ON-CHANGE-UPDATE') {//function that changes text in messages textarea
            this._state.dialogsPage.messagesTextArea = action.text;
            this._callSubscriber(this._state);
        }
    }

}

export const addPostActionCreator = () => {
    return {
        type: addNewPost,
    }
};
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: updatePostText,
        newText: text,
    }
};

export const addInfoActionCreator = () => {
    return {
        type: addDialogInfoBtn,
    }
};
export const onChangeAreaActionCreator = (messageText) => {
    return {
        type: onChangeAreaText,
        text: messageText,
    }
};

export default store;
