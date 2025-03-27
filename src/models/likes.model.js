import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate
 from "mongoose-aggregate-paginate-v2";

 const likesSchema= new mongoose.Schema(
    {
        comment:{
            type:Schema.Types.ObjectId,
            ref:"Comment"
        },
        video:{
            type:Schema.Types.ObjectId,
            ref:"Video"
        },
        likedBy:{
            type:Schema.Types.ObjectId,
            ref:"User"
        },
        tweet:{
            type:Schema.Types.ObjectId,
            ref:"Tweet"
        }
    },
    {timestamps:true}
)

export const Like =mongoose.model("Likes",likesSchema);
