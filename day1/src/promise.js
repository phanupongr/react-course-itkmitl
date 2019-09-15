const doSomething = new Promise((resolve) => {
  setTimeout(() => {
    resolve(2)
  }, 1000)
})

console.log(1)
doSomething.then((result) => {
  console.log(`Result: ${result}`)
  return 33
}).then((result3) => {
  console.log(result3)
}).catch(err => console.log(err))
