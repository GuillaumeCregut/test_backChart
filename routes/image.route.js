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
    const labels=datas.map((data)=>data.name);
    const dataContent=datas.map((data)=>data.value);
   // const datas=[150,300,252,42];
    try{
        const img= await createPie(400,400,labels, dataContent,'./example3.png');
    }
    catch(err){
        console.log(err);
    }

    res.json(datas);
})
module.exports=router;