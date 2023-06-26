import{DataTableExtensions as h}from"./../data-table-extensions.js";import"./../../../src/actions/virtualization-actions.js";import"./../../../src/actions/collection-selection-actions.js";import"./../../checkbox/checkbox.js";import"./filter-extension/update-filter.js";import{updateFilter as u}from"./filter-extension/update-filter.js";const s="filter-extension";class d{#o;#t;#c;#e;#n;#h=this.#d.bind(this);#i={};#u=this.#f.bind(this);#a=null;#r=null;#l=null;#s=!1;constructor(e,t){this.#o=t,this.#t=e}dispose(e){if(this.#t.removeClickHandler(".filter"),this.#s=null,this.#o=null,this.#r=null,this.#e=null,this.#n=null,this.#u=null,this.#a=null,this.#h=null,this.#i=null,this.#l=null,this.#c&&(this.#c=null),e===!0){const t=this.#t.element.querySelectorAll(".filter");for(const a of t)a.remove()}return this.#t=null,h.FILTER.path}initialize(e){this.#t.addClickHandler(".filter",this.#h.bind(this));for(const t of e.children){if(t.children.length===0){const l=t.textContent,i=document.createElement("div");i.textContent=l,t.textContent="",i.classList.add("flex"),t.appendChild(i)}const a=document.createElement("div");a.classList.add("filter"),a.textContent="filter-outline",t.appendChild(a)}}async#d(e){const t=e.composedPath()[1];this.#e=t.dataset.field,this.#n=t.dataset.type||"string",await this.#m(t)}async#m(e){const t=import.meta.url.replace(".js","/header.html"),a=import.meta.url.replace(".js","/body.html"),l=import.meta.url.replace(".js","/footer.html"),i=import.meta.url.replace(".js","/item-template.html"),r=await crs.call("html","template_from_file",{url:t,has_css:!0}),o=await crs.call("html","template_from_file",{url:a,has_css:!0}),c=await crs.call("html","template_from_file",{url:l});this.#r=await crs.call("html","template_from_file",{url:i}),this.#a=await crs.call("dialog","show",{target:e,position:"bottom",anchor:"left",allow_resize:!1,allow_move:!1,min_height:"400px",min_width:"250px",header:r.content.cloneNode(!0),main:o.content.cloneNode(!0),footer:c.content.cloneNode(!0),callback:this.#u})}async#p(){this.#s===!1&&(this.#i[this.#e]=this.#l),this.#l=null,this.#s=!1}async#f(e){if(e.action==="loaded"){await this.#w();return}if(e.action==="accept"){this.#s=!0,this.#t.dataManager!==this.#t.perspectiveDataManagerKey&&(await crs.call("data_manager","register",{manager:this.#t.perspectiveDataManagerKey,id_field:this.#t.idField,type:"perspective",source_manager:this.#t.dataManager,perspective:this.#t.perspective}),this.#t.oldDataManager=this.#t.dataManager,this.#t.dataManager=this.#t.perspectiveDataManagerKey),await u(this.#t.perspective,this.#e,this.#n,s),await this.#a.close()===!1&&(this.#a=null);return}e.action==="close"&&(await this.#p(),await this.#g()),e.action==="show-hide-selection"&&console.log("show / hide selection")}async#y(e){const t=e.filter(a=>a._selected===!0).length;return await crs.call("data_manager","register",{manager:s,id_field:"id",type:"memory",records:e,selected_count:t})}async#g(){const e=this.#a.querySelector(".layout"),t=this.#a.querySelector("#filter-list");await crs.call("collection_selection","disable",{element:e}),await crs.call("data_manager","dispose",{manager:s}),await crs.call("virtualization","disable",{element:t})}#_(e,t){e.dataset.value=t.value;const a=e.querySelector("check-box");a.checked=t._selected||!1,a.dataset.index=t._index,e.querySelector(".title").textContent=t.value,e.querySelector(".count").textContent=t.count}async#w(){const e=await crs.call("translations","get",{key:"system.loadingMessage"}),t=await this.#a.querySelector("#filter-list");await crs.call("busy_ui","show",{element:t,message:e});let a=this.#i[this.#e];if(a==null){const i=this.#t.dataManager,r=await crs.call("data_manager","get_all",{manager:i}),o=await crs.call("data_processing","unique_values",{source:r,fields:[this.#e]});this.#i[this.#e]=m(o[this.#e]),a=this.#i[this.#e]}this.#l=JSON.parse(JSON.stringify(a)),await this.#y(a),await crs.call("busy_ui","hide",{element:t}),await crs.call("virtualization","enable",{element:t,manager:s,itemSize:32,template:this.#r,inflation:this.#_});const l=this.#a.querySelector(".layout");await crs.call("collection_selection","enable",{element:l,master_query:"#master-checkbox",selection_query:'[role="checkbox"]',virtualized_element:t,manager:s})}}function m(n){const e=[];for(const t of Object.keys(n))e.push({value:t,count:n[t],_selected:!0});return e}export{d as default};
