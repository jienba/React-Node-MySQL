const express = require("express")
const app = express()
const mysql = require("mysql")
const cors = require("cors")

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crudReactNode',
    dialect: 'mysql'
});

db.connect(err =>{
    if (err) throw err;
    console.log('connected')
})
const corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions))
app.use(express.json())


app.get('/api/ninjas', (req, res) =>{
    const sqlSelect = 'SELECT * FROM ninja'
    db.query(sqlSelect, (err, result) =>{
        res.send(result)
    })
})

app.post('/api/add', req => {
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const userName = req.body.userName
    const status = req.body.status
    const phone = req.body.phone
    const location = req.body.location
    // const photoProfile = req.body.profile

    const sqlInsert = "INSERT INTO ninja" +
        " (firstName, lastName, userName, status, location, phone, profile_photo_path)" +
        " VALUES(?,?,?,?,?,?,?)";
    db.query(sqlInsert,
        [firstName, lastName, userName, status, location, phone, 'https://play-lh.googleusercontent.com/tWOCFum34rKMnhBEQJLHHjRV6qQdlwDCdn4YIY5Yly9LIcuqdtdiGmeWq7XHnmekEC2z'],
        (err, result) => {console.log(result)}
    );

})

app.listen(3001, () =>{
    console.log('Express work')
})
