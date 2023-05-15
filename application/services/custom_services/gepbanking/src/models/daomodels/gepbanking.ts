
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const gepbankingSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   username: { type: String }
})

const gepbankingModel = mongoose.model('gepbanking', gepbankingSchema, 'gepbanking');
export default gepbankingModel;
