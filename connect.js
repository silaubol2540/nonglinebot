// var sqlite3 = require ("sqlite3").verbose();
// var db = new sqlite3.Database("./demo1.sqlite", err =>{
//   console.log(err);
// })
// db.all("INSERT INTO  question(question) VALUES(?)", ["aaCAkE"], (err) =>{
//  if(err) console.dir(err.message);

// });
// db.all("SELECT * FROM question", [], (err,row) =>{
//   // console.dir(row);
//   row.map((item)=>{console.dir(item)}) 
// });

const { Client } = require('pg');

const client = new Client({
  connectionString:'postgres://sbmldqvtexwoot:5742e407281d7e10a405dfe179e93de2eb50acb56c12272b0683d9094396b51c@ec2-174-129-231-25.compute-1.amazonaws.com:5432/ddeqgt03njb2o4',
  ssl: true,
});


const  CTB = 'CREATE TABLE question(id SERIAL PRIMARY KEY,question VARCHAR NOT NULL);'
 const IDB = "INSERT INTO question (name) VALUES ($1)"
 
// // client.query(CTB,(err, res) => {
// //   if (err) throw err;
// //   for (let row of res.rows) {
// //     console.log(JSON.stringify(row));
// //   }
// //   client.end();
// // });
 
// let createData=()=>{
//     client.connect();
//     client.query(CTB,(err, res) => {
//         if (err) throw err;
//         for (let row of res.rows) {
//           console.log(JSON.stringify(row));
//         }
//         client.end();
//       });
// }

// let addData=(params)=>{
//     client.connect();
//     client.query(IDB,[params],(err, res) => {
//         if (err) throw err;
//         for (let row of res.rows) {
//           console.log(JSON.stringify(row));
//         }
//         client.end();
//       });
// }
// let  getData=()=>{
//     client.connect();
//     let result = []
//      client.query(SDB,(err, res) => {
//         result.push(res.rows)
//         if (err) throw err;
//         for (let row of res.rows) {
            
//           console.log(JSON.stringify(row));
//         }
       
//         console.log(`this is = ${result}`);
//       });
//       client.end();
    
     
//       return result
    
      
// }
// createData()
// module.exports= {
//     clientDB:client
// }