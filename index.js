const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000
var fs= require('fs');
var jsonx = [{"เลขที่บัญชี":"111000001","Account":"-","Parti":"-","ประเภทเลขอ้างอิง":"0","เลขอ้างอิง":"3102002277862","ประเภทบุคคล":"1","รหัสคำนำหน้า":"104","คำนำหน้านาม":"นาง","ชื่อ":"อรนุช","นามสกุล":"อัศวจิรัฐติกรณ์","ชื่อ (EN)":"ORANUCH","นามสกุล (EN)":"ASSAWAJIRATTIKORN","เพศ":"1","ที่อยู่ 1":"1 ซอยประชานิเวศน์ 3 ซอย 25/11 ถนนติวานนท์","ที่อยู่ 2":"ตำบลท่าทราย อำเภอเมืองนนทบุรี","ที่อยู่ 3":"จังหวัดนนทบุรี","รหัสไปรษณีย์":"11000","โทรศัพท์บ้าน":"-","โทรศัพท์ที่ทำงาน":"-","โทรศํพท์มือถือ":"0818125217","โทรสาร":"-","อีเมล์":"-","รหัสประเทศ":"000","สัญชาติ":"000","รหัสอาชีพ":"990","อื่นๆ":"อาชีพอิสระ","วันเกิด":"1964-04-16","เลขประจำตัวผู้เสียภาษี":"3102002277862","การหักภาษี":"Y","ผู้ติดต่อ":"-","ผู้มีอำนาจ":"-","รับผลประโยชน์ ธนาคาร":"004","สาขา":"0012224437","เลขที่บัญชี_1":"-","MKT Code":"093967","MKT Name":"นางสาวรัชญา ธราประไพ","Team Code":"-","Team Name":"-","KYCDate":"2020-07-20","SuitScore":"29","SuitDate":"2020-07-20","HightNetworth":"1","HightNetworthDate":"2020-07-20","FatcaDate":"2020-07-20","US":"0","Active":"1"},{"เลขที่บัญชี":"111000002","Account":"-","Parti":"-","ประเภทเลขอ้างอิง":"0","เลขอ้างอิง":"3100700429551","ประเภทบุคคล":"1","รหัสคำนำหน้า":"103","คำนำหน้านาม":"นาย","ชื่อ":"โสภณ","นามสกุล":"วีระโสภณ","ชื่อ (EN)":"sophon","นามสกุล (EN)":"verasophon","เพศ":"0","ที่อยู่ 1":"108 ซอยหลังสวน ถนนสารสิน","ที่อยู่ 2":"แขวงลุมพินี เขตปทุมวัน","ที่อยู่ 3":"กรุงเทพมหานคร","รหัสไปรษณีย์":"10330","โทรศัพท์บ้าน":"-","โทรศัพท์ที่ทำงาน":"-","โทรศํพท์มือถือ":"086-905-2999","โทรสาร":"-","อีเมล์":"-","รหัสประเทศ":"000","สัญชาติ":"000","รหัสอาชีพ":"990","อื่นๆ":"เกษียณอายุ","วันเกิด":"1933-10-11","เลขประจำตัวผู้เสียภาษี":"3100700429551","การหักภาษี":"Y","ผู้ติดต่อ":"-","ผู้มีอำนาจ":"-","รับผลประโยชน์ ธนาคาร":"004","สาขา":"0822563740","เลขที่บัญชี_1":"-","MKT Code":"093967","MKT Name":"นางสาวรัชญา ธราประไพ","Team Code":"-","Team Name":"-","KYCDate":"2020-07-20","SuitScore":"32","SuitDate":"2020-07-20","HightNetworth":"1","HightNetworthDate":"2020-07-20","FatcaDate":"2020-07-20","US":"0","Active":"1"},{"เลขที่บัญชี":"111000003","Account":"-","Parti":"-","ประเภทเลขอ้างอิง":"0","เลขอ้างอิง":"1609900165635","ประเภทบุคคล":"1","รหัสคำนำหน้า":"105","คำนำหน้านาม":"น.ส.","ชื่อ":"ครองขวัญ","นามสกุล":"ตันตระกูล","ชื่อ (EN)":"krongkwan","นามสกุล (EN)":"tantragul","เพศ":"1","ที่อยู่ 1":"ร้านบ้านนิชา 201/15-17 หมู่ที่ 1 ถนนเทศบาล1","ที่อยู่ 2":"ตำบลบ้านไร่ อำเภอบ้านไร่","ที่อยู่ 3":"จังหวัดอุทัยธานี","รหัสไปรษณีย์":"61140","โทรศัพท์บ้าน":"-","โทรศัพท์ที่ทำงาน":"-","โทรศํพท์มือถือ":"083-331-1200","โทรสาร":"-","อีเมล์":"-","รหัสประเทศ":"000","สัญชาติ":"000","รหัสอาชีพ":"910","อื่นๆ":"ร้านอาหาร","วันเกิด":"1991-01-19","เลขประจำตัวผู้เสียภาษี":"1609900165635","การหักภาษี":"Y","ผู้ติดต่อ":"-","ผู้มีอำนาจ":"-","รับผลประโยชน์ ธนาคาร":"069","สาขา":"2000676128","เลขที่บัญชี_1":"-","MKT Code":"093967","MKT Name":"นางสาวรัชญา ธราประไพ","Team Code":"-","Team Name":"-","KYCDate":"2020-07-20","SuitScore":"32","SuitDate":"2020-07-20","HightNetworth":"1","HightNetworthDate":"2020-07-20","FatcaDate":"2020-07-20","US":"0","Active":"1"}];
// var datajson = JSON.parse('test.json');
var users="";
fs.readFile("test.json", function(err, data) { 
      
  // Check for errors 
  if (err) throw err; 
 
  // Converting to JSON 
  users = JSON.parse(data); 
    
  //console.log(users); // Print users  
}); 
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))


  .use(bodyParser.urlencoded({ extended: false }))
  .set('view engine', 'ejs')
  
  .get('/', (req, res) => res.render('pages/login'))
  .post('/auth',(req, res) => {
    const userx = req.body.username;
    const passx = req.body.password;
      if(userx=='kukkui' && passx=='kukkui'){
        res.render('pages/customerx',{datax:users})
      }
      else{
        res.render('pages/login')
      }
    })
  // {
  //   var username = request.body.username;
  //   var password = request.body.password;
  //   if (username && password) {
  //       response.send("Good");
  //       // connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
        
  //       // if(results.length > 0){
  //       //     //set session here
  //       //     //session name at the end request.session.xxx ... xxx is session name
  //       //     request.session.loggedin = true;
  //       //     request.session.username = username;
  //       //     response.redirect('/home');
  //       }
  //   else{
  //       esponse.send('Incorrect account');
  //       }

  //       // response.end();
  //       // });

  //   // else{
  //       // response.send('Please enter Username and Passeord');
  //       // response.end();
  //   // }
  
  // })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
