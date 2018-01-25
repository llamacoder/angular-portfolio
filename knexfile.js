// Update with your config settings.

//if (process.env.NODE_ENV !== 'test') require('dotenv').load()
module.exports = {
  development: {
    client: 'pg',
    connection: `postgres://localhost:5432/projectdb`
  },
  test: {
    client: 'pg', debug: false,
    connection: `${process.env.DATABASE_URL}/${process.env.DATABASE_NAME}`
  }
};
