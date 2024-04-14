function printHello() {console.log("Hello")}
function blockFor1Sec(){
  let arr = []
  for (let i = 0; i < 1000; i++) {
    arr.push(i);
  }}

setTimeout(printHello, 0)

blockFor1Sec()
console.log("Me First");
