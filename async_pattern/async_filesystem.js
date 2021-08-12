const { readFile, writeFile } = require('fs')
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}
/*
getText('../event_loop/content/first.txt')
    .then((result) => console.log(result))
    .catch((err) => console.log(err))
*/
const start = async () => {
    try {
        const first = await readFilePromise('./content/first.txt', 'utf8')
        const second = await getText('./content/second.txt')
        await writeFilePromise('./content/write.txt', 'Text 123')
        console.log(first, second)
    } catch {
        console.log(error)
    }


}

start()