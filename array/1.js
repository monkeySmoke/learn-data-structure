function studentScoreRecord () {
    this.scoreStore = []
}

studentScoreRecord.prototype = {
    constructor: studentScoreRecord,
    add: function (score) {
        this.scoreStore.push(score)
    },
    average: function () {
        var total = this.scoreStore.reduce(function (total, now) {
            return total + now
        })
        return (total / this.scoreStore.length).toFixed(2)
    }
}
var studentScoreRecord1 = new studentScoreRecord()
studentScoreRecord1.add(100)
studentScoreRecord1.add(50)

var studentScoreRecord2 = new studentScoreRecord()
studentScoreRecord2.add(60)
console.log(studentScoreRecord1)
console.log(studentScoreRecord2)