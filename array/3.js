function weekTemps() {
    this.MonthStore = []
    this.weekStore = []
}

weekTemps.prototype = {
    constructor: weekTemps,
    add: function (temp) {
        this.weekStore.push(temp)
        if (this.weekStore.length === 7) {
            this.MonthStore.push(this.weekStore)
            this.weekStore = []
        }
    },
    monthAverage: function () {
        var total = 0
        var totalDay = 0
        var weekLength = this.MonthStore.length
        for (var week = 0; week < weekLength; week ++) {
            var dayLength = this.MonthStore[week].length
            for(var day = 0; day < dayLength; day ++) {
                total += this.MonthStore[week][day]
                totalDay ++
            }
        }
        console.log('全月平均温度：', (total/ totalDay).toFixed(2))
    },
    weekAverage: function (num) {
        var index = num - 1
        if (index >= 0 && index <this.MonthStore.length) {
            var weekTotal = this.MonthStore[num - 1].reduce(function (total, item) {
                return total + item
            })
            console.log('第'+ num + '周的平均温度：', (weekTotal / this.MonthStore[num - 1].length).toFixed(2))
        } else {
            console.log('未找到指定周的数据')
        }

    },
    everyWeekAverage: function () {
        var weeks = this.MonthStore.length
        for(var week = 0; week < weeks; week++) {
            var totalWeek = this.MonthStore[week].reduce(function(total, item){
                return total + item
            })
            console.log('周' + (week + 1) + '平均温度:' + (totalWeek / this.MonthStore[week].length).toFixed(2))
        }
    }

}

var Month = new weekTemps()

for(var i = 0; i < 28; i++) {
    var temp = parseFloat((20 + (Math.random() * 15)).toFixed(2))
    Month.add(temp)
}
console.log(Month.MonthStore)
Month.monthAverage()
Month.weekAverage(2)
Month.everyWeekAverage()