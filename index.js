import{a as n,S as g,i as o}from"./assets/vendor-frHSA4Lh.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const y="https://pixabay.com/api/",h="50348782-72c1d2cf6f33e6e33f09bb691";n.defaults.baseURL=y;n.defaults.params={key:h,image_type:"photo",orientation:"horizontal",safesearch:!0};async function b(t){return(await n.get("",{params:{q:t}})).data.hits}const L=new g(".gallery a",{captionsData:"alt",captionDelay:200});function v(t,r){const a=t.map(({webformatURL:l,largeImageURL:e,type:s,tags:i,likes:d,views:p,comments:m,downloads:f})=>`<li class="gallery-item js-gallery-item">
  <a class="gallery-link js-gallery-link" href="${e}">
    <div class="image-wrapper">
      <img
        class="gallery-image js-gallery-image"
        src="${l}"
        data-source="${s}"
        alt="${i}"
      />
    </div>

  <div>
    <ul class="wrapper-box">
      <li class="list-item">
        <p class="value-title">Likes</p>
        <p class="label" data-likes>${d}</p>
      </li>
      <li class="list-item">
        <p class="value-title">Views</p>
        <p class="label" data-views>${p}</p>
      </li>
      <li class="list-item">
        <p class="value-title">Comments</p>
        <p class="label" data-comments>${m}</p>
      </li>
      <li class="list-item">
        <p class="value-title">Downloads</p>
        <p class="label" data-downloads>${f}</p>
      </li>
    </ul>
  </div>
  </a>
</li>`).join("");r.insertAdjacentHTML("beforeend",a),L.refresh()}function w(t){t.innerHTML=""}function S(t){t.classList.remove("is-hidden")}function $(t){t.classList.add("is-hidden")}const q=document.querySelector(".form"),c=document.querySelector(".gallery"),u=document.querySelector(".loader");q.addEventListener("submit",async t=>{t.preventDefault();const r=t.currentTarget.elements["search-text"].value.trim();if(!r){o.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}w(c),S(u);try{const a=await b(r);a.length===0?o.error({title:"No Results",message:"No images found. Try a different search.",position:"topRight"}):v(a,c)}catch(a){o.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(a)}finally{$(u)}});
//# sourceMappingURL=index.js.map
