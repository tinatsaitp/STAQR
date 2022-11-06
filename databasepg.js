
const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "rootUser",
    database: "staqr"
})

client.connect();

client.query(`SELECT * from test_data`, (err, res)=>{
    if(!err){
        console.log(res.rows);
    } else{
        console.log(err.message);
    }
    client.end;
})

export const users = () => {
    return res.rows;
};

//export default users;