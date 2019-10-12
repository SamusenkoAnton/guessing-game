class GuessingGame {
    constructor() {
        this.start = 0;
        this.end = 0;
        this.a = 0;
    }

    setRange(min, max) {
        this.start = min;
        this.end = max;
    }

    guess() {
        this.a = Math.round((this.end  + this.start)/2);
        return this.a;
    }

    lower() {
        this.end = this.a;
    }

    greater() {
        this.start = this.a;
    }
}

module.exports = GuessingGame;
