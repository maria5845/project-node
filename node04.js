// 큐 FIFO 
const queue = []
queue.push(1)
queue.push(2)
console.log(queue)
let r = queue.shift()
console.log(r)

// 스택 LIFO 
const stack = []
stack.push(1)
stack.push(2)
console.log(stack)
var s = stack.pop()
console.log(s)

// every 모든 조건이 만족하면 True 아니면 false를 반환 
const arr = [2,3,4]
const isBiggerThenOne = arr.every(key => key > 1) 
console.log(isBiggerThenOne);


// find key로 객체 찾기 
const arr1 = ['node.js', '올인원']
const ret = arr1.find(key => key === '올인원')
console.log(ret);


// includes 해당 값이 포함되어있는지 확인만 함 true false 
const arr2 = ['node.js', '올인원']
const res = arr2.includes('node.js')
console.log(res);

// # 사용 예시 
if(arr2.includes('node.js')){

}
for(const item of arr){
    if(arr2.includes(item)){

    }
}

// # 포이치문 
const arr3 = [1,2,3]
const newArr = []

arr3.forEach(item =>{
    newArr.push(item)
});
console.log(newArr);

/* 
    filter의 가장 큰 특징은 boolean형태의 return값을 갖는다. 
    return값이 true일경우, 그 요소를 반환하고 false일경우, 반환하지 않는다. 
    기본값은 false이다
    */
const b = [1,2,3]
const f = b.filter(x => x > 1)
console.log(f)
 
 /*
    filter와 다른점이라고 하면, 
    filter는 return값으로 true/false만 쓸 수 있으며,    
    요소를 반환하지만, map의 경우 요소가 아닌 새로운 값을 만들어서 return할 수 있다.

    */
const a = [3,4,5]
const c = a.map(x => x+1)
console.log(c)

