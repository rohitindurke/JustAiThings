import { Schema, model, models } from "mongoose";

import { ObjectId } from "mongoose";

export interface IImage extends Document {
    title: string;
    TransformationType: string;
    publicId: string;
    secureUrl: string;
    width?: number;
    height?: number;
    config?: object;
    transformationUrl: string;
    aspectRatio?: string;
    color?: string;
    prompt?: string;
    author: {
        _id:string;
        firstName:string;
        lastName:string;

    };
    createdAt?: Date;
    updatedAt?: Date;
}




const ImageSchema = new Schema({
    title:{
        type:String ,
         required:true
        },
    TransformationType:{
        type:String ,
         required:true
        },
    publicId:{
        type:String,
        required:true
    },
    secureUrl:{
        type:String,
        required:true
    },
    width:{
        type:Number,
    },
    height:{
        type:Number
    },
    config:{
        type:Object
    },
    transformationUrl:{
        type:URL,
        required:true
    },
   aspectRatio:{
        type:String
   },
   color:{
    type:String
   },
   prompt:{
    type:String
   },
   author:{
    type:Schema.Types.ObjectId ,ref:'User'
   },
   createdAt:{
    type:Date,
    default:Date.now
   },
   updatedAt:{
    type:Date,
    default:Date.now
   }

});

const Image = models?.Image || model ('Image',ImageSchema);

export default Image;