import{markSelected as n,markAllSelected as l}from"./selection.js";async function s(e){e._clickHandler=a.bind(e),e.addEventListener("click",e._clickHandler)}async function o(e){e.removeEventListener("click",e._clickHandler),e._clickHandler=null}async function a(e){e.preventDefault();const t=e.composedPath()[0];if(t.dataset.field=="_selected")return await n(this,t);if(t.classList.contains("selection")){const c=t.textContent=="check";return await l(this,!c),t.textContent=c?"uncheck":"check"}}export{o as disableInput,s as enableInput};
