const mongoose = require("mongoose")

const problemSchema = new mongoose.Schema({  
    name:{
        type:String,
        required:[true,"Please enter problem name"],
        trim :true

    },
    problem_by:{
        type : mongoose.Schema.Types.ObjectId,
        ref:'Users',
    },
    description:{
        type:String,
        trim:true,
    },
    tag_one:{
        type:String,
        trim:true,
    },
    tag_two:{
        type:String,
        trim:true,
    },
    is_deadline:{
        type:Number,
        default:0
    },
    submitted:{
       type:Number,
       default:0
    },
    likecounter:{
        type:Number,
        default:0
     }
}
,{

    timestamps: true
}
)

module.exports = mongoose.model("Problems", problemSchema)