function r(n,o){const e=['const row = document.createElement("div");','row.role = "row";',`row.dataset.id = item["${o??"id"}"];`,"let element;"];for(const t of n)e.push('element = document.createElement("div");'),e.push(`element.textContent = item["${t.property}"];`),e.push('element.role = "cell";'),e.push(`element.dataset.field = "${t.property}";`),e.push("row.appendChild(element);");return e.push("parent.appendChild(row);"),e.push("return row;"),new crs.classes.AsyncFunction("item","parent",e.join(`
`))}export{r as rowFactory};
