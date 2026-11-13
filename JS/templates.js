function getHTMLForBook(index) {
    return `
    <li class="book column highlight-border">
        <button id="favoriteButton-${index}" class="favorite-button" onclick="setFavorite(${index}, 'favorites')" aria-label="Add book to favorites"></button>
        <img class="full-width" src="./assets/img/book-cover.jpg" alt="Book Cover - White book on a black background with a rose on the side" />
        <div class="book-content column full-width">
            <p class="book-genre">${currentBooks[index].genre} · ${currentBooks[index].publishedYear}</p>
            <h2>${currentBooks[index].name}</h2>
            <p class="book-author">${currentBooks[index].author}</p>
        </div>
        <h3 class="book-price">${currentBooks[index].price.toLocaleString("de-DE", { style: "currency", currency: "EUR" })}</h3>
        <hr class="full-width highlight-border" />
        <div class="book-footer full-width">
            <div class="likes-wrapper center">
                <button id="likeButton-${index}" class="like-button" onclick="toggleLikeBook(${index})" aria-label="Like book"></button>
                <p id="likeCounter-${index}" class="book-likes">${currentBooks[index].likes}</p>
            </div>
            <div class="comments-wrapper center">
                <button class="comments-button" onclick="toggleCommentSection(${index})" aria-label="Open comment-section"></button>
                <p id="commentCounter-${index}" class="book-comments">${currentBooks[index].comments.length}</p>
            </div>
        </div>
        <section id="commentSection-${index}" class="comment-section column full-width">
            <hr class="full-width highlight-border" />
            <p>Comments:</p>
            <div id="commentsWrapper-${index}" class="comments column"></div>
            <div class="input-wrapper full-width">
                <input id="commentInput-${index}" type="text" aria-label="Write a comment" placeholder="Write a comment..." class="highlight-border">
                <button onclick="addComment(${index})" aria-label="Send comment">➤</button>
            </div>
        </section>
    </li>`;
}

function getHTMLForExistingComments(index, commentIndex) {
    return `
    <p><b>${currentBooks[index].comments[commentIndex].name}</b>:<br>${currentBooks[index].comments[commentIndex].comment}</p>`;
}

function getTextForBookAmount() {
    return `The Collection · ${currentBooks.length} Books`;
}
