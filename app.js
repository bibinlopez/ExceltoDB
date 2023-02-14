require('./db/connect')

const express = require('express');
const app = express()
const studentRoute = require('./routes/studentRoute')
var bodyParser = require('body-parser')
app.use(bodyParser.json())
const notFound = require('./middleware/notFound')


app.use('/',studentRoute)
app.use(notFound)




const port = 5000
app.listen(port,console.log(`listening on the port ${port}....`))








// var XLSX = require("xlsx");

// var file = XLSX.readFile('./data/data.xlsx');

// let data = []
  
// const sheets = file.SheetNames
// //   console.log(file.SheetNames);
// //   console.log('file.sheets',file);
// //   console.log("%%%%",file.Sheets[file.SheetNames[1]]);
// //   console.log('^^^^^',file.SheetNames[0]);
// for(let i = 0; i < sheets.length; i++)
// {
//    const temp = XLSX.utils.sheet_to_json(
//         file.Sheets['Sheet1'])
//         // console.log('@@@',temp);
//    temp.forEach((res) => {
//       data.push(res)
//    })
// }
  
// // Printing data
// console.log(data)