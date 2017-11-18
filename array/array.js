var array = [1, 2, 3]
var array2 = new Array(10)
var array3 = new Array(1, 2, 3)

console.log(array, array2, array3)

//字符串转数组

var str = 'a b c d'
var strToArr = str.split(' ')
console.log('字符串转数组', strToArr)

// 查找元素

var array4 = ['a', 'b', 'c', 'b', 'd']

console.log('查找元素c', array4.indexOf('c'))
console.log('查找元素b', array4.lastIndexOf('b'))

//数组转字符串

var arrToStr = array.join()
console.log('数组转字符串', arrToStr)
var arrToStr2 = array.toString()
console.log('数组转字符串', arrToStr2)

//concat

var array5 = [1, 2, 3, 4]
var array6 = [4, 5]

var concatArr = array5.concat(array6)
console.log('concat', concatArr)

//splice 会改变原数组

var deleteArr = concatArr.splice(0, 4, '2', '3')
console.log('splice', deleteArr, concatArr)

//push unshift 向数组添加元素

var array7 = []
array7.push('1')
array7.push(1, 2, 3)
console.log('push', array7)
array7.unshift('2')
array7.unshift(1, 2, 2)
console.log('unshift', array7)

// pop shift 删除数组元素

array7.pop()
var pop = array7.pop()
console.log('pop', pop, array7)
var shift = array7.shift()
console.log('shift', shift, array7)

//reverse

var array8 = [3, 1, 2, '2', '3']
console.log('reverse', array8.reverse())

//sort

var array9 = ['a', 'b', 'c']
console.log('sort', array9.sort())
var array10 = ['1', '2', '3']
function compare(num1, num2) {
    return num1 - num2
}
console.log('sort', array10.sort(compare))

//不生成新数组的迭代器方法

// 1. forEach

var array11 = [1, 2, 3, 4, 5]
var test = array11.forEach(function (item) {
     console.log(item + ' => ' + item * item)
})
console.log('forEach', test, array11)

// 2. every

var allIsEven = array11.every(function (item) {
    return item % 2 === 0
})
console.log('every', allIsEven, array11)

// 3. some

var hasEven = array11.some(function (item) {
    return item % 2 === 0
})
console.log('some', hasEven, array11)

// 4.reduce

var sum = array11.reduce(function (total, now) {
    console.log('total:' + total + ' => ' + now)
    return total + now
})
var words = ["the ", "quick ","brown ", "fox "]
var str = words.reduceRight(function (computedStr, item) {
    return computedStr + item
})
console.log('reduce', sum , array11)
console.log('reduceRight', str)

//生成新数组的迭代器

// 1. map
var array12 = [1, 2, 3, 4, 5]
var newMapArr = array12.map(function (item) {
    return item * 2
})
console.log('map', newMapArr, array12)

// 2. filter

var newFilterArr = array12.filter(function (item) {
    return item % 2 === 0
})
console.log('filter', newFilterArr, array12)