const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

const loginRouter = require('./routes/login');
const accountsRouter = require('./routes/accounts');
/*const createRouter = require('./routes/create');
const guestbookRouter = require('./routes/guestbook');*/
const app = express();

app.use(express.static('view'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors());

//Endpoints
app.use('/api/auth', loginRouter);
app.use('/api/accounts', accountsRouter);
/*app.use('/api/create', createRouter);
app.use('/api/guestbook', guestbookRouter);*/

app.listen(8000, () => {
    console.log('Server is running on port 8000');
})