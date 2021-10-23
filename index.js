const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors());
app.use(express.json())

const port = 5000;

app.get('/', (req, res) => {
    res.send('hello from second node excited auto changes');
});

const users = [
    { id: 1, name: 'sabana', email: 'sabana@gmail.com', phone: '017999999' },
    { id: 2, name: 'samiya', email: 'samiuya@gmail.com', phone: '017999999' },
    { id: 3, name: 'sabnoor', email: 'sabnoor@gmail.com', phone: '017999999' },
    { id: 4, name: 'soniya', email: 'soniya@gmail.com', phone: '017999999' }
]
//use search query peramiter
app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(searchResult)
    }
    else {
        res.send(users)

    }
})

app.post('/users', (req, res) => {
    const newUser = req.body
    newUser.id = users.length
    users.push(newUser)
    console.log('hitting the post', req.body)
    // res.send(JSIN.stringyfy(newUser))
    res.json(newUser)
})

//dynamic api

app.get('/users/:id', (req, res) => {
    const id = req.params.id
    const user = users[id]
    res.send(user);

});
app.get('/fruits', (req, res) => {
    res.send(['mango,iranges,apple'])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('yummy yummy tok fazli')
})


app.listen(port, () => {
    console.log('listen to port', port)
})