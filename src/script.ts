const form = document.getElementById("form") as HTMLFormElement;
document.getElementById("graph");
form?.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("no refesh :O");
    const formData = new FormData(form);

    const a: number = Number(formData.get("a"));
    const b: number = Number(formData.get("b"));
    const c: number = Number(formData.get("c"));
    const d: number = Number(formData.get("d"));
    let rootthree: number;
    let roottwo: number;
    let rootone: number;
    // function solve(a: number, b: number, c: number, d: number) {
 
    const p = ((3 * a * c) - (b * b)) / (3 * a * a);
    const q = (((27 * a * a * d) - (9 * a * b * c) + (2 * b * b * b)) / (27 * a * a * a));

    // function diqscriminant(p,q,b,a){
    const dis: number = (((q / 2) * (q / 2)) + ((p / 3) * (p / 3) * (p / 3)))
    if (dis === 0) {
        if (p == 0) {
             rootone = (Math.cbrt(((-1 * q) / 2) + (Math.sqrt(((q / 2) * (q / 2)) + ((p / 3) * (p / 3) * (p / 3)))))) + (Math.cbrt(((-1 * q) / 2) - (Math.sqrt(((q / 2) * (q / 2)) + ((p / 3) * (p / 3) * (p / 3)))))) - (b / 3 * a);
roottwo = rootone;
rootthree = rootone;
        } else {
             rootone = (Math.cbrt(((-1 * q) / 2) + (Math.sqrt(((q / 2) * (q / 2)) + ((p / 3) * (p / 3) * (p / 3)))))) + (Math.cbrt(((-1 * q) / 2) - (Math.sqrt(((q / 2) * (q / 2)) + ((p / 3) * (p / 3) * (p / 3)))))) - (b / 3 * a);
             roottwo = ((Math.cbrt(q / 2)) - (b / (3 * a)))
             rootthree = rootone;
        }
        let x = (Math.cbrt(((-1 * q) / 2) + (Math.sqrt(((q / 2) * (q / 2)) + ((p / 3) * (p / 3) * (p / 3)))))) + (Math.cbrt(((-1 * q) / 2) - (Math.sqrt(((q / 2) * (q / 2)) + ((p / 3) * (p / 3) * (p / 3)))))) - (b / 3 * a);
    } else {
        let theta = (1 / 3) * (Math.acos((-1 * q) / 2 * (Math.cbrt(-1 * ((q / 3) * (q / 3) * (q / 3))))));
     rootone = (Math.cbrt(((-1 * q) / 2) + (Math.sqrt(((q / 2) * (q / 2)) + ((p / 3) * (p / 3) * (p / 3)))))) + (Math.cbrt(((-1 * q) / 2) - (Math.sqrt(((q / 2) * (q / 2)) + ((p / 3) * (p / 3) * (p / 3)))))) - (b / 3 * a);
         roottwo = (p * (Math.sqrt((-1 * p) / 3))) * Math.cos(theta);
        rootthree = (p * (Math.sqrt((-1 * p) / 3))) * Math.cos(theta + ((Math.PI * 2) / 3));
        // let rootthr = (p*(Math.sqrt((-1*p)/3)))*Math.cos(theta+((Math.PI*4)/3));
        //cube root unity
    }

    // }
    // }
    (document.getElementById("rootone") as HTMLInputElement).value = 'x=${rootone}';
    (document.getElementById("roottwo") as HTMLInputElement).value = 'x=${roottwo}';
    (document.getElementById("rootthree") as HTMLInputElement).value = 'x=${rootthree}';
    (document.getElementById("p") as HTMLInputElement).value = 'x=${p}';
    (document.getElementById("q") as HTMLInputElement).value = 'x=${q}';
    (document.getElementById("dis") as HTMLInputElement).value = 'x=${dis}';

})




// let text;
// if(isNaN(a)||isNaN(b)||isNaN(c)||isNaN(d)){
// text = "stop";
// }else{
//   text = "s";
// } document.getElementById("test").innerHTML = text;
// let p = ((3*a*c)-(b*b))/(3*a*a);

// }

// const x = document.forms["theform"][a].vaule;
// if(x==""){
// alert("stop");
//   document.innerHTML = "null";
// }