const mongoose = require("mongoose")

const DB_URL = "mongodb://localhost:27017"
mongoose.connect(DB_URL)

const models = {
    user : {
        "user":{type:String , require :true },
        "pwd":{type:String , require:true },
        "type":{type:String , require:true },
        // 任务名称
        "title" : {type:String},
        //头像
        "avatar":{type:String},
        // 个人简介
        "desc":{type:String},
        
        // tasks:[
            // {
                // 发布者所包含字段
                "company" :{type:String},
                "money" :{type:String},
                // 是否已被接收
                "consummation" : {type:Boolean}
            // }
        // ]
    },
    chat :{

    }
}
function createModel(obj){
    for (let m in obj){
        // if( typeof obj[m]  === "object"){
        //     createModel(obj[m])
        // }
        mongoose.model(m , new mongoose.Schema(obj[m]))
    }
}
createModel(models)

module.exports = {
    getModel : function (name){
        return mongoose.model(name)
    }
}
