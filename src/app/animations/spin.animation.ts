import { animate, AnimationAnimateMetadata, style } from "@angular/animations";

class AnimationCustom {
    metaData: AnimationAnimateMetadata[];
    tempoAction: number;
    constructor(params: Partial<AnimationCustom>) {
        this.metaData = params.metaData;
        this.tempoAction = params.tempoAction;

    }
}
export var spin = new AnimationCustom({
    tempoAction : 1000,
    metaData:[
        animate(
          "500ms ease-in",
          style({
            transform: "scale(1.1)",
          })
        ),
        animate(
          "500ms ease",
          style({
            transform: "rotateY(90deg) scale(1.2)",
          })
        ),
        animate(
          "600ms",
          style({
            transform: "rotateY(90deg)  scale(1.2)",
          })
        ),
        animate(
          "500ms ease",
          style({
            transform: "rotateY(0deg) scale(1.1)",
          })
        ),
        animate(
          "500ms ease-out",
          style({
            transform: "rotateY(0deg) scale(1)",
          })
        ),
      ]
}) 