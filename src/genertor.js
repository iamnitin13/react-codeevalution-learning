// play and pause the function execution

function* simpleGenerator() {
  let i = 0;
  while (true) {
    var x = yield ++i; //pause the execution after this line
    console.warn("previous id", x + i);
  }
}

const sg = simpleGenerator(); // return an iterator on which we can iterate using next() method

const showIds = () => {
  document.getElementById("text").innerText = sg.next("id").value; //next() to play the execution
};

// function* sm() {
//   const y = yield "HI";
//   console.log("next", y);
//   yield "hi1";
//   let x = 2;
//   yield x;
//   return "all done";
// }

// const smI = sm();

// console.log(smI.next());
// console.log(smI.next(5));
// console.log(smI.next());
// console.log(smI.next());
