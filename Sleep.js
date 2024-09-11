/*
Explanation:
  The sleep function takes a positive integer millis as input.
  It then creates a Promise that resolves after millis milliseconds using the setTimeout function.
  The Promise is then awaited using the await keyword, 
  which allows the function to pause execution until the Promise is resolved.

If you are not familar with 'await' then you may use 'return' instead like this:
return new Promise(resolve => setTimeout(resolve, millis));

Code:
  // @param {number} millis
  // @return {Promise}

  async function sleep(millis) {    
  }

  // let t = Date.now()
  // sleep(100).then(() => console.log(Date.now() - t)) // 100
*/


// Solution

async function sleep(millis) {
  await new Promise(resolve => setTimeout(resolve, millis));
}

// or

let t = Date.now();

async function sleep(millis) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done");
    }, millis);
  });

  let response = await promise;
}
sleep(100).then(() => console.log(Date.now() - t));