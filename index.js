// Import stylesheets
import './style.css';

// var x = new Promise((resolve, reject) => {
//   console.log("hello")

//   setTimeout(()=>resolve(),4000);
// });
// x.then((x) => console.log('result')).finally(() => console.log('final'));
// console.log("hi");

function decoration() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('----------');
      resolve();
      console.log('----------');
    }, 5000);
  });
}
function time() {
  decoration().then(() => {
    console.log('time error');
  });
  decoration().then(() => {
    console.log('time error');
  });
}
time();