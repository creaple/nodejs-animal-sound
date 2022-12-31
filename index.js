var figlet = require('figlet');

// figlet('Hello World!!', function(err, data) {
//     if (err) {
//         console.log('Something went wrong...');
//         console.dir(err);
//         return;
//     }
//     console.log(data)
// })

function changeText(txt) {
    // figlet(txt, function(err,rs){
    //     if(err){
    //         console.log("error : " + err.message);
    //         return;
    //     }
    //     console.log(rs);
    //     return rs;
    //   })
    return 'aaaa'
}

// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   let changedTxt = async () => await changeText('Hello world');
//   res.send(changedTxt)
// })

// app.listen(3000)

const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
    res.json({'root': 'aaa'})
})
app.get('/dog', (req, res) => {
    res.send('dog')
})
app.get('/cat', (req, res) => {
    res.send('야용')
})

app.get('/user/:id', (req, res) => {
    const p = req.params
    const q = req.query
    res.send(q.name)
})

app.post('/post_test/:id', (req, res) => {
    const p = req.params
    //const body = req.body

    res.send(q);
    //res.send(body);
    res.status(404).send('Sorry, cant find that');
})

//좀더 고도화
app.get('/snd/:name', (req, res) => {
    const {name} = req.params
    console.log(name)
    //res.send(name)
    if(name == "dog"){
        res.json({'sound': '멍멍'})
    }
    else if(name == "cat"){
        res.json({'sound': '야옹'})
    }
    else
    {
        res.json({'sound': '알 수 없음'})
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})