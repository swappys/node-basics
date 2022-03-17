// const express= require('express')
// const app= express()

// app.get('/', (req,res) => {
// res.send("Hey whats up")
// });

// app.listen(3000);

const fs= require('fs');
const fileName= "target.txt";

const dataHandler = (data) => console.log(data.toString());


const errHandler = (err) =>console.log(err);


fs.readFile(fileName, (err,data) => {
 if(err) errHandler(err);

    dataHandler(data);
});

console.log('Node js async programming');
