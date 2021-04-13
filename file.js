const path = require('path')
console.log(path)
console.log("__ ____ dirname", __dirname);
const fs = require('fs')
const first = fs.readFileSync('./first.txt', 'utf8')
const second = fs.readFileSync('./second.txt', 'utf8')
// fs.writeFileSync('./third.txt', `here is the Result of first and second ${first} ${second}`)

fs.writeFileSync('./third.txt', `here is the Result of first and second ${first} ${second}`, { flag: 'a' })


fs.readFile('./first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log("error ", err);
    } else if (result) {
        console.log("Rsult", result);
        fs.writeFile('./fourth.txt', `My Content ${result}`, (err, result) => {
            if (err) {
                console.log("error ", err);
            } else if (result) {
                console.log("Final Result", result);
            }
        })
    }
})

console.log(first, second);