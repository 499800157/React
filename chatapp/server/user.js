const express = require("express")
const Router = express.Router()
const Utility = require("utility")

const model = require("./model")

const User = model.getModel("user")

// 用户信息
Router.get("/info",function(req , res){
    const { userid } = req.cookies
    if( !userid ){
        return res.json({code : 1})
    }
    User.findOne({"_id" : userid},function (err,doc){
        if(doc){
            return res.json({code : 0 ,data : doc})
        }
        if(err){
            return res.json({code : 1 ,msg : "后端出错了"})
        }
    })
    
})

// 用户列表
Router.get("/list",function(req , res){
    // User.remove({},function(){})
    User.find({},function(err,doc){
        return res.json({code : 0 , data : doc})
    })
})

// 注册
Router.post("/register",function(req, res){
    const {user,pwd,type} = req.body
    User.findOne({user},function(err,doc) {
        if(doc){
            return res.json({code : 1 , msg : "用户名重复！"})
        }
        const userModel = new User({user , type , pwd : md5pwd(pwd) })
        userModel.save(function(e , d){
            if(e){
                return res.json({ code : 1 , msg : "后端出错了！"})
            }
            const {user, type ,_id} = d
            res.cookie("userid" , _id)
            if(d){
                return res.json({code : 0 ,data : d})
            }
        })
    })
})

// 登录
Router.post("/login",function(req, res){
    const {user,pwd} = req.body
    User.findOne({user,pwd : md5pwd(pwd)},function(err,doc) {
        if(!doc){
            return res.json({code : 1 , msg : "用户名或密码错误！"})
        }
        res.cookie("userid",doc._id)
        return res.json({code : 0 ,data : doc})
    })
})


// 更新信息
Router.post("/update",function(req, res){
    const { userid } = req.cookies
    if(! userid){
        return res.json({code : 1})
    }
    const body = req.body
    User.findByIdAndUpdate(userid , body , function(err,doc){
        console.log(doc.avatar)
        const data = Object.assign({},{
            user : doc.user,
            type : doc.type,
        },body)
        return res.json({code : 0,data})
    })

    
})

function md5pwd (pwd){
    const salt = "sfeng@linx-info.com+djhsajkdhsjkandsakjndksa"
    return Utility.md5(Utility.md5(salt+pwd))
}



module.exports = Router