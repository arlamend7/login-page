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
    tempoAction : 700,
    metaData:[
        animate(
          "350ms ease-in",
          style({
            transform: "scale(1.1)",
          })
        ),
        animate(
          "350ms ease",
          style({
            transform: "rotateY(90deg) scale(1.2)",
          })
        ),
        animate(
          "100ms",
          style({
            transform: "rotateY(90deg)  scale(1.2)",
          })
        ),
        animate(
          "350ms ease",
          style({
            transform: "rotateY(0deg) scale(1.1)",
          })
        ),
        animate(
          "350ms ease-out",
          style({
            transform: "rotateY(0deg) scale(1)",
          })
        ),
      ]
}) 