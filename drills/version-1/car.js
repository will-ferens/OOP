//Your code here.
class Car {
    constructor(mpg) {
        this.gallons = 0
        this.totalMiles = 0
        this.mpg = mpg
        this.tripLog = []
    }
    fill(gas) {
        this.gallons += gas
    }
    drive(miles) {
        let gasUsed = miles / this.mpg
        this.gallons -= gasUsed
        this.totalMiles += miles
        this.tripLog.push(`${miles} miles`)
    }
    odometer() {
        return this.totalMiles
    }
    trips() {
        return this.tripLog
    }
}

module.exports = Car
