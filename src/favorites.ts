import { Result } from "./models/result";

let favoriteTopStories: Result[] = [];
let topStoriesJson = localStorage.getItem('topStories');

if (topStoriesJson != null) {
    favoriteTopStories = JSON.parse(topStoriesJson) as Result[];
}

const favoritesMenuTitle = document.getElementById("favorites");
    
if (favoritesMenuTitle != null) {
    favoritesMenuTitle.textContent = favoriteTopStories.length > 0 ? "Favorites (" + favoriteTopStories.length + ")" : "Favorites";
}

function createTopStoryElement() {
    const topStoriesDiv = document.getElementById("topStories");
    
    topStoriesDiv?.replaceChildren();
    
    let ul = document.createElement("ul");
    ul.setAttribute("class", "list-group list-group-horizontal d-flex justify-content-center");

    favoriteTopStories.forEach((result, index) => {
        const li = document.createElement("li");
        li.setAttribute("class", "list-group-item");
    
        const cardDiv = document.createElement("div");
        cardDiv.setAttribute("class", "card m-3");
        cardDiv.setAttribute("style", "width: 18rem;");
    
        const image = document.createElement("img");
        image.setAttribute("class", "card-img-top");
    
        const cardBodyDiv = document.createElement("div");
        cardBodyDiv.setAttribute("class", "card-body");
    
        const h5 = document.createElement("h5");
        h5.setAttribute("class", "card-title");
        h5.textContent = result.title;
    
        const p = document.createElement("p");
        p.setAttribute("class", "card-text");

        if(result.multimedia != null) {
            image.setAttribute("src", result.multimedia[0].url);
            p.textContent = result.multimedia[0].caption;
        } else {
            image.setAttribute("src", "resources/noimage.jpg");
            p.textContent = "Article not available";
        }
    
        cardBodyDiv.appendChild(h5);
        cardBodyDiv.appendChild(p);
    
        cardDiv.appendChild(image);
        cardDiv.appendChild(cardBodyDiv);

        const favoriteImage = document.createElement("img");
        favoriteImage.src = isTopStoryIncluded(result.uri) ? "https:///ebucelik.github.io/newyorktimes-webapp/assets/resources/favorite-filled-72c0af0f.png" : "https:///ebucelik.github.io/newyorktimes-webapp/assets/resources/favorite-b48fd479.png";
        favoriteImage.setAttribute("width","25px");
        favoriteImage.setAttribute("height","25px");
        favoriteImage.addEventListener("click", () => addOrRemoveFavoriteTopStory(result, favoriteImage));

        li.appendChild(favoriteImage);
        li.appendChild(cardDiv);

        ul.appendChild(li);
        
        if((index + 1) % 3 == 0) {
            topStoriesDiv?.appendChild(ul);

            ul = document.createElement("ul");
            ul.setAttribute("class", "list-group list-group-horizontal d-flex justify-content-center");
        }

        if (favoriteTopStories.length == (index + 1) && favoriteTopStories.length % 3 > 0) {
            topStoriesDiv?.appendChild(ul);
        } 
    });
}

function addOrRemoveFavoriteTopStory(result: Result, image: HTMLImageElement) {
    if (isTopStoryIncluded(result.uri)) {
        const index = favoriteTopStories.indexOf(result, 0);
        favoriteTopStories.splice(index, 1);
    } else {
        favoriteTopStories.push(result);
    }

    localStorage.setItem('topStories', JSON.stringify(favoriteTopStories));

    image.src = isTopStoryIncluded(result.uri) ? "https:///ebucelik.github.io/newyorktimes-webapp/assets/resources/favorite-filled-72c0af0f.png" : "https:///ebucelik.github.io/newyorktimes-webapp/assets/resources/favorite-b48fd479.png";

    const favoritesMenuTitle = document.getElementById("favorites");
    
    if (favoritesMenuTitle != null) {
        favoritesMenuTitle.textContent = favoriteTopStories.length > 0 ? "Favorites (" + favoriteTopStories.length + ")" : "Favorites";
    }

    createTopStoryElement();
}

function isTopStoryIncluded(uri: string): boolean {
    return favoriteTopStories.find(result => result.uri == uri) != null;
}

createTopStoryElement();