
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const entityoneSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: String,
   accountid: Number
})

const entityoneModel = mongoose.model('entityone', entityoneSchema, 'entityone');
export default entityoneModel;
