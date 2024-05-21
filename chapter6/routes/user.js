import express from 'express';
import routes from 'express.Router()';

// GET /user 라우터
router.get('/', (req, res) => {
    res.send('Hello, User');
});

module.exports = routes;