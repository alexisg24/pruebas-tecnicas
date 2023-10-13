export async function delay (n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    }, n);
  })
}

delay(3000).then(() => console.log('Hola mundo'));
// o..
await delay(3000)
console.log('Hola mundo')