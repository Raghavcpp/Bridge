const Users = require('../models/userModel')
const Problems = require('../models/problemModel')
const Reviews = require('../models/reviewModel')

const adminCtrl = {
     getResult : async (req,res) =>{
      
         const result = await Reviews.aggregate([
            {
                $lookup:{
                    from: "users",      
                    localField: "problem_by",   
                    foreignField: "_id",
                    as: "user_info"         
                }
            },
            {   $unwind:"$user_info" },
            {
                $lookup:{
                    from: "users",    
                    localField: "review_by",   
                    foreignField: "_id", 
                    as: "reviewer_info"         
                }
            },
            {   $unwind:'$reviewer_info' },
              {
                $lookup:{
                    from: "problems",       
                    localField: "problem",   
                    foreignField: "_id", 
                    as: "problem_info"        
                }
            },
            {   $unwind:"$problem_info" },
              { 
                    $group:{
                        
                            _id:{problem_by:'$problem_by',problem:'$problem',name:'$user_info.name',problem_name:'$problem_info.name'},
                            
                            reviews:{$push:{reviewer_id:'$review_by',reviewer_name:'$reviewer_info.email',answer:'$question',comment:'$comment',status:'$status'}}
                        
                    },
                    
                },
                {
                $group:{
                      _id:{user:"$_id.problem_by",name:'$_id.name'},
                      
                      problems:{$push:'$$ROOT'}
                      }
                   },
                  
                {"$sort": {"_id": 1}}
            ]);
        //  console.log(result)
         res.json(result);
     }

}

module.exports = adminCtrl;