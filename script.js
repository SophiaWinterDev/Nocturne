let books = [
    {
        "name": "Daggermouth",
        "author": "H. M. Wolfe",
        "likes": 1842,
        "liked": true,
        "isFavorite": false,
        "price": 24.0,
        "publishedYear": 2026,
        "genre": "Dark Romance",
        "comments": [
            {
                "name": "VelvetPages",
                "comment":
                    "The dystopian setting was absolutely fascinating. I loved the tension and the morally complicated characters.",
            },
            {
                "name": "MidnightReader",
                "comment":
                    "Dark, intense and impossible to put down. Definitely not a lighthearted romance!",
            },
            {
                "name": "InkAndAshes",
                "comment":
                    "The atmosphere was incredible, although some parts were a little too intense for my taste.",
            },
        ],
    },
    {
        "name": "Deathbringer",
        "author": "Sonia Tagliareini",
        "likes": 1265,
        "liked": true,
        "isFavorite": false,
        "price": 24.0,
        "publishedYear": 2026,
        "genre": "Dark Fantasy",
        "comments": [
            {
                "name": "MoonlitLibrary",
                "comment":
                    "A fascinating magical world with plenty of secrets and tension. I really enjoyed the darker atmosphere.",
            },
            {
                "name": "FantasyWhispers",
                "comment":
                    "The combination of dangerous magic, mystery and romance kept me hooked.",
            },
        ],
    },
    {
        "name": "Avery: A Demon's Bargain",
        "author": "Melanie Lan",
        "likes": 987,
        "liked": false,
        "isFavorite": false,
        "price": 22.0,
        "publishedYear": 2026,
        "genre": "Urban Fantasy",
        "comments": [
            {
                "name": "StarlitChapters",
                "comment":
                    "Demons, dark magic and a strong female protagonist? Exactly my kind of fantasy.",
            },
            {
                "name": "BookishRebel",
                "comment":
                    "I really liked the urban fantasy setting and the complicated relationships between the characters.",
            },
        ],
    },
    {
        "name": "Alchemised",
        "author": "SenLinYu",
        "likes": 3256,
        "liked": true,
        "isFavorite": false,
        "price": 34.99,
        "publishedYear": 2025,
        "genre": "Dark Fantasy",
        "comments": [
            {
                "name": "NocturnalReads",
                "comment":
                    "Beautifully written, haunting and emotionally devastating. This story will stay with me for a long time.",
            },
            {
                "name": "PaperAndPoison",
                "comment":
                    "The world-building is incredible, but this is definitely not an easy book to read.",
            },
            {
                "name": "LostInFiction",
                "comment":
                    "I needed a moment to recover after finishing this. Such a powerful and heartbreaking story.",
            },
            {
                "name": "EternalChapters",
                "comment":
                    "A very long book, but the complexity of the characters made every page worth reading.",
            },
        ],
    },
    {
        "name": "Carved Skin – Du bist mein Anfang",
        "author": "Sitara Snow & Kristin Glimmer",
        "likes": 1128,
        "liked": false,
        "isFavorite": false,
        "price": 18.99,
        "publishedYear": 2026,
        "genre": "Dark Romance",
        "comments": [
            {
                "name": "CrimsonLetters",
                "comment":
                    "An unsettling story with a very unusual perspective. Definitely something different.",
            },
            {
                "name": "DarkPageSociety",
                "comment":
                    "The psychological tension was intense. I would recommend checking the content warnings first.",
            },
        ],
    },
    {
        "name": "The Witch in the Dead of Night",
        "author": "Charlotte Buckley",
        "likes": 1453,
        "liked": true,
        "isFavorite": false,
        "price": 24.0,
        "publishedYear": 2026,
        "genre": "Gothic Fantasy",
        "comments": [
            {
                "name": "WitchingPages",
                "comment":
                    "Witches, vampires and forbidden magic. I absolutely loved the gothic atmosphere.",
            },
            {
                "name": "LunarFiction",
                "comment":
                    "The slow-burn romance and magical secrets made this such an entertaining read.",
            },
        ],
    },
    {
        "name": "The Serpent and the Wings of Night",
        "author": "Carissa Broadbent",
        "likes": 2874,
        "liked": false,
        "isFavorite": false,
        "price": 22.0,
        "publishedYear": 2024,
        "genre": "Romantasy",
        "comments": [
            {
                "name": "VampireAndVelvet",
                "comment":
                    "Oraya is such an amazing protagonist. I loved her strength and determination.",
            },
            {
                "name": "MoonAndThorns",
                "comment":
                    "The Kejari tournament was incredibly exciting. The romance made everything even better.",
            },
            {
                "name": "ChapterObsession",
                "comment":
                    "The ending completely destroyed me. I immediately needed the second book!",
            },
        ],
    },
    {
        "name": "The Ashes and the Star-Cursed King",
        "author": "Carissa Broadbent",
        "likes": 2546,
        "liked": false,
        "isFavorite": false,
        "price": 22.0,
        "publishedYear": 2024,
        "genre": "Romantasy",
        "comments": [
            {
                "name": "ScarletReader",
                "comment":
                    "An emotional continuation with so much tension, heartbreak and character development.",
            },
            {
                "name": "BoundByBooks",
                "comment":
                    "I loved seeing how the characters dealt with the consequences of the first book.",
            },
            {
                "name": "NightfallStories",
                "comment":
                    "A beautiful conclusion to Oraya and Raihn's story. I didn't want it to end.",
            },
        ],
    },
    {
        "name": "The Songbird and the Heart of Stone",
        "author": "Carissa Broadbent",
        "likes": 2168,
        "liked": true,
        "isFavorite": false,
        "price": 22.0,
        "publishedYear": 2025,
        "genre": "Romantasy",
        "comments": [
            {
                "name": "EclipseReader",
                "comment":
                    "Mische's story was everything I hoped for. The underworld setting was absolutely stunning.",
            },
            {
                "name": "FictionAndFangs",
                "comment":
                    "I loved the dynamic between Mische and Asar. Their journey was full of surprises.",
            },
        ],
    },
    {
        "name": "The Fallen and the Kiss of Dusk",
        "author": "Carissa Broadbent",
        "likes": 1987,
        "liked": false,
        "isFavorite": false,
        "price": 22.0,
        "publishedYear": 2025,
        "genre": "Romantasy",
        "comments": [],
    },
    {
        "name": "Slaying the Vampire Conqueror",
        "author": "Carissa Broadbent",
        "likes": 1745,
        "liked": true,
        "isFavorite": false,
        "price": 22.0,
        "publishedYear": 2026,
        "genre": "Romantasy",
        "comments": [
            {
                "name": "SilverAndShadow",
                "comment":
                    "Sylina is such an interesting heroine. I loved the conflict between duty and love.",
            },
            {
                "name": "VelvetMoon",
                "comment":
                    "The romance developed beautifully, and the connection to the Crowns of Nyaxia universe was a bonus.",
            },
        ],
    },
    {
        "name": "Lucifer",
        "author": "Lisa Kismet",
        "likes": 1326,
        "liked": false,
        "isFavorite": false,
        "price": 17.99,
        "publishedYear": 2026,
        "genre": "Dark Romance",
        "comments": [
            {
                "name": "ForbiddenChapters",
                "comment":
                    "The mysterious atmosphere and psychological tension kept me turning the pages.",
            },
            {
                "name": "AfterDarkReads",
                "comment":
                    "A dark and intriguing story. The secrets surrounding the characters made it especially interesting.",
            },
        ],
    },
    {
        "name": "God of Malice",
        "author": "Rina Kent",
        "likes": 3421,
        "liked": true,
        "isFavorite": false,
        "price": 10.89,
        "publishedYear": 2024,
        "genre": "Dark Romance",
        "comments": [
            {
                "name": "MorallyGreyBooks",
                "comment":
                    "Killian is one of the most disturbing fictional characters I've encountered. Definitely a dark read.",
            },
            {
                "name": "MidnightObsession",
                "comment":
                    "The dark university atmosphere was exactly what I was looking for.",
            },
            {
                "name": "BlackRoseReads",
                "comment":
                    "Not for everyone, but I found the psychological tension fascinating. Please check the content warnings.",
            },
        ],
    },
    {
        "name": "Phantasma",
        "author": "Kaylie Smith",
        "likes": 2384,
        "liked": false,
        "isFavorite": false,
        "price": 17.0,
        "publishedYear": 2025,
        "genre": "Gothic Fantasy",
        "comments": [
            {
                "name": "MidnightWhispers",
                "comment":
                    "The gothic atmosphere was absolutely incredible. A haunted mansion, deadly trials and mysterious characters? I loved every second!",
            },
            {
                "name": "VelvetAndInk",
                "comment":
                    "Blackwell was such an intriguing character. The chemistry between him and Ophelia was amazing.",
            },
            {
                "name": "MoonlitChapters",
                "comment":
                    "A little predictable at times, but the setting and the dangerous games made it impossible to put down.",
            },
        ],
    },
    {
        "name": "Anathema",
        "author": "Keri Lake",
        "likes": 1956,
        "liked": false,
        "isFavorite": false,
        "price": 18.0,
        "publishedYear": 2026,
        "genre": "Dark Fantasy",
        "comments": [
            {
                "name": "WickedPages",
                "comment":
                    "The dark forest setting was hauntingly beautiful. I loved how mysterious and dangerous everything felt.",
            },
            {
                "name": "AshesAndThorns",
                "comment":
                    "The slow-burn romance was incredible, and the world-building completely pulled me in.",
            },
            {
                "name": "NocturnalSoul",
                "comment":
                    "A beautifully dark fantasy with fascinating creatures and morally grey characters. Definitely worth reading!",
            },
        ],
    },
];

let currentBooks = [];
const BOOK_SECTION_REF = document.getElementById("bookSection");

function init() {
    renderBooks("all");
    showBookAmount();
}

function showBookAmount() {
    document.getElementById("bookAmount").innerText =
        `The Collection · ${currentBooks.length} Books`;
}

function renderBooks(category) {
    BOOK_SECTION_REF.innerHTML = "";
    currentBooks = [];
    pushBooksToArray(category);
    pushBooksToHTML();
    showBookAmount();
}

function pushBooksToArray(category) {
    for (let index = 0; index < books.length; index++) {
        if (category === "all" || books[index].genre === category || (category === "favorites" && books[index].isFavorite)) {
            currentBooks.push(books[index]);
        }
    }
}

function pushBooksToHTML() {
    for (let index = 0; index < currentBooks.length; index++) {
        BOOK_SECTION_REF.innerHTML += getHTMLForBook(index);
        if (currentBooks[index].isFavorite) {
            document.getElementById(`favoriteButton-${index}`).classList.add("favored-button");
        }
        checkIfLiked(index);
        renderExistingComments(index);
    }
}

function renderExistingComments(index) {
    document.getElementById(`commentsWrapper-${index}`).innerHTML += "";
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
    document.getElementById(`commentsWrapper-${index}`).innerHTML +=
        getHTMLForNewComment(index);
    document.getElementById(`commentInput-${index}`).value = "";
    countComments(index);
}

function countComments(index) {
    currentBooks[index].comments.length =
        currentBooks[index].comments.length + 1;
    document.getElementById(`commentCounter-${index}`).innerHTML =
        currentBooks[index].comments.length;
}

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

function setFavorite(index) {
    const FAVORITE_BUTTON_REF = document.getElementById(`favoriteButton-${index}`);
    currentBooks[index].isFavorite = !currentBooks[index].isFavorite;
    if (currentBooks[index].isFavorite === true) {
        FAVORITE_BUTTON_REF.classList.add("favored-button");
    } else {
        FAVORITE_BUTTON_REF.classList.remove("favored-button");
    }
    if (document.querySelector(".active-button").getAttribute("onclick").includes("favorites")) {
            renderBooks("favorites");}
}

function chooseCategory(clickedButton, category) {
    document.querySelectorAll(".category-button").forEach((button) => {
        button.classList.remove("active-button");
    });
    clickedButton.classList.add("active-button");
    renderBooks(category);
}
