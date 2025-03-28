import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const playlistSchema= new mongoose.Schema(
    {
        name:
        {
            type:String,
            required:true
        },
        description:
        {
            type:String,
            required:true
        },
        video:{
            type:Schema.Types.ObjectId,
            ref:"Video"
        },
        owner:{
            type:Schema.Types.ObjectId,
            ref:"user"
        }
    },
    {timestamps:true}
)

const Playlist= mongoose.model("Playlist",playlistSchema);