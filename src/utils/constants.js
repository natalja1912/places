

export const editButton = document.querySelector('.cover__edit');
export const addButton = document.querySelector('.cover__add');

export const popupName = document.querySelector('.popup__text_type_name');
export const popupJob = document.querySelector('.popup__text_type_job');

export const selectors = {
    formSelector: '.popup__container',
    fieldSelector: '.popup__input',
    inputSelector: '.popup__text',
    errorSelector: '.popup__input-error',
    buttonSelector: '.popup__add-button',
    
};

//6 первоначальных карточек 

export const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Хибины',
        link: 'https://a.d-cd.net/d213f6as-960.jpg'
    },
    {
        name: 'Ярославль',
        link: 'https://photocentra.ru/images/main85/857640_main.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Адыгея',
        link: 'https://avatars.mds.yandex.net/get-pdb/1222673/1416f0f2-13c0-4d52-9392-19e07c62c57b/s1200'
    },
    {
        name: 'Байкал',
        link: 'https://newbur.ru/upload/iblock/e18/e183a1f319b2a30d3a7564a23020790d.jpg'
    }
];