const p1 = new Promise((resolve, reject) => {
  console.log("resolve", resolve);
  console.log("reject", reject);

  const arr = [1, 2, 3, 4, 5, 6];

  let isExit = arr.includes(5);

  if (isExit) {
    resolve("5 is Available");
  } else {
    reject("5 is no");
  }
  console.log(" isExit:", isExit);
});

p1.then((res) => {
  console.log("resolve", res);
  console.log("-----------log-002---------");
}).then.catch((err) => {
  console.log("error", err);
});
