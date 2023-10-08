import { TopStory } from "./models/topstory";
import { Result } from "./models/result";
import { fetchResource } from "./network/apiclient";

enum TopStories {
    World = "World",
    Arts = "Arts",
    Home = "Home",
    Science = "Science",
    US = "US"
}

const favoriteTopStories: Result[] = [];
const topicDropdown = document.getElementById("topic-dropdown");

for (const topStory in TopStories) {
    const li = document.createElement("li");
    const button = document.createElement("button");

    button.classList.add("dropdown-item");
    button.setAttribute("type", "button");
    button.addEventListener("click", () => getTopStory(topStory));

    button.textContent = topStory;

    li.appendChild(button);

    topicDropdown?.appendChild(li);
}

function getTopStory(topStory: string) {
    const dropdownButton = document.getElementById("dropdown-button");
    
    if(dropdownButton != null) {
        dropdownButton.textContent = topStory;
    }
    
    fetchResource<TopStory>("https://api.nytimes.com/svc/topstories/v2/" + topStory.toLowerCase() + ".json")
    .then(result => {
        createTopStoryElement(result);
    });
}

function createTopStoryElement(topStory: TopStory) {
    const topStoriesDiv = document.getElementById("topStories");
    
    topStoriesDiv?.replaceChildren();
    
    let ul = document.createElement("ul");
    ul.setAttribute("class", "list-group list-group-horizontal d-flex justify-content-center");

    topStory.results.forEach((result, index) => {
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
        favoriteImage.src = isTopStoryIncluded(result.uri) ? "/src/resources/favorite-filled.png" : "/src/resources/favorite.png";
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

        const favoritesMenuTitle = document.getElementById("favorites");

        if (favoritesMenuTitle != null) {
            favoritesMenuTitle.textContent = favoriteTopStories.length > 0 ? "Favorites (" + favoriteTopStories.length + ")" : "Favorites";
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

    image.src = isTopStoryIncluded(result.uri) ? "/src/resources/favorite-filled.png" : "/src/resources/favorite.png";

    const favoritesMenuTitle = document.getElementById("favorites");
    
    if (favoritesMenuTitle != null) {
        favoritesMenuTitle.textContent = favoriteTopStories.length > 0 ? "Favorites (" + favoriteTopStories.length + ")" : "Favorites";
    }
}

function isTopStoryIncluded(uri: string): boolean {
    return favoriteTopStories.find(result => result.uri == uri) != null;
}