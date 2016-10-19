var mongoose = require('mongoose');
var db = mongoose.connect("mongodb://localhost/data_name1")
	db.connection.on('error',function(error){console.log('数据库链接失败')})
	db.connection.on('open',function(){console.log('数据库链接成功')})

	//定义数据库的 结构
	var PersonSchema = new mongoose.Schema({
		name:{type:String},
		age:{type:Number,default:0},
		time:{type:Date,default:Date.now},
		email:{type:String,default:''}
	})

	// 把结构放在 哪个数据库 上
	var PersonModel = db.model('data_name1',PersonSchema)

	// 写数据 保存到 数据库上
	PersonModel.create({
		name:'zhang1',
		age:30,
		email:'21212@163.com'
	},function(error,doc){
		if(error){
			console.log(error)
		}else{
			console.log(doc)
		}
	})

	// 想全部更新 添加 {multi:true} 全部更新
	PersonModel.update({name:'zhang1'},{$inc:{age:1}},{multi:true},function(error,data){
		if(error){
			console.log(error)
		}else{
			console.log(data)
		}
	})