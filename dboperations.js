var config = require('./dbconfig');
const sql= require('mssql');

async function getECCSchools(){
     try{
        let pool = await sql.connect(config);
        let schools = await pool.request().query("SELECT SchoolGradeLevelAssociationNaturalKey,SchoolYearNaturalKey,EducationOrgNaturalKey,GradeLvlTypeNaturalKey FROM ECC_SHCOOLS");
        return schools.recordsets;
     }
     catch{
       console.log(error)
     }
 }

 async function getECCSchool(id){
   try{
      let pool = await sql.connect(config);
      let schools = await pool.request()
                 .input('input_parameter', sql.NVarChar,id)
                .query(`SELECT SchoolGradeLevelAssociationNaturalKey,SchoolYearNaturalKey,EducationOrgNaturalKey, 
                                               GradeLvlTypeNaturalKey FROM ECC_SHCOOLS WHERE EducationOrgNaturalKey = @input_parameter`);
      return schools.recordsets;
   }
   catch{
     console.log(error)
   }
}

async function addECCSchool(eccschool){
  try {
   let pool = await sql.connect(config);
   let insertSchool = await pool.request()
    .input('SchoolGradeLevelAssociationNaturalKey',sql.NVarChar,eccschool.SchoolGradeLevelAssociationNaturalKey)
    .input('SchoolYearNaturalKey',sql.NVarChar,eccschool.SchoolYearNaturalKey)
    .input('EducationOrgNaturalKey',sql.NVarChar,eccschool.EducationOrgNaturalKey)
    .input('GradeLvlTypeNaturalKey',sql.NVarChar,eccschool.GradeLvlTypeNaturalKey)
    .execute('spInsertECCSchool');

    return insertSchool.recordsets;
  }
  catch(err) {
    console.log(err)
  }
}

 module.exports = {
    getECCSchools: getECCSchools,
    getECCSchool: getECCSchool,
    addECCSchool: addECCSchool
 }
 