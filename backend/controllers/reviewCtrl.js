const Users = require('../models/userModel')
const Problems = require('../models/problemModel')
const Reviews = require('../models/reviewModel')



const reviewCtrl = {

    getReviews: async (req,res) =>{
       try{
        //    console.log(req.user.id)
           const allReviews = await Reviews.find({review_by:req.user.id}).populate('problem',{'name':1,'description':1,'tag_one':1,'tag_two':1}).populate('problem_by').select(['-password','-email','-avatar']).select(['-comment','-question','-review_by']);
           for(var i = 0 ; i < allReviews.length ; i++){
                    allReviews[i].problem_by.password = null;
                    allReviews[i].problem_by.email = null;
           }
           res.status(200).json(allReviews);
       }
       catch(err){
      
           return res.status(500).json({message:"Some error occured  !! 3 "});
       }   
         
    },
    getReview: async (req,res) =>{
       try{
        const review = await Reviews.find({review_by:req.user.id,_id:req.params.reviewId}).populate('problem').populate('problem_by').select(['-password','-email','-avatar']);
       
        review[0].problem_by.password = null;
        review[0].problem_by.email = null;
        res.status(200).json(review);
       }
       catch(err){
            // console.log(err)
           return res.status(500).json({message:"Some error occured !! 2"});
       }
       
    },
    editReview: async (req,res) =>{
       try{
             const { question , comment , status } = req.body;
             const reviewUpdate = {
                 question:question,
                 comment:comment,
                 status:status || 0,
             }
             const result = await Reviews.findOneAndUpdate({review_by:req.user.id,_id:req.params.reviewId},reviewUpdate,{new:true}).populate('problem').populate('problem_by').select(['-password','-email','-avatar']);;
             for(var i = 0 ; i < result.length ; i++){
                result[i].problem_by.password = null;
                result[i].problem_by.email = null;
             }
             res.status(200).json(result); 
       }
       catch(err){
           return res.status(500).json({message:err});
       }   
            
    },
}

module.exports = reviewCtrl;