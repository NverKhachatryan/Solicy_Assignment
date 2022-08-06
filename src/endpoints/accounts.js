const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3030;

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let data = [
    {
        id: 1,
        name: 'Account 1',
        createdOn: '5-8-2021',
        owner: 'User 1',
        updatedOn: '5-8-2021'
    },
    {
        id: 2,
        name: 'Account 2',
        createdOn: '5-8-2021',
        owner: 'User 2',
        updatedOn: '5-8-2021'
    },
    {
        id: 3,
        name: 'Account 3',
        createdOn: '5-8-2021',
        owner: 'User 3',
        updatedOn: '5-8-2021'
    }
];

app.get('/accounts', (req, res) => {
    res.json(data);
});

app.get('/accounts/:id', (req, res) => {
    const id = req.params.id;
    const account = accounts.find(data => data.id === id);
} );

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))
