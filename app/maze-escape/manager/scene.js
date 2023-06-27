import "./../../../packages/babylonjs/babylon.js";

export default class Scene {
    #maze
    #engine;
    #resizeHandler;

    constructor(maze) {
        this.#maze = maze;
    }

    dispose() {
        this.#maze.shadowRoot.removeEventListener("resize", this.#resizeHandler);
        this.#resizeHandler = null;
        this.#maze = null;
        this.#engine = null;
        this.#engine.dispose();
    }

    load() {
        return new Promise((resolve) => {
            requestAnimationFrame(async () => {
                const canvas = this.#maze.shadowRoot.querySelector("#render-canvas")
                this.#resizeHandler = this.#onResize.bind(this.#maze);
                this.#engine = new BABYLON.Engine(canvas, true);
                this.#maze.shadowRoot.addEventListener("resize", this.#resizeHandler);
                const scene = await this.#onSceneReady(canvas);
                await this.#onRenderLoop(scene);
                resolve();
            });
        });
    }

    async #onSceneReady(canvas) {
        const scene = new BABYLON.Scene(this.#engine);
        const camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);

        camera.setTarget(BABYLON.Vector3.Zero());
        camera.attachControl(canvas, true);


        return scene;
    }

    async #onRenderLoop(scene) {
        this.#engine.runRenderLoop(function () {
            scene.render();
        });
    }

    async #onResize() {
        this.#engine.resize();
    }
}