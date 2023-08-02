export default class SpeechRecognition extends crs.classes.BindableElement {
      #speechHandler;
      #functions = {
        "print"
      };

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
         //Todo: Refactor class do it better [memory leak]
         recognition.addEventListener("result", (event) => {
                const transcript = Array.from(event.results).map(result => result[0])
                .map(result => result.transcript);

                const script = transcript[0];

                const data = script.split(" ");

                const fn = data[0];
                console.log(data);

                if (this[fn] != null) {
                    this[fn](data[1]);
                }
         });

         if (speech === true) {
            recognition.start();
         }
      }

      async print(message) {
          console.log(message);
      }

}