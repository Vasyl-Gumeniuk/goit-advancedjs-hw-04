import{i as l,S as p}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const g="25798215-b5224b890c985f6c53280bcb2",y="https://pixabay.com/api/?";function b(o){const s=new URLSearchParams({key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${y}${s}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function L(o){return o.map(r=>{const{webformatURL:i,largeImageURL:e,tags:t,likes:a,views:d,comments:f,downloads:h}=r;return`
        <li class="gallery-card">
          <a class="img-link" href="${e}">
            <div class="image-thumb">
              <img class = "gallery-image" src="${i}" data-source=${e} alt="${t}" loading="lazy" />
            </div>
            <div class="info">
              <p class="info-item">
                <b>Likes</b> ${a}
              </p>
              <p class="info-item">
                <b>Views</b> ${d}
              </p>
              <p class="info-item">
                <b>Comments</b> ${f}
              </p>
              <p class="info-item">
                <b>Downloads</b> ${h}
              </p>
          </div>
          </a>
        </li>
      `}).join("")}const n=document.querySelector(".search-form"),m=document.querySelector(".gallery"),u=document.querySelector(".js-loader");let c;const w=()=>{c=new p(".gallery a",{captionsData:"alt",captionDelay:250})},v=()=>{c&&c.refresh()},S=o=>{o.preventDefault();const s=o.target.elements.searchQuery.value.toLowerCase().trim();if(s===""){l.error({message:"The search field should not be empty!",position:"topRight"}),n.reset(),m.innerHTML="";return}u.classList.remove("is-hidden"),b(s).finally(()=>{u.classList.add("is-hidden")}).then(({hits:r})=>{if(r.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),n.reset();return}const i=L(r);m.innerHTML=i,n.reset(),c?v():w()}).catch(r=>console.log(r))};n.addEventListener("submit",S);
//# sourceMappingURL=commonHelpers.js.map
