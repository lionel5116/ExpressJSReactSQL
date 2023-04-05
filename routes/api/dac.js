const express = require('express');
const router = express.Router();
const sql= require('mssql');

var ECCSchool = require('../../models/eccschool');
const dboperations = require('../../dboperations');

//have to place your custom endpoints above your regular VERB based endpoints
router.get('/getECCSchools', async (req, res) => {
   dboperations.getECCSchools().then(result => {
      //console.log(result);
      res.json(result[0]);
  })
});

//getECCSchool
router.get('/getECCSchool/:id', async (req, res) => {
   dboperations.getECCSchool(req.params.id).then(result => {
      //console.log(result);
      res.json(result[0]);
  })
});



 //this is connecting to SQLDEV01 ******* this is also the original way (does not return data properly to parse..!!!!!)
 router.get('/fetchVoteSettings', async (req, res) => {
    const config = {
        user:'u_DAC',
        password:'fbU8sEcTpwlWW5c',
        server:'SQLDEV01',
        port: 1433,
        database:'SP_DAC',
        options: {
          trustedConnection: true,
          encrypt: true,
          enableArithAbort: true,
          trustServerCertificate: true,
        },
      }

      var conn = new sql.ConnectionPool(config);
      conn.connect()
       .then(function() {
         //create connection
         var req = new sql.Request(conn);
         
         //Call mssql's query method passing in params
         req.query("SELECT VotingSettingID,VotingStartDate,IsActive,SchoolYear FROM VotingSetting")
         .then(function (recordset) {
            conn.close()
            return res.status(200).json({data: recordset});
            
         })
         
         //handle SQL Statement erros
         .catch(function (err) {
            console.log(err)
            conn.close();
         })
       })
    
       //Handle connection errors
       .catch(function (err) {
        console.log(err);
        conn.close();
       });
 });
 

router.get('/', async (req, res) => {
   res.send('In DAC PRIMARY ENDPOINT!!!')
});

module.exports = router;