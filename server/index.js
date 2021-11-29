const { default: axios } = require('axios');
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;
require('dotenv/config');
let url = 'https://' + process.env.EMAIL + ':' + process.env.PASSWORD + '@' + process.env.SUBDOMAIN + '.zendesk.com/api/v2/tickets/';

app.use(cors());

app.get("/gettickets", (req, res) => {
    axios.get(url).then(response => {
        console.log("Response being sent");
        res.send(response.data);
    }).catch(err => {
        res.status(500);
    })
});

app.listen(PORT, () => {
    console.log("Listening on PORT: ", PORT);
})