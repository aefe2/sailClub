/* Theme & Fonts */

const darkThemeButton = document.querySelector('.theme-button-dark');
const lightThemeButton = document.querySelector('.theme-button-light');

const serifFontButton = document.querySelector('.font-button-serif');
const sansSerifFontButton = document.querySelector('.font-button-sans-serif');

darkThemeButton.onclick = () => {
    document.body.classList.add('dark');
    lightThemeButton.classList.remove('active');
    darkThemeButton.classList.add('active');
};

lightThemeButton.onclick = () => {
    document.body.classList.remove('dark');
    lightThemeButton.classList.add('active');
    darkThemeButton.classList.remove('active');
};

serifFontButton.onclick = () => {
    document.body.classList.add('serif');
    sansSerifFontButton.classList.remove('active');
    serifFontButton.classList.add('active');
};

sansSerifFontButton.onclick = () => {
    document.body.classList.remove('serif');
    sansSerifFontButton.classList.add('active');
    serifFontButton.classList.remove('active');
};

/* Hidden text toggle */

const sectionArticles = document.querySelectorAll('.blog-article.short');

for (const sectionArticle of sectionArticles) {
    const moreButton = sectionArticle.querySelector('.more');
    moreButton.onclick = () => {
        sectionArticle.classList.remove('short');
    }
}

/* Rent change layout */

const viewButtonGrid = document.querySelector('.card-view-button-grid');
const viewButtonList = document.querySelector('.card-view-button-list');

const cardsList = document.querySelector('.cards');

viewButtonList.onclick = () => {
    cardsList.classList.add('list');
    viewButtonGrid.classList.remove('active');
    viewButtonList.classList.add('active');
};

viewButtonGrid.onclick = () => {
    cardsList.classList.remove('list');
    viewButtonList.classList.remove('active');
    viewButtonGrid.classList.add('active');
};

/* Gallery slider */

const mainImg = document.querySelector('.active-photo');
const previews = document.querySelectorAll('.preview-list a');

for (const activeImg of previews) {
    activeImg.onclick = (evt) => {
        evt.preventDefault();
        mainImg.src = activeImg.href;

        const currentActive = document.querySelector('.active-item')
        currentActive.classList.remove('active-item');
        activeImg.classList.add('active-item');
    }
}