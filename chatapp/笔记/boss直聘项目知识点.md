webpack的配置

## 一、装饰器

安装
cnpm install babel-plugin-transform-decorators-legacy --save-dev        //装饰器所需
配置

"babel": {
    "presets": [
        "react-app"
    ],
    "plugins": [
        [
        "transform-decorators-legacy"       //redux支持装饰器的写法     //cnpm install babel-plugin-transform-decorators-legacy --save-dev
        ],
    //如果装饰器这里不能用 使用下面这个
    [
        "@babel/plugin-proposal-decorators",
        {
            "decoratorsBeforeExport": true
        }
        ],
    ]
},
"proxy" :""                   //axios处理跨域  路径写服务端的地址



//mongoose的操作
{
    注册 时不能将cookie的userid存入，需要用到save方法
    const userModel = new User({user ,type ,pwd : md5Pwd(pwd)})
        userModel.save(function(e,d){
            if(e){
                return res.json({code : 1,msg :"后端出错了"})
            }
            const {user ,type ,_id} = d
            res.cookie("userid" , _id)
            if(d){
                return res.json({code : 0 ,data :{user ,type ,_id}})
            }
        })

    axios {
        get的方式通过query获取
        post的方式通过body获取
    }

}


## 二、高阶组件
理解高阶组件
第一步

function hello(){
    console.log( "hello react ")
}
function wrapperHello (fn){
    return function(){
        console.log("before hello")
        fn()
        console.log("after hello")
    }
}
hello = wrapperHello(hello)
这是一个装饰器的模式

通过babel转译 ，其实组件就是一个函数

高阶组件其实就是 给一个组件 返回另外一个组件
定义一个函数，传进来一个组件，返回另外一个组件，包裹这传进来的组件
高阶组件有两种{
    属性代理
    反向继承
}

//属性代理
class Hello extends React.Component {
    render(){
        return <h2>hello react</h2>   
    }
}
function WrapperHello(Comp){
    class WrapComp extends React.Component{
        render(){
            return (
                <div >
                    <p>这是HOC高阶组件特有的元素</p>
                    <Comp {...this.props}></Comp>
                </div>
            )
        }
    }
    return WrapComp
}
Hello = WrapperHello (Hello)

反向继承
class Hello extends React.Component {
    render(){
        return <h2>hello react</h2>   
    }
}
function WrapperHello(Comp){
    class WrapComp extends Comp{
        componentDidMount(){
            console.log("高阶组件新增的生命周期，加载完成！")
        }
        render(){
            return (
                <Comp></Comp>
            )
        }
    }
    return WrapComp
}

## 三、移动端去除300ms延迟
页面的处理 index.html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1,
    minimum-scale=1, user-scalable=no" />

<!-- 解决300毫秒的延迟 -->
<script src="https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js"></script>
<script>
    if ('addEventListener' in document) {
        document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
        }, false);
        }
        if(!window.Promise) {
        document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"'+'>'+'<'+'/'+'script>');
    }
</script>

## 其他
JavaScript强制要求如果要this在构造函数中使用，则必须先调用super
这就是为什么我建议总是传递下来super(props)，即使它不是绝对必要的：



项目采用前后台分离
前台数据展现，使用react全家桶 react + react-router +……

后台项目基于node的 路由用express做的 mongodb数据存储

前后台交互使用 ajax请求 通过axios库  async / await  (es7中)
测试API接口 postman




