const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
     res.send('Hello World 22!')
})
const users = [{
          id: 0,
          name: 'nibir',
          email: 'mubtashim@gmail.com'
     },
     {
          id: 1,
          name: 'sakib',
          email: 'mubtashim@gmail.com'
     },
     {
          id: 2,
          name: 'pranto',
          email: 'mubtashim@gmail.com'
     },
     {
          id: 3,
          name: 'yamu',
          email: 'mubtashim@gmail.com'
     },
     {
          id: 4,
          name: 'rasel',
          email: 'mubtashim@gmail.com'
     },
     {
          id: 5,
          name: 'roman',
          email: 'mubtashim@gmail.com'
     },
     {
          id: 6,
          name: 'joky',
          email: 'mubtashim@gmail.com'
     },
     {
          id: 7,
          name: 'utshob',
          email: 'mubtashim@gmail.com'
     }
]
app.get('/users', (req, res) => {
     const search = req.query.search;
     //use query parameters
     if (search) {
          const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
          res.send(searchResult);
     } else {
          res.send(users);
     }
})

// app.METHOD
app.post('/users', (req, res) => {
     const newUser = req.body;
     newUser.id = users.length;
     users.push(newUser)
     console.log('hit here', req.body)
     res.json(newUser);
})

app.get('/users', (req, res) => {
     res.send(
          users
     );
})
app.get('/users/:id', (req, res) => {
     const id = req.params.id;
     const user = users[id];
     res.send(user)
})



app.listen(port, () => {
     console.log('listening to port ', port)
})