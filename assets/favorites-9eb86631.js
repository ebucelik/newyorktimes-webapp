import"./modulepreload-polyfill-3cfb730f.js";/* empty css               */let e=[];const m=localStorage.getItem("topStories");m!=null&&(e=JSON.parse(m));const f=document.getElementById("favorites");f!=null&&(f.textContent=e.length>0?"Favorites ("+e.length+")":"Favorites");function g(){const t=document.getElementById("topStories");t==null||t.replaceChildren();let i=document.createElement("ul");i.setAttribute("class","list-group list-group-horizontal d-flex justify-content-center"),e.forEach((n,r)=>{const l=document.createElement("li");l.setAttribute("class","list-group-item");const o=document.createElement("div");o.setAttribute("class","card m-3"),o.setAttribute("style","width: 18rem;");const c=document.createElement("img");c.setAttribute("class","card-img-top");const a=document.createElement("div");a.setAttribute("class","card-body");const u=document.createElement("h5");u.setAttribute("class","card-title"),u.textContent=n.title;const d=document.createElement("p");d.setAttribute("class","card-text"),n.multimedia!=null?(c.setAttribute("src",n.multimedia[0].url),d.textContent=n.multimedia[0].caption):(c.setAttribute("src","resources/noimage.jpg"),d.textContent="Article not available"),a.appendChild(u),a.appendChild(d),o.appendChild(c),o.appendChild(a);const s=document.createElement("img");s.src=p(n.uri)?"https:///ebucelik.github.io/newyorktimes-webapp/assets/resources/favorite-filled-72c0af0f.png":"https:///ebucelik.github.io/newyorktimes-webapp/assets/resources/favorite-b48fd479.png",s.setAttribute("width","25px"),s.setAttribute("height","25px"),s.addEventListener("click",()=>h(n,s)),l.appendChild(s),l.appendChild(o),i.appendChild(l),(r+1)%3==0&&(t==null||t.appendChild(i),i=document.createElement("ul"),i.setAttribute("class","list-group list-group-horizontal d-flex justify-content-center")),e.length==r+1&&e.length%3>0&&(t==null||t.appendChild(i))})}function h(t,i){if(p(t.uri)){const r=e.indexOf(t,0);e.splice(r,1)}else e.push(t);localStorage.setItem("topStories",JSON.stringify(e)),i.src=p(t.uri)?"https:///ebucelik.github.io/newyorktimes-webapp/assets/resources/favorite-filled-72c0af0f.png":"https:///ebucelik.github.io/newyorktimes-webapp/assets/resources/favorite-b48fd479.png";const n=document.getElementById("favorites");n!=null&&(n.textContent=e.length>0?"Favorites ("+e.length+")":"Favorites"),g()}function p(t){return e.find(i=>i.uri==t)!=null}g();
