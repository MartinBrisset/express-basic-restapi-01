const { Router } = require('express');

const router = new Router();

router.get('/test', (req, res) => {
    const data = {
        name: 'Martin',
        website: 'martinbrisset.com'
    };
    res.json(data);
});  

module.exports = router;
