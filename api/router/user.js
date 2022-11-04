const router = require('express').Router();
const user = require('../controller/user.controller');

router.get('/', user.get);
router.post('/', user.post);
router.put('/', user.put);
router.delete('/', user.del);

module.exports = router;