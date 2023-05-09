const router=require('express').Router();

router.get('/',async(req,res)=>{
    res.sendStatus(418);
})


module.exports=router;