module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/wagon'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

}
