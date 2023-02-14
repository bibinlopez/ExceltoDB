const Student = require('../model/student')
var XLSX = require("xlsx");

var path = require('path')

const createStudent = (req, res) => {
    console.log('@@@@@@@',req.file.filename);
    const fileName = req.file.filename

    const filePath = path.join('./public/exceldata',fileName)

    var file = XLSX.readFile(filePath);
    let data = []

    const sheets = file.SheetNames
    for (let i = 0; i < sheets.length; i++) {
        const temp = XLSX.utils.sheet_to_json(
            file.Sheets[sheets[i]])
        // console.log('@@@',temp);
        temp.forEach((res) => {
            data.push(res)
        })
    }
    console.log(data.length);
    if (!(data.length === 0)){
        res.send({success: true, result : {data, nbHits: data.length}})
    }

    if (!(data.length === 0)) {

        for (var x = 0; x < data.length; x++) {
            
            const student = new Student(data[x]);
            student.save()
                .then((result) => {
                    console.log('success');
                })
                .catch((err)=>{
                    console.log('error');
                })

        }

    }
}

module.exports = { createStudent }