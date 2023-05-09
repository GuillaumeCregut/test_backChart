const {dbquery}=require('../utils/dbutils');
const getAll= async(id)=>{
    const dbResult=await dbquery('get', 'SELECT count(*) as count, categoryName as name FROM all_info_model WHERE owner=? GROUP BY categoryName;',[id]);
    return dbResult;
}

module.exports={
    getAll,
}