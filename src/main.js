let express = require("express");
require('dotenv').config();

let app = express();

const port = process.env.PORT || 4500;

app.use(express.json());

let messageRoutes = require('./routes/messageRoutes');
let authRoutes = require('./routes/authRoutes');

app.use('/', messageRoutes);
app.use('/', authRoutes)

app.listen(port, () => {
    console.log(`Web server listening on port ${port}`)
})