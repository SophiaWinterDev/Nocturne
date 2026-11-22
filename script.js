let genres = [
    "Urban Fantasy",
    "Gothic Fantasy",
    "Dark Fantasy",
    "Romantasy",
    "Dark Romance",
];

let currentBooks = [];
let currentCategory = "all";
const BOOK_SECTION_REF = document.getElementById("bookSection");

function init() {
    loadBooksFromLocalStorage();
    loadGenresFromLocalStorage();
    renderGenres();
    renderGenreOptions();
    renderBooks(currentCategory);
    showBookAmount();
}

function renderBooks(category) {
    BOOK_SECTION_REF.innerHTML = "";
    document.getElementById("emptyShelf").innerHTML = "";
    currentBooks = [];
    pushBooksToArray(category);
    pushBooksToHTML();
    showBookAmount();
    checkIfEmpty();
    if (category !== "favorites") {
        BOOK_SECTION_REF.innerHTML += getHTMLForAddButton();
    }
}

function pushBooksToArray(category) {
    for (let index = 0; index < books.length; index++) {
        if (
            category === "all" ||
            books[index].genre === category ||
            (category === "favorites" && books[index].isFavorite)
        ) {
            currentBooks.push(books[index]);
        }
    }
}

function pushBooksToHTML() {
    for (let index = 0; index < currentBooks.length; index++) {
        BOOK_SECTION_REF.innerHTML += getHTMLForBook(index);
        if (currentBooks[index].isFavorite) {
            document
                .getElementById(`favoriteButton-${index}`)
                .classList.add("favored-button");
        }
        checkIfLiked(index);
        renderExistingComments(index);
    }
}

function showBookAmount() {
    document.getElementById("bookAmount").innerText = getTextForBookAmount();
}

function checkIfEmpty() {
    if (currentBooks.length === 0) {
        BOOK_SECTION_REF.innerHTML = "";
        document.getElementById("emptyShelf").innerHTML = getHTMLForEmptySite();
    }
}

// #region Categories/Genres
function chooseCategory(category) {
    currentCategory = category;
    renderGenres();
    renderBooks(category);
}

function renderGenres() {
    const CATEGORY_BUTTON_WRAPPER_REF = document.getElementById(
        "categoryButtonWrapper",
    );
    CATEGORY_BUTTON_WRAPPER_REF.innerHTML = getHTMLForDefaultCategories();
    for (let index = 0; index < genres.length; index++) {
        CATEGORY_BUTTON_WRAPPER_REF.innerHTML += getHTMLForGenre(index);
    }
    CATEGORY_BUTTON_WRAPPER_REF.innerHTML += getHTMLForAddGenreButton();
}

function addGenre(event) {
    event.preventDefault();
    let newGenre = document.getElementById("newGenreInput").value.trim();
    if (checkIfGenreExists(newGenre)) {
        document.getElementById("genreError").innerText =
            "This genre already exists.";
        return;
    }
    genres.push(newGenre);
    saveGenresToLocalStorage();
    renderGenres();
    renderGenreOptions();
    closeGenreDialog();
}

function renderGenreOptions() {
    const SELECT_REF = document.getElementById("genreSelection");
    SELECT_REF.innerHTML = '<option value="" disabled selected></option>';

    for (let index = 0; index < genres.length; index++) {
        SELECT_REF.innerHTML += `<option value="${genres[index]}">${genres[index]}</option>`;
    }
}

function checkIfGenreExists(newGenre) {
    for (let index = 0; index < genres.length; index++) {
        if (genres[index].toLowerCase() === newGenre.toLowerCase()) {
            return true;
        }
    }
    return false;
}
// #endregion

// #region Comments
function renderExistingComments(index) {
    document.getElementById(`commentsWrapper-${index}`).innerHTML = "";
    let existingBookComments = currentBooks[index].comments;
    for (
        let commentIndex = 0;
        commentIndex < existingBookComments.length;
        commentIndex++
    ) {
        document.getElementById(`commentsWrapper-${index}`).innerHTML +=
            getHTMLForExistingComments(index, commentIndex);
    }
}

function toggleCommentSection(index) {
    document
        .getElementById(`commentSection-${index}`)
        .classList.toggle("comment-section-open");
}

function addComment(index) {
    if (document.getElementById(`commentInput-${index}`).value.trim() !== "") {
        currentBooks[index].comments.push({
            "name": "You",
            "comment": document
                .getElementById(`commentInput-${index}`)
                .value.trim(),
        });
    }
    document.getElementById(`commentInput-${index}`).value = "";
    renderExistingComments(index);
    countComments(index);
    saveBooksToLocalStorage();
}

function countComments(index) {
    document.getElementById(`commentCounter-${index}`).innerHTML =
        currentBooks[index].comments.length;
}
// #endregion

// #region Likes
function checkIfLiked(index) {
    if (currentBooks[index].liked === true) {
        document
            .getElementById(`likeButton-${index}`)
            .classList.add("liked-button");
    }
}

function toggleLikeBook(index) {
    currentBooks[index].liked = document
        .getElementById(`likeButton-${index}`)
        .classList.toggle("liked-button");
    countLikes(index);
    saveBooksToLocalStorage();
}

function countLikes(index) {
    if (
        document
            .getElementById(`likeButton-${index}`)
            .classList.contains("liked-button")
    ) {
        currentBooks[index].likes = currentBooks[index].likes + 1;
    } else {
        currentBooks[index].likes = currentBooks[index].likes - 1;
    }
    document.getElementById(`likeCounter-${index}`).innerHTML =
        currentBooks[index].likes;
}
// #endregion

// #region Favorites
function setFavorite(index) {
    const FAVORITE_BUTTON_REF = document.getElementById(
        `favoriteButton-${index}`,
    );
    currentBooks[index].isFavorite = !currentBooks[index].isFavorite;
    saveBooksToLocalStorage();
    if (currentBooks[index].isFavorite === true) {
        FAVORITE_BUTTON_REF.classList.add("favored-button");
    } else {
        FAVORITE_BUTTON_REF.classList.remove("favored-button");
    }
    checkFavorites();
}

function checkFavorites() {
    if (currentCategory === "favorites") {
        renderBooks("favorites");
    }
}
// #endregion

// #region Local Storage
function saveBooksToLocalStorage() {
    localStorage.setItem("books", JSON.stringify(books));
}

function loadBooksFromLocalStorage() {
    const SAVED_BOOKS = localStorage.getItem("books");
    if (SAVED_BOOKS !== null) {
        books = JSON.parse(SAVED_BOOKS);
    }
}

function saveGenresToLocalStorage() {
    localStorage.setItem("genres", JSON.stringify(genres));
}

function loadGenresFromLocalStorage() {
    const SAVED_GENRES = localStorage.getItem("genres");
    if (SAVED_GENRES !== null) {
        genres = JSON.parse(SAVED_GENRES);
    }
}
// #endregion

// #region Dialog Books
function openDialog() {
    document.getElementById("dialog").showModal();
    lockScroll();
    document
        .getElementById("dialog")
        .addEventListener("close", unlockScroll, { once: true });
}

function closeDialog() {
    document.getElementById("dialog").close();
}

function lockScroll() {
    scrollPosition = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = "100%";
}

function unlockScroll() {
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    window.scrollTo(0, scrollPosition);
}

function addNewBook(event) {
    event.preventDefault();
    books.push(getNewBook());
    saveBooksToLocalStorage();
    renderBooks(currentCategory);
    resetDialogInputs();
    closeDialog();
}

function resetDialogInputs() {
    document.getElementById("form").reset();
}
// #endregion

// #region Dialog Genres
function openGenreDialog() {
    document.getElementById("genreDialog").showModal();
    lockScroll();
    document
        .getElementById("genreDialog")
        .addEventListener("close", unlockScroll, { once: true });
    document.getElementById("genreError").innerText = "Enter a genre.";
}

function closeGenreDialog() {
    document.getElementById("genreDialog").close();
    document.getElementById("genreForm").reset();
}
// #endregion
