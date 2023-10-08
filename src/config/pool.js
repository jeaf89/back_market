const { Pool } = require('pg');

//const connectionString = process.env.CONNECTION_STRING;

const pool = new Pool({
    user: "admin",
    host: "dpg-ckfjocuct0pc73bld730-a.oregon-postgres.render.com    ",
    database: "art_market",
    password: "48sW9XX6lLQrlIOSfw8BT92SwvTG76i1",
    allowExitOnIdle: true
});

/*const pool = new Pool({
    connectionString,
});*/

module.exports = pool;