const express = require('express');
const router = express.Router();
const sql= require('mssql');

//have to place your custom endpoints above your regular VERB based endpoints

//this is connecting to SQLINT01*******
router.get('/fetchECCSchoolData', async (req, res) => {
        const config = {
            user:'u_DAC',
            password:'iQlK3cSx[9',
            server:'SQLINT01',
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
             req.query("SELECT SchoolGradeLevelAssociationNaturalKey,SchoolYearNaturalKey,EducationOrgNaturalKey,GradeLvlTypeNaturalKey FROM ECC_SHCOOLS")
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
 
 //this is connecting to SQLDEV01 *******
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