(function(){var b=document.getElementById('navbtn'),m=document.getElementById('mobnav');if(!b||!m)return;
b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
var mq=window.matchMedia('(max-width: 900px)');function r(e){if(!e.matches){m.classList.remove('open');b.setAttribute('aria-expanded','false');}}
if(mq.addEventListener){mq.addEventListener('change',r);}else{mq.addListener(r);}})();
