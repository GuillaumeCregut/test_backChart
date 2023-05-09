const router=require('express').Router();
const image=require('./image.route');
const pdf=require('./pdf.route');

router.use('/images',image);
router.use('/pdf',pdf);

module.exports = router;