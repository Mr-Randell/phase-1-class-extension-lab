// Your code here
class Polygon {
    constructor(array) {
        this.array = array;
    }
    get countSides() {
        return this.array.length;
    }
    get perimeter() {
        let total = 0;
        for(let i=0;i<this.array.length; i++){
            total+= this.array[i];
        }
        return total;
    }
}

class Triangle extends Polygon {
    get isValid() {
        return (this.array[0]+ this.array[1] > this.array[2] && this.array[1]+this.array[2] > this.array[0] && this.array[2] + this.array[0] > this.array[1]) ? true : false;
    }
}

class Square extends Polygon {
    get isValid() {
        return (this.array[0] ===this.array[1]) ? true : false;
    }
    get area() {
        return Math.pow(this.array[0],2);
    }
}