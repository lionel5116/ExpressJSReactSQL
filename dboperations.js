var config = require('./dbconfig');
var dbconfigSandBox = require('./dbconfigSandBox');
const sql = require('mssql');
var mysql = require('mysql2');

async function getECCSchools() {
  try {
    let pool = await sql.connect(config);
    let schools = await pool.request().query("SELECT SchoolGradeLevelAssociationNaturalKey,SchoolYearNaturalKey,EducationOrgNaturalKey,GradeLvlTypeNaturalKey FROM ECC_SHCOOLS");
    return schools.recordsets;
  }
  catch (error){
    console.log(error)
  }
}

async function getHelloWorld() {
  try {
    let myReturnValue = 'Hello World';
    return myReturnValue;
  }
  catch (error){
    console.log(error)
  }
}

async function getSandboxTestSQL() {
  try {
    let pool = await sql.connect(dbconfigSandBox);
    let schools = await pool.request().query("SELECT CandidateTypeID,Description,UpdatedDate FROM CandidateType");
    return schools.recordsets;
  }
  catch (error) {
    console.log(error)
  }
}

async function getECCSchoolsMYSQL() {
    const pool = mysql.createPool({
      host: 'localhost',
      user: 'root',
      password: '5116',
      database: 'sp_dac'
    }).promise();

    try {
      const result = await pool.query("SELECT SchoolGradeLevelAssociationNaturalKey,SchoolYearNaturalKey,EducationOrgNaturalKey,GradeLvlTypeNaturalKey FROM ECC_SHCOOLS")
      const rows = result[0];
      return rows;
    }
    catch {
      console.log(error)
    }


}

async function getECCSchool(id) {
  try {
    let pool = await sql.connect(config);
    let schools = await pool.request()
      .input('input_parameter', sql.NVarChar, id)
      .query(`SELECT SchoolGradeLevelAssociationNaturalKey,SchoolYearNaturalKey,EducationOrgNaturalKey, 
                                               GradeLvlTypeNaturalKey FROM ECC_SHCOOLS WHERE EducationOrgNaturalKey = @input_parameter`);
    return schools.recordsets;
  }
  catch {
    console.log(error)
  }
}

async function addECCSchool(eccschool) {
  try {
    let pool = await sql.connect(config);
    let insertSchool = await pool.request()
      .input('SchoolGradeLevelAssociationNaturalKey', sql.NVarChar, eccschool.SchoolGradeLevelAssociationNaturalKey)
      .input('SchoolYearNaturalKey', sql.NVarChar, eccschool.SchoolYearNaturalKey)
      .input('EducationOrgNaturalKey', sql.NVarChar, eccschool.EducationOrgNaturalKey)
      .input('GradeLvlTypeNaturalKey', sql.NVarChar, eccschool.GradeLvlTypeNaturalKey)
      .execute('spInsertECCSchool');

    return insertSchool.recordsets;
  }
  catch (err) {
    console.log(err)
  }
}

module.exports = {
  getECCSchools: getECCSchools,
  getECCSchool: getECCSchool,
  addECCSchool: addECCSchool,
  getECCSchoolsMYSQL:getECCSchoolsMYSQL,
  getSandboxTestSQL:getSandboxTestSQL,
  getHelloWorld:getHelloWorld
}
