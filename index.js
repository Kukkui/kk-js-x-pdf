const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/login'))
  .post('/auth',function(request,response){
    var username = request.body.username;
    var password = request.body.password;
    if (username && password) {
        response.send("Good");
        // connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
        
        // if(results.length > 0){
        //     //set session here
        //     //session name at the end request.session.xxx ... xxx is session name
        //     request.session.loggedin = true;
        //     request.session.username = username;
        //     response.redirect('/home');
        }else{
            response.send('Incorrect account');
        }

        // response.end();
        });
    }
    else{
        response.send('Please enter Username and Passeord');
        // response.end();
    }
  
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
