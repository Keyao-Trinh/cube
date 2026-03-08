const form = document.getElementById("form") as HTMLFormElement;
document.getElementById("graph");
form?.addEventListener("submit", (event) => {
    event.preventDefault();
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
    let pvaule = document.getElementById("p") as HTMLElement;
    pvaule.innerText = String (p);
    let qvaule = document.getElementById("q") as HTMLElement;
           qvaule.innerText = String (q);
    // function diqscriminant(p,q,b,a){
    const dis: number = (((q / 2) * (q / 2)) + ((p / 3) * (p / 3) * (p / 3)));
    let disvaule = document.getElementById("dis") as HTMLElement;
           disvaule.innerText = String (dis);
    if (dis == 0) {
        if (p == 0) {
            rootone = (Math.cbrt(((-1 * q) / 2) + (Math.sqrt(((q / 2) * (q / 2)) + ((p / 3) * (p / 3) * (p / 3)))))) + (Math.cbrt(((-1 * q) / 2) - (Math.sqrt(((q / 2) * (q / 2)) + ((p / 3) * (p / 3) * (p / 3)))))) - (b / 3 * a);
            roottwo = rootone;
            rootthree = rootone;
            let one = document.getElementById("rootone") as HTMLElement;
            one.innerText = String (rootone);
            let two = document.getElementById("roottwo") as HTMLElement;
            two.innerText = String (roottwo);
            let three = document.getElementById("rootthree") as HTMLElement;
            three.innerText = String (rootthree);        
         
            console.log('${p}');
        } else {
            rootone = (Math.cbrt(((-1 * q) / 2) + (Math.sqrt(((q / 2) * (q / 2)) + ((p / 3) * (p / 3) * (p / 3)))))) + (Math.cbrt(((-1 * q) / 2) - (Math.sqrt(((q / 2) * (q / 2)) + ((p / 3) * (p / 3) * (p / 3)))))) - (b / 3 * a);
            roottwo = ((Math.cbrt(q / 2)) - (b / (3 * a)))
            rootthree = rootone;
           let one = document.getElementById("rootone") as HTMLElement;
           one.innerText = String (rootone);
           let two = document.getElementById("roottwo") as HTMLElement;
           two.innerText = String (roottwo);
           let three = document.getElementById("rootthree") as HTMLElement;
           three.innerText = String (rootthree);
            
            console.log("no refesh :O");
        }
        // let x = (Math.cbrt(((-1 * q) / 2) + (Math.sqrt(((q / 2) * (q / 2)) + ((p / 3) * (p / 3) * (p / 3)))))) + (Math.cbrt(((-1 * q) / 2) - (Math.sqrt(((q / 2) * (q / 2)) + ((p / 3) * (p / 3) * (p / 3)))))) - (b / 3 * a);
    } else {
        let theta = (1 / 3) * (Math.acos((-1 * q) / 2 * (Math.cbrt(-1 * ((q / 3) * (q / 3) * (q / 3))))));
        rootone = (Math.cbrt(((-1 * q) / 2) + (Math.sqrt(((q / 2) * (q / 2)) + ((p / 3) * (p / 3) * (p / 3)))))) + (Math.cbrt(((-1 * q) / 2) - (Math.sqrt(((q / 2) * (q / 2)) + ((p / 3) * (p / 3) * (p / 3)))))) - (b / 3 * a);
        roottwo = (2 * (Math.sqrt((-1 * p) / 3))) * Math.cos(theta);
        rootthree = (2 * (Math.sqrt((-1 * p) / 3))) * Math.cos(theta + ((Math.PI * 2) / 3));
        // let rootthr = (p*(Math.sqrt((-1*p)/3)))*Math.cos(theta+((Math.PI*4)/3));
        //cube root unity

        let one = document.getElementById("rootone") as HTMLElement;
        one.innerText = String (rootone);
        let two = document.getElementById("roottwo") as HTMLElement;
        two.innerText = String (roottwo);
        let three = document.getElementById("rootthree") as HTMLElement;
        three.innerText = String (rootthree);
         

        console.log(a);
    }

const graph = document.getElementById("graph") as HTMLCanvasElement;
const ctx = graph.getContext('2d');

if (!ctx) {
  console.error('Canvas context is null. Cannot proceed.');
  return; // googled answer
}

let x1: number;
let x2: number;
let y1: number;
let y2: number;


x1 = ((((-2*b)+(Math.sqrt(((4*b*b)-(12*a*c))))))/6*a);
x2 = ((((-2*b)-(Math.sqrt(((4*b*b)-(12*a*c))))))/6*a);

y1 = (((a*x1*x1*x1)+(b*x1*x1)+(c*x1)+d));
y2 = (((a*x2*x2*x2)+(b*x2*x2)+(c*x2)+d));


ctx.beginPath();
ctx.moveTo(0, 0);
ctx.bezierCurveTo(rootone, 250, x1, y1, roottwo, 250);
ctx.bezierCurveTo(roottwo, 250, x2, y2, rootthree, 250);
ctx.stroke();

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