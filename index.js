let value = new Array(10000).fill("Mohan")

const loopFunction = (arr) => {
  let t1 = performance.now()
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
  let t2 = performance.now()
  console.log(t2-t1);
};

loopFunction(value)


function mohan() {
  console.log("Mohan");

}

mohan()

