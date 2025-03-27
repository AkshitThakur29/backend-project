import mongoose from "mongoose";
import mongooseAggregatePaginate
 from "mongoose-aggregate-paginate-v2";

 const tweetSchema = new mongoose.Schema(
    {
        owner:
        {
            type: Schema.Types.ObjectId,
        },
        content:{
            type:String,
            required:true
        }

    },
    {timestamp:true}
)

 export const Tweet= mongoose.model("Tweet",tweetSchema);