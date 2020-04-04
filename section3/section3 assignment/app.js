/*
Assignment spin up a server on port 3000
Handle two routes, one to '/' and one to '/users'
return a dummy list of users in a list

Add a form with a "username" <input> to the "/" page
and submit a POST request to "/create-user" upon a button click

Add the "/create-user" route and parse the incoming data and simply log to console.

Some slight errors probable, I did try to go a bit above and beyond on this assignment.

*/


const http = require('http');
const fs = require(`fs`);


const server = http.createServer((req,res) =>
{
    const url = req.url;
    const method = req.method;
    console.log(url);
    console.log(method);


    if(url === '/'){
        res.write(`<html>`);
        res.write(`<head><title>Assignment</title></head>`);
        res.write(`<body><form action="/create-user" method="POST"><input type="text" name= "user"><button type= "submit">Create User!</button></form></body>`);
        res.write(`</html>`);
        return res.end();
    }
    if(url === '/users'){
        const newUsers =+ `<ul><li>${message[counter]}</li></ul>`;
        res.write(`<html>`);
        res.write(`<head><title>Assignment</title></head>`);
        res.write(`<body>
        <ul><li>Seth</li></ul>
        <ul><li>Robert</li></ul>
        <ul><li>Richie</li></ul>
        <ul><li>Carlos</li></ul>
        <ul><li>Joseph</li></ul>
        <ul><li>Elo</li></ul>
        <ul><li>Richard</li></ul>`);
        res.write(newUsers);
        res.write(`</body>`);
        res.write(`</html>`);
        return res.end();
    }
    if(url === '/create-user' && method === 'POST'){
        const body = [];

        req.on('data', (chunk) => {body.push(chunk);});
        
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            message.push(((parsedBody.split('=')[1] !== '') ? parsedBody.split('=')[1] + '\n' : '' ));
            console.log(message[counter]);
            res.statusCode = 302;
            res.setHeader('Location', '/users');
            return res.end();
        })
    }
    res.setHeader(`Content-Type`, `text/html`);
    res.write(`<html>`);
    res.write(`<head><title>My first page</title></head>`);
    res.write(`<body><h1>Hello World</h1></body>`);
    res.write(`</html>`);
    res.end();
});

server.listen(3000);