var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123',
  database: 'apna_bhai'
});

router.get('/register', function(req, res) {
  res.render('user_register.ejs');
});

router.post('/submit', function(req, res) {
  const data = req.body;
  let non_query = `insert into users(name,dob,gender,email_id,mobile_no,image,local_address,state,
    city,aadhar_id,password_) values('${data.name}','${data.dob}','${
    data.gender
  }','${data.email_id}','${data.mobile_no}','ghgfv','${data.address}','${
    data.state
  }','${data.city}','${data.aadhar_id}','${data.password}')
    `;
  console.log(non_query);
  pool.query(non_query, function(err, result) {
    if (err) console.log(err);
    res.end();
  });
});

module.exports = router;

// INSERT QUERY  SQL Syntax

// insert into <table_name>([columns]) values()

// table student --> name string , roll_no string

// insert into student('name','roll_no') values('dubey','0901EC161091')

// insert into student values('dubey','0901EC161091')
