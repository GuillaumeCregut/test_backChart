const router=require('express').Router();
const image=require('./image.route');

router.use('/images',image);

module.exports = router;