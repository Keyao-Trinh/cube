// import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>

document.getElementById("graph");

const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const d = document.getElementById("d");

function solve(a,b,c,d) {


let text;
if(isNaN(a)||isNaN(b)||isNaN(c)||isNaN(d)){
text = "stop";
}else{
  text = "s";
} document.getElementById("test").innerHTML = text;






  
let p = ((3*a*c)-(b*b))/(3*a*a);
}

// const x = document.forms["theform"][a].vaule;
// if(x==""){
// alert("stop");
//   document.innerHTML = "null";
// }