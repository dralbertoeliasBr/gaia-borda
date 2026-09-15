// ==UserScript==
// @name         GAIA Bolinha (userscript)
// @namespace    https://github.com/dralbertoeliasBr/gaia-borda
// @version      0.1
// @description  Injeta a bolinha GAIA em páginas (protótipo)
// @author       Antonio Alberto Lopes Elias
// @match        *://*/*
// @grant        none
// ==/UserScript==
(function(){
  'use strict';
  try{
    const url = 'https://dralbertoeliasBr.github.io/gaia-borda/BOLINHA.html';
    if(!document.getElementById('gaia-bubble-loader')){
      const iframe = document.createElement('iframe');
      iframe.id = 'gaia-bubble-loader';
      iframe.src = url;
      iframe.style.position='fixed';iframe.style.right='0';iframe.style.bottom='0';iframe.style.width='360px';iframe.style.height='480px';iframe.style.border='none';iframe.style.zIndex='999999';iframe.style.display='none';
      document.body.appendChild(iframe);
      // small toggle via keyboard for dev
      window.addEventListener('keydown',e=>{if(e.key==='g' && e.altKey){iframe.style.display = iframe.style.display==='none'?'block':'none'}});
    }
  }catch(e){console.error('GAIA userscript error',e)}
})();