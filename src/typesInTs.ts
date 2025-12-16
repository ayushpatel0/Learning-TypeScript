let drink = "chai";

let cups = Math.random() > 0.5 ? 10 : 5;

let chaiFlavor: string = "masala";
chaiFlavor = "ginger";

let isHot: boolean = true;

console.log(
    `I'd like ${cups} cups of ${isHot ? "hot" : "cold"} ${drink} with ${chaiFlavor} flavor.`
);