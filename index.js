const data = require("./content.json")
const fs = require('fs')


const stringparts = data.map((e) => { // iterriert durch die json
    return e.id + ' - ' + e.title + '\n' + e.description + '\n'
})
console.log(stringparts.join('\n'));

const outputString = stringparts.join('\n')

fs.writeFile('randome.txt', outputString, () => {
    console.log('done');
})