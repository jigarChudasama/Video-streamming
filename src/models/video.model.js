import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
import mongooseAggregatePaginat from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        videoFile  : {
            type : String,
            required : true,
        },
        thumbnail :{
            type : String,
            required : true
        },
        owner :{
            type : Schema.Types.ObjectId,
            ref : 'User',
        },
        title : {
            type : String,
            required : true,
        },
        description :{
            type : String,
            required : true
        },
        duration :{
            type : Number,
            required  : true
        },
        view : {
            type : Number,
            required : true,
            default : 0 
        },
        isPublished : {
            type : Boolean,
            required : true,
            default : true
        }
    },
    {
        timestamps: true
    }
)

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video" , videoSchema)