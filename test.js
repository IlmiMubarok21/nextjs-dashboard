(async () => {
  const result = await Promise.race([
    new Promise((res) => {
      setTimeout(() => {
        res('Promise 1 success');
      }, 2000);
    }),
    new Promise((res, rej) => {
      setTimeout(() => {
        rej('Promise 2 error');
      }, 1000);
    }),
  ]);

  console.log(result);
})();
