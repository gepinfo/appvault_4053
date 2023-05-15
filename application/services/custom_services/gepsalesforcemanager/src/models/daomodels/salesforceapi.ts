
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const salesforceapiSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   salesforcelist: { type: String }
})

const salesforceapiModel = mongoose.model('salesforceapi', salesforceapiSchema, 'salesforceapi');
export default salesforceapiModel;
