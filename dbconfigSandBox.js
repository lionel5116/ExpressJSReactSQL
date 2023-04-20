const config = {
    user:'u_SP_DAC_Dev',
    password:'$Zpassw0rd#',
    server:'SQLNONPSLDB01',
    port: 1433,
    database:'SP_DAC_Dev',
    options: {
      trustedConnection: true,
      encrypt: true,
      enableArithAbort: true,
      trustServerCertificate: true,
    },
  }

  module.exports = config;