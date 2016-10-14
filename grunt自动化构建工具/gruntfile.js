//使用node的模块导出功能module.exports(),导出grunt模块
module.exports = (grunt)=>{
	
	//对grunt进行初始化配置
	grunt.initConfig({
		
		pkg:grunt.file.readJSON('package.json'),
		
		//初始化一个任务：concat是文件合并的任务
		concat:{
			//给该任务添加配置选项
			options:{
				
				banner:'/*Powered By 智游教育\n*/'
			},
			//添加要构建的文件
			build:{
				//设置要合并的源文件
				//src:["js/Clock.js","js/Control.js","js/CenterPoint.js","js/CirclePoint.js","js/Seconds.js","js/Minutes.js","js/Hours.js"],
				
				//使用通配符
				//src:'js/*.js',
				
				//从package.json中读取
				src:'<%=pkg.jsFiles%>',
				//指定合并后生成的文件
				dest:'js/myClock.js'
				
			}
		},
		
		//添加uglify的任务，即文件压缩的任务
		uglify:{
			
			//设置构建的文件
			build:{
				
				src:'js/myClock.js',
				dest:'js/myClock.min.js'
				
				//设置文件源路径和目的路径
				/*
				files:{
					
					//格式：目的文件:源文件
					'js/myClock.min.js':'js/myClock.js'
				}
				*/
			}
		},
		//添加文件监视任务
		watch:{
			
			scripts:{
				
				files:["js/Clock.js","js/Control.js","js/CenterPoint.js","js/CirclePoint.js","js/Seconds.js","js/Minutes.js","js/Hours.js","js/myClock.js","js/myClock.min.js"],
				tasks:['default']
			}
		}
		
		
	})
	
	//加载要使用的任务模块(使用npm install grunt-contrib-concat --save-dev安装)
	grunt.loadNpmTasks('grunt-contrib-concat')
	
	//加载grunt-contrib-uglify压缩模块
	grunt.loadNpmTasks('grunt-contrib-uglify')
	
	//加载grunt-contrib-watch文件监视模块
	grunt.loadNpmTasks('grunt-contrib-watch')
	
	//注册任务
	//参数1：任务名称
	//参数2：任务列表
	//grunt.registerTask('default',['concat','uglify'])
	
	grunt.registerTask('任务1',['concat'])
	
	grunt.registerTask('任务2',['uglify'])
	
	
}
