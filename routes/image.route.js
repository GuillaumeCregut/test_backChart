const router=require('express').Router();
const {datas}=require('../datas');
const {createImage}=require('../utils/generateLine');
const {createPie}=require('../utils/generatePie');

router.get('/bar',async (req,res)=>{
    const img= await createImage();
    console.log(img);
    res.json(datas);
})

router.get('/pie',async(req,res)=>{
    const img= await createPie();
    console.log(img);
    res.json(datas);
})
module.exports=router;