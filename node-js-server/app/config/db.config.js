module.exports = {
  HOST: 'salasardb1.cl4hxfnr1mxc.us-east-1.rds.amazonaws.com',
  USER: "admin",
  PASSWORD: "admin_123",
  DB: "SalasarDB",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
