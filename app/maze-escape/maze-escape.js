import Scene from "./manager/scene.js";

export default class MazeEscape extends crs.classes.BindableElement {

    get html() {
        return import.meta.url.replace(".js", ".html");
    }

    get shadowDom() {
        return true;
    }

    async connectedCallback() {
        await super.connectedCallback();
        await this.load();
    }

    load() {
        return new Promise((resolve) => {
            requestAnimationFrame(async () => {
                await new Scene(this).load();
                resolve();
            });
        });
    }
}
