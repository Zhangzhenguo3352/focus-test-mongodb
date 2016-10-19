var mongoose = require('mongoose');
//  var db = mongoose.connect("mongodb://user:pass@localhost:port/database")
	var db = mongoose.connect("mongodb://localhost/zhang")
	// 在mac 中 启动数据库 使用命令：mongod --config /usr/local/etc/mongod.conf
	// win 启动数据库用：mongod --dbpath=./data      ，  
	db.connection.on('error',function(error){console.log('数据库链接失败')})

	db.connection.on('open',function(){console.log('数据库链接成功')})

	// 定义 数据库的 结构，
	var PersonSchema = new mongoose.Schema({
		name:{type:String},
		age:{type:Number,default:0},
		time:{type:Date,default:Date.now},
		email:{type:String,default:''}
	})
	//把这个结构 放在 一个数据库上
	var PersonModel = db.model("person",PersonSchema)

	// 向数据库 里写东西
	var PersonEntity = new PersonModel({
		name:'zhangzhenguo',
		age:23,
		email:'1301211@163.com'
	})

	// 调用 save 方法，看写入数据库是否成功
	PersonEntity.save(function(error,doc){
		if(error){
			console.log(error)
		}else{
			//向数据库写 点什么
			//console.log(doc)
		}
	})

	// 取数据库的信息,条件 age:20
	PersonModel.find({age:20},function(err,data){
		if(err){
			console.log(err)
		}else{
			console.log(data)
		}
	})

	// 可以直接保存在 数据库中 有个方法叫 create
	PersonModel.create({
		name:'zhangzhenguo',
		age:23,
		email:'1301211@163.com'
	},function(error,doc){
		if(error){
			console.log(error)
		}else{
			//向数据库写 点什么
			console.log(doc+'121')
		}
	})














