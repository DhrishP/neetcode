async function dsafunc() {
  const arr = [1, 2, 5, 6, 6];
  const hash: { [key: number]: number } = {};
  for (let i = 0; i < arr.length; i++) {
    if (!hash[arr[i]]) {
      hash[arr[i]] = arr[i];
      continue
    }
    if (hash[arr[i]]) {
      console.log(`duplicate found ${arr[i]}`);
    }
  }
}

dsafunc();

export {};
