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

  module.exports = config;