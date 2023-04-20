const express = require('express');
const router = express.Router();
const sql= require('mssql');

//nodemssqlv8
const sqlv8 = require('msnodesqlv8');

var ECCSchool1 = require('../../models/eccschool1');
const dboperations = require('../../dboperations');

//have to place your custom endpoints above your regular VERB based endpoints
router.get('/getECCSchools', async (req, res) => {
   dboperations.getECCSchools().then(result => {
      res.json(result[0]);
  })
});

router.get('/getSandboxTestSQL', async (req, res) => {
   dboperations.getSandboxTestSQL().then(result => {
      res.json(result[0]);
  })
});

router.get('/getECCSchoolsMSSQLV8', async (req, res) => {
   const connectionString = "server=.;Database=sp_dac;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
    const query ="SELECT SchoolGradeLevelAssociationNaturalKey,SchoolYearNaturalKey,EducationOrgNaturalKey,GradeLvlTypeNaturalKey FROM ECC_SHCOOLS";
    
    sqlv8.query(connectionString,query, (err,rows) => {
      return res.json(rows);
    })
});




router.get('/getECCSchoolsMYSQL', async (req, res) => {
   dboperations.getECCSchoolsMYSQL().then(result => {
      res.json(result);
  })
});


//getECCSchool
router.get('/getECCSchool/:id', async (req, res) => {
   dboperations.getECCSchool(req.params.id).then(result => {
      //console.log(result);
      res.json(result[0]);
  })
});

router.post('/addECCSchool', async (req, res) => {
 let eccschool = {...req.body}
   dboperations.addECCSchool(eccschool).then(result => {
      res.status(201).json(result)
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