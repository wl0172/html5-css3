/**
 * 
 * @param {*} git 命令上传
 * git init // 初始化
 * git add . // 把文件添加到版本库中，添加到暂存区里面去
 * git commit -m'说明' // commit 提交到仓库，引号为提交说明
 * git remote add origin 你的远程仓库地址
 * 比如：git remote add origin https://github.com/githubusername/demo.git
 * git pull --rebase origin master // 获取远程与本地同步合并
 * git push -u origin master // 本地库的内容推送到远程
 * git status // 查看状态
 * 
 * https://www.cnblogs.com/eedc/p/6168430.html
 */

// 防抖
const debounce = (fn, wait) => {
	let timeout = null;
	return function() {
		if (timeout !== null) clearTimeout(timeout);
		timeout = setTimeout(fn, wait);
	}
}

// 节流
const throttle = (func, delay) => {
	let prev = Date.now();
	return function() {
		let context = this;
		let args = arguments;
		let now = Date.now()
		if (now - prev >= delay) {
			func.apply(context, args)
			prev = Date.now();
		}
	}
}

// 数组更换位置
const swapArray = (arr, index1, index2) => {
	arr[index1] = arr.splice(index2, 1, arr[index1])[0];
	return arr;
}

// 浏览器tab切换监听
const windowWatch = () => {
	document.addEventListener("visibilitychange", () => {
		document.hidden ? console.log("咋跑了") : console.log("回来了")
	})
}

// 数组去重
// let repeatArr = [1, 2, 3, 4, 1, 2, 3, 4];
const toRepeat = (arr) => {
	// new Set() 数组去重 
	// return [...new Set(arr)]

	// let obj = {}
	// arr.forEach((item) => {
	//   obj[item.name] = item
	// });
	// let a = []
	// for(i in obj){
	//   a.push(obj[i])
	// }
	// return a

	// var arr = [1, 5, 6, 0, 7, 3, 0, 5, 9, 5, 5];
	// function unique(arr) {
	//   for (var i = 0, len = arr.length; i < len; i++) {
	//     for (var j = i + 1, len = arr.length; j < len; j++) {
	//       if (arr[i] === arr[j]) {
	//         arr.splice(j, 1);
	//         j--;        // 每删除一个数j的值就减1
	//       }
	//     }
	//     return arr;
	//   }
	//   console.log(unique(arr));       //  1, 5, 6, 0, 7, 3, 9
	// }

}

// 判断随性还是数组
const isObjorArr = (obj) => {
	return Object.prototype.toString.call(obj).slice(8, -1)
	// return obj__proto__.constructor.name
}

// 数组排序
const arrSort = (arr) => {
	let result = []
	// let result = arr.sort((a, b) => a - b) //升序 
	// let result = arr.sort((a, b) => b - a) //降序 
	return result
}

// 根据2个日期，得出相差天数
// let days = daysBetween('2016-11-01', '2016-11-02');
const daysBetween = (sDate1, sDate2) => {
	// ● 根据两个日期，判断相差天数
	// ● @param  sDate1 开始日期 如：2016-11-01 
	// ● @param  sDate2 结束日期 如：2016-11-02 
	// ● @returns  {number} 返回相差天数 
	//Date.parse() 解析一个日期时间字符串，并返回1970/1/1 午夜距离该日期时间的毫秒数
	let time1 = Date.parse(new Date(sDate1));
	let time2 = Date.parse(new Date(sDate2));
	let nDays = Math.abs(parseInt((time2 - time1) / 1000 / 3600 / 24));
	return nDays;
};

// 当前元素距离
const gGetRect = (element) => {
	let rect = element.getBoundingClientRect();
	let top = document.documentElement.clientTop;
	let left = document.documentElement.clientLeft;
	return {
		top: rect.top - top,
		bottom: rect.bottom - top,
		left: rect.left - left,
		right: rect.right - left
	}
}

// 获取当天23:59:59
const endDayTime = () => {
	return new Date(new Date(new Date().toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1).getTime()
}

// 手机号格式化
const formatPhoneOnkeyUp = (mobile = '') => {
	let value = String(mobile).replace(/\D/g, '').substring(0, 11);
	let valueLen = value.length;
	if (valueLen > 3 && valueLen < 8) {
		value = value.replace(/^(...)/g, "$1 ");
	} else if (valueLen >= 8) {
		value = value.replace(/^(...)(....)/g, "$1 $2 ");
	}
	return value;
}

// 判断是数字
const myIsNaN = (value) => {
	return typeof value === 'number' && !isNaN(value);
}

// 获取数组中最大小值
const arrMaxMin = (arr) => {
	// return Math.max.apply(null, arr)//最大值
	// return Math.min.apply(null, arr)//最小值
}

// 深度拷贝
// let a = [1, 3, 5, 7]; let b = JSON.parse(JSON.stringify(a));
//这种方法存在一种很大的缺点，转换时会自动忽略undefined，Symbol、function
const deepClone = (obj) => {
	// 判断数据形式
	let clone = Array.isArray(obj) ? [] : {};
	if (obj && typeof obj === "object") {
		for (key in obj) {
			if (obj.hasOwnProperty(key)) {
				// 属性是对象则进行递归
				if (obj[key] && typeof obj[key] === "object") {
					clone[key] = deepClone(obj[key]);
				} else {
					clone[key] = obj[key];
				}
			}
		}
	}
	return clone;
}

// new Map()运用
// [
//   [1, 'one'],
//   [2, 'two'],
//   [3, 'three'],
// ]
const newMap = (arr, i) => {
	let map = new Map(arr);
	// map.get(1)// 'noe'
	return ''
}

// let a = [5,[[4,3],2,1]]
// (5-((4-3)-2-1))
// flat([5, [[4, 3], 2, 1]])
const flat = (arr) => {
	let result = undefined
	for (let i = 0; i < arr.length; i++) {
		const items = arr[i]
		// 数组
		if (items instanceof Array) {
			// 返回值
			const value = flat(items)
			result = result === undefined ? value : result - value
		} else {
			// 数字
			if (result === undefined) result = items
			else result = result - items
		}
	}
	return result
}

// 浏览器tab切换监听
// document.addEventListener("visibilitychange", () => {
// 	document.hidden ? console.log("咋跑了") : console.log("回来了")
// })

// 循环套定时任务
const arrEach = () => {
	for (var i = 0; i < 5; i++) {
		var j = 0;
		var arr = [1, 2, 5, 7, 8];
		setTimeout(function() {
			console.log(arr[j++]);
		}, i * 3000)
	}
}

const newMap1 = () => {
	const keyValue = [['a', 1], ['b', 2]];
	const map2 = new Map(keyValue);

	console.log(map2.get('a'), 1);
}
