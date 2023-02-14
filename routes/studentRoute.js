const express = require('express')
const router = express.Router()

var path = require('path')
const multer = require('multer');

const {createStudent} = require('../controller/student')


var storage = multer.diskStorage({
    destination: './public/exceldata' ,
    filename: function (req, file, cb) {
      console.log("this is file: ",file);
    //   console.log("*****",file.originalname);
  
      var ext = path.extname(file.originalname)
      const pdf = 'pdf'
      console.log('ext',ext);
      if(!(ext===pdf)){
        console.log('upload valid document');
      }
      cb(null, file.fieldname + '-' + Date.now()+ext)
    }
  })



  var upload = multer({storage: storage})




router.post('/',upload.single('file'),createStudent)





module.exports = router