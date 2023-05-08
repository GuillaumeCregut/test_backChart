const router=require('express').Router();
const {datas}=require('../datas');
router.get('/',(req,res)=>{
    res.json(datas);
})

module.exports=router;