import Highway from "@dogstudio/highway";
import { TimelineLite } from "gsap";

class Fade extends Highway.Transition {
    // This class takes in two methods

    // This method is responsible for the page that comes inside during the transition
    in({ from, to, done }) {
        const tl = new TimelineLite();
        tl.fromTo(to, 0.5, {
            left: "-100%",
            top: "50%"
        },
            {
                left: "0%"
            }).fromTo(to, 0.5, {
                height: "2vh",
            }, {
                height: "90vh",
                top: "10%",
                onComplete: function () {
                    from.remove();
                    done();
                }
            }
            ).fromTo(to.children[0], 2, {
                opacity: 0
            }, {
                opacity: 1
            })
    }


    // This method is responsible for the page that goes outside during the transition
    out({ from, done }) {
        done();
    }
}


export default Fade;