var fs = require('fs')
var parseJSON = require('json-parse-async')

let identifier = document.getElementById('userIdentifier')
let token = document.getElementById('authentication-token')
let submit = document.getElementById('submit')

submit.addEventListener('click', () => {
    if (token.value != "" && identifier.value != "") {
        fs.readFile(__dirname +'/../package.json', "utf-8", (err, data) => {
            if (err) throw err
            parseJSON(data).then(obj => {
                obj.users[identifier.value] = token.value
                fs.writeFile(__dirname +'/../package.json', JSON.stringify(obj, null, 4), 'utf-8', (err) => {
                    if (err) throw err
                    console.log("Successfully added user")
                    //close popup
                })
            }).catch(err => console.log(err))
        })
    } else {
        // error
    }
})

//package.json - src
//                  /js
//                      /authenticate.js