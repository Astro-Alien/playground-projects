export default class SpeechRecognition extends crs.classes.BindableElement {

      get html() {
        return import.meta.url.replace(".js", ".html");
      }

      async connectedCallback() {
        await super.connectedCallback();
        console.log("hello world");
      }

      async disconnectedCallback() {
        await super.disconnectedCallback();
      }

}