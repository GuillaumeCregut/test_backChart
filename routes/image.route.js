const router=require('express').Router();
const {datas}=require('../datas');
const {createImage}=require('../utils/generateLine');
const {createPie}=require('../utils/generatePie');
const {getAll}=require('../models/model');

router.get('/bar',async (req,res)=>{
    const img= await createImage();
    console.log(img);
    res.json(datas);
})

router.get('/piedb',async(req,res)=>{
    const result=await getAll(5);
    const labels=result.map((item)=>item.name);
    const values=result.map((item)=>item.count);
    try{
        const img= await createPie(400,400,labels, values,'./example3.png');
        res.json(result);
    }
    catch(err){
        console.log(err);
        res.sendStatus(500);
    }
    console.log(result);
    
})

router.get('/pie',async(req,res)=>{
    const labels=datas.map((data)=>data.name);
    const dataContent=datas.map((data)=>data.value);
   // const datas=[150,300,252,42];
    try{
        const img= await createPie(400,400,labels, dataContent,'./example2.png');
    }
    catch(err){
        console.log(err);
    }

    res.json(datas);
})
module.exports=router;