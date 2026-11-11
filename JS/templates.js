function getHTMLForBook(index) {
    return `
    <li class="book">
        <button id="favoriteButton-${index}" class="favorite-button" onclick="setFavorite(${index})"></button>
        <img src="./assets/img/book-cover.jpg" alt="Book Cover" />
        <div class="book-content">
            <p class="book-genre">${currentBooks[index].genre} · ${currentBooks[index].publishedYear}</p>
            <h2>${currentBooks[index].name}</h2>
            <p class="book-author">${currentBooks[index].author}</p>
            <h3 class="book-price">${currentBooks[index].price.toLocaleString("de-DE", { style: "currency", currency: "EUR" })}</h3>
        </div>
        <hr />
        <div class="book-footer">
            <div class="likes-wrapper">
                <button id="likeButton-${index}" class="like-button" onclick="toggleLikeBook(${index})"></button>
                <p id="likeCounter-${index}" class="book-likes">${currentBooks[index].likes}</p>
            </div>
            <div class="comments-wrapper">
                <button class="comments-button" onclick="toggleCommentSection(${index})"></button>
                <p class="book-comments">${currentBooks[index].comments.length}</p>
            </div>
        </div>
        <section id="commentSection-${index}" class="comment-section d-none">
            <hr />
            <p>Comments:</p>
            <div id="commentsWrapper-${index}" class="comments"></div>
            <div class="input-wrapper">
                <input id="commentInput-${index}" type="text" placeholder="Write a comment...">
                <button onclick="addComment(${index})">➤</button>
            </div>
        </section>
        </li>`;
}
