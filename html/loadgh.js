let gscript = await "https://raw.githubusercontent.com/wither7007/htmlTemplate/main/html/events.js";
let mytext
let n = async () => {
    let gscript = await "https://raw.githubusercontent.com/wither7007/htmlTemplate/main/html/events.js";
    let res = await fetch(gscript)
    let j = await res.text()
    let mytext = j
    eval(mytext)
    console.log(j)
}
n()
