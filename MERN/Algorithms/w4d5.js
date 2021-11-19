class Heap {
    constructor() {
        this.items = [null]
    }

    getMin() {
        // return the smallest value in the heap
        return this.items[1]
    }

    add(value) {
        let temp = ""
        this.items.push(value)
        let current = this.items.length - 1
        // now promote the value up the heap to its proper position
        // is it larger than parent node?
        while (current > 1 && this.items[Math.floor(current / 2)] > this.items[current]) {
            this.items[Math.floor(current / 2)] = this.items[current]
            this.items[current] = this.items[Math.floor(current / 2)]
            current = Math.floor(current / 2)
        }
        return this.items
    }

    remove(value) {
        let temp = ""
        // swap with the last item and then pop
        // code here
        this.items.pop(value)
    }
}

// indexes for children are always 2x and 2x+1
// indexes for parents are always Math.floor(i/2)

// function heap(){
//     this.items=[null]
//     let add = ()=>{

//     }
//     let remove = ()=>{
        
//     }
// }


let myheap = new Heap()
console.log(myheap.add(2))
console.log(myheap.add(3))
console.log(myheap.add(1))




// Solution example:
// class Heap {
//     constructor(){
//         this.items = [null]
//     }

//     promote = num => {
//         this.items.push(num);
//         let location = this.items.length-1;
//         while(this.items[location] < this.items[Math.floor(location/2)]){
//             this.items[location] = this.items[Math.floor(location/2)];
//             this.items[Math.floor(location/2)] = num;
//             location = Math.floor(location/2)
//         }
//         return this.items;
//     }

//     demote = () => {
//         let holder = this.items[1];
//         this.items[1] = this.items[this.items.length-1];
//         this.items[this.items.length-1] = holder;
//         this.items.pop();
//         let length = this.items.length;
//         let location = 1
//         while((this.items[location] > this.items[location*2] || this.items[location] > this.items[location*2+1]) && location*2 < length){
//             let swapIndex = location*2;
//             if(this.items[location*2] > this.items[location*2+1]){
//                 swapIndex++;
//             }
//             holder = this.items[location];
//             this.items[location] = this.items[swapIndex];
//             this.items[swapIndex] = holder;
//             location = swapIndex;
//         }
//         return this.items;
//     }
// }

// let newHeap = new Heap();
// console.log(newHeap.promote(5));
// console.log(newHeap.promote(10));
// console.log(newHeap.promote(3));
// console.log(newHeap.promote(20));
// console.log(newHeap.promote(15));
// console.log(newHeap.promote(2));
// console.log(newHeap.promote(25));

// console.log(newHeap.demote());
// console.log(newHeap.demote());
// console.log(newHeap.demote());