const express = require('express'); // This is importing the downloaded express package
const app = express(); // This is the function i am storing inside a variable called as app
const PORT = 3000;



// Article Server

let articles = [
    {
        id: 1,
        title: 'Technology is booming',
        description: 'Technology lorem lorem lorem lorem lorem lorem ',
        author: 'Prabh'
    },
    {
        id: 2,
        title: 'Science is scary',
        description: 'Science lorem lorem lorem lorem lorem lorem ',
        author: 'Daniel'
    },
    {
        id: 3,
        title: 'Maths is boring',
        description: 'Maths lorem lorem lorem lorem lorem lorem ',
        author: 'Mike'
    },
    {
        id: 4,
        title: 'English is a must to know!',
        description: 'English lorem lorem lorem lorem lorem lorem ',
        author: 'David'
    }
]

// GET API ARTICLES

app.get('/', (req, res) => {
    res.send("Welcome to Home Page!");
})

app.get('/flags', (req, res) => {
    res.send(articles);
})


// POST API ARTICLES

app.post('/flags/create', (req, res) => {
    const newFlag = req.body; // So this is the place where some client will send data to be created on the server
    articles.push(newFlag);
    res.send(articles);
})




// DELETE API ARTICLES

app.delete('/flags/delete/:id', (req, res) => {  
    const studentID = req.params.id;

    console.log(flagID);

    // This filter method here filters only those items which are not having an ID similar to StudentID
    articles= articles.filter((student) => flag.id != flagID ? true : false);

    // SPLICE METHOD

    res.send(articles);

})