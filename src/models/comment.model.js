import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
import { User } from "./user.model";

const commentSchema=  new mongoose.Schema(
    {
        content:
        {
            type:String,
            required:true
        },
        video:
        {
            type:Schema.Types.ObjectId,
            ref:"Video"
        },
        owner:
        {
            type:Schema.types.ObjectId,
            ref:"User"

        }

    },
    {timestamps:true}
)

commentSchema.plugin(mongooseAggregatePaginate)
export const Comment=mongoose.model("Comment",commentSchema);