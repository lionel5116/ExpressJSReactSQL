const config = {
    user:'u_SP_DAC_Int',
    password:'$Zintegration#',
    server:'SQLNONPSLDB01',
    port: 1433,
    database:'SP_DAC_Int',
    options: {
      trustedConnection: true,
      encrypt: true,
      enableArithAbort: true,
      trustServerCertificate: true,
    },
  }

  module.exports = config;