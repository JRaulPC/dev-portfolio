import { gsap } from "../node_modules/gsap/dist/gsap";

import { SplitText } from "gsap-trial/SplitText";

gsap.registerPlugin(SplitText);

let mySplitText = new SplitText(".split", { type: "chars" });
