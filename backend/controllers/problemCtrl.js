const Users = require('../models/userModel')
const Problems = require('../models/problemModel')

const problemCtrl = {

    addProblem: async (req, res) => {
        try {
            //   console.log(req.user.id);
            const { name, description ,tag_one , tag_two } = req.body;
            const problem = new Problems({
                name: name,
                description: description,
                problem_by: req.user.id,
                tag_one:tag_one,
                tag_two:tag_two,
            });
            const result = await problem.save();
            res.status(200).json({ result: result });
        }
        catch (err) {
            res.status(500).send({ message: err.message });
        }

    },
    getAllProblems: async (req, res) => {
        try {
            const id = req.user.id;
            const result = await Problems.find({ problem_by: id });
            res.status(200).json({ result: result });
        }
        catch (err) {
            res.status(500).send({ message: err.message });
        }
    },

    getProblem: async (req, res) => {
        try {
            const problemId = req.params.problemId;
            const result = await Problems.find({ problem_by: req.user.id, _id: problemId });
            res.status(200).json(result);
        }
        catch (err) {
            res.status(500).send({ message: err.message });
        }
    },
    editproblem: async (req, res) => {
        try {
            const { name, description , tag_one , tag_two} = req.body;
          
            const result = await Problems.findOneAndUpdate({ problem_by: req.user.id, _id: req.params.problemId }, { name: name, description: description , tag_one: tag_one, tag_two: tag_two}, { new: true });
            // console.log(result)
            res.status(200).json({ result: result });
        }
        catch (err) {
            res.status(500).send({ message: err.message });
        }
    },
    submitproblem: async (req, res) => {
        try {
         
            const problemStatus = await Problems.find({ problem_by: req.user.id, _id: problemId });
            if(problemStatus.submitted === 1){
               
                res.json({result:"Already submitted for review"})
                return
            }
            const result = await Problems.findOneAndUpdate({ problem_by: req.user.id, _id: req.params.problemId }, { submitted:1}, { new: true });
         
            const reviewers = await Users.find({role:2});
            const jsons = []
            const temp =  reviewers.sort(() => Math.random() - 0.5);  
            for(var i=0;i<2;i++){
                    let  rev = {}
                    rev.problem_by = problem.problem_by;
                    rev.review_by  = temp[i]._id;
                    rev.problem    = problem._id;
                    jsons.push(rev)
               }
            const submitReview = await Reviews.insertMany(jsons);
            cosole.log(submitReview)
            res.status(200).json({ result: "Submitted for review" });
        }
        catch (err) {
            res.status(500).send({ message: err.message });
        }
    },
    deleteproblem: async (req, res) => {

        try {

            await Problems.findByIdAndDelete({ problem_by: req.user.id, _id: req.params.problemId })

            res.json({ msg: { _id: req.params.problemId } })

        } catch (err) {

            return res.status(500).json({ msg: err.message })
        }
    },


}

module.exports = problemCtrl;