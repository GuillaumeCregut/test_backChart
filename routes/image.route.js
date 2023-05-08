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
    const labels=['essai 1','essai 2', 'essai 3'];
    const datas=[150,300,252];
    try{
        const img= await createPie(400,400,labels, datas,'./example2.png');
    }
    catch(err){
        console.log(err);
    }

    res.json(datas);
})
module.exports=router;