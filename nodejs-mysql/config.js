const env = process.env;

const config = {
  db: { /* do not put password or any sensitive info here, done only for demo */
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'register',
    waitForConnections: true,
    connectionLimit: env.DB_CONN_LIMIT || 2,
    queueLimit: 0,
    debug: env.DB_DEBUG || false
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};
  
module.exports = config;