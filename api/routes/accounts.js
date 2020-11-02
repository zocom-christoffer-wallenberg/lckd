const { Router } = require('express');
const router = new Router();

const { user } = require('../middleware/auth');
const { addAccountToUser, getAccounts } = require('../models/database-functions');
const { }

router.get('/get', user, async (req, res) => {
    console.log('----------------------');
    console.log('After middleware');
    console.log(req.user);
    let resObj = {
        success: false,
    }

    const accounts = await getAccounts(req.user.email);

    if (accounts) {
        resObj.success = true;
        resObj.accounts = accounts;
        resObj.token = req.token;
    }

    res.send(JSON.stringify(resObj));
});

router.post('/add', user, async (req, res) => {
    let resObj = {
        success: false
    }

    const account = await addAccountToUser(req.body, req.user.email);

    if (account) {
        resObj.success = true;
    }

    res.send(JSON.stringify(resObj));
});

module.exports = router;