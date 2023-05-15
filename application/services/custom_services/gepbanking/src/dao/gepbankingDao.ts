import * as mongoose from 'mongoose';
import gepbankingModel from '../models/daomodels/gepbanking';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'


export class gepbankingDao {
    private gepbanking = gepbankingModel;
    constructor() { }
    
    public async GpDelete(gepbankingId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into gepbankingDao.ts: GpDelete');

    

    
    
    
    this.gepbanking.findByIdAndRemove(gepbankingId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from gepbankingDao.ts: GpDelete');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(gepbankingData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into gepbankingDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(gepbankingData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.gepbanking.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from gepbankingDao.ts: GpSearch');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(gepbankingData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into gepbankingDao.ts: GpSearchForUpdate');

    

    
    
    
    this.gepbanking.findOneAndUpdate({ _id: gepbankingData._id }, gepbankingData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from gepbankingDao.ts: GpSearchForUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(gepbankingData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into gepbankingDao.ts: GpUpdate');

    

    
    
    
    this.gepbanking.findOneAndUpdate({ _id: gepbankingData._id }, gepbankingData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from gepbankingDao.ts: GpUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetEntityById(gepbankingId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into gepbankingDao.ts: GpGetEntityById');

    

    
    
    
    this.gepbanking.findById(gepbankingId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from gepbankingDao.ts: GpGetEntityById');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into gepbankingDao.ts: GpGetAllValues');

    

    
    
    
    this.gepbanking.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from gepbankingDao.ts: GpGetAllValues');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(gepbankingData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into gepbankingDao.ts: GpCreate');

    let temp = new gepbankingModel(gepbankingData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from gepbankingDao.ts: GpCreate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchRelationship(gepbankingData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into gepbankingDao.ts: GpSearchRelationship');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(gepbankingData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.gepbanking.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from gepbankingDao.ts: GpSearchRelationship');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(gepbankingData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into gepbankingDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.gepbanking.aggregate(([
                        { $match: { $and: [{ created_by: gepbankingData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from gepbankingDao.ts: GpGetNounCreatedBy');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}


}