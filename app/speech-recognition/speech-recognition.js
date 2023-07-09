export default class SpeechRecognition extends crs.classes.BindableElement {
      #speechHandler;

      get html() {
        return import.meta.url.replace(".js", ".html");
      }

      async connectedCallback() {
        await super.connectedCallback();
        await this.load();
      }

      async disconnectedCallback() {
        await super.disconnectedCallback();
      }

      load() {
        return new Promise((resolve) =>{
            requestAnimationFrame(async ()=> {
                await this.#startingSpeechListener();
                resolve();
            });
        });

      }


      async  #startingSpeechListener() {
         const speech = true;
         const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
         const recognition = new SpeechRecognition();

         SpeechRecognition.interimResults = true;

         recognition.addEventListener("result", (event) => {
                const transcript = Array.from(event.results).map(result => result[0])
                .map(result => result.transcript);

                const fn = transcript[0];

                if (this[fn] != null) {
                    this[fn]();
                }
         });

         if (speech === true) {
            recognition.start();
         }
      }

      async print() {
          console.log("hello world");
      }

}