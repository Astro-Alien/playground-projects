import{loadHTML as n}from"./../../../src/load-resources.js";class o extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}async connectedCallback(){this.shadowRoot.innerHTML=await n(import.meta.url),requestAnimationFrame(async()=>{await crs.call("component","notify_ready",{element:this})})}async set_markdown(t,e=null){const a=await crs.call("markdown","to_html",{markdown:t,parameters:e});this.shadowRoot.querySelector("article").innerHTML=a,t.indexOf("&{")!=-1&&await crs.binding.translations.parseElement(this)}}customElements.define("markdown-viewer",o);
