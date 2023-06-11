console.log("content script is running ....");

function sleep(timeMs: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeMs);
  });
}

async function run() {
  console.log("before sleep");
  await sleep(1000);
  console.log("after sleep");
}

run();
