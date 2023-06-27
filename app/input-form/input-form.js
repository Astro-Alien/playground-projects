export default class InputForm extends crs.classes.BindableElement {
    get html() {
        return import.meta.url.replace(".js", ".html");
    }

    get shadowDom() {
        return true;
    }

    async connectedCallback() {
        await super.connectedCallback();
    }

    async disconnectedCallback() {
        await super.disconnectedCallback();
    }

    async preLoad() {
        this.setProperty("firstName", "John");
        this.setProperty("lastName", "Doe");
        this.setProperty("greet", "Hey");
    }

    async greeting() {
        this.setProperty("greet", "Hello There");
    }
}