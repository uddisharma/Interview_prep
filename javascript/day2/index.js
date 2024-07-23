const mergearray = (arr1, arr2) => {
    return arr1.concat(arr2).sort((a, b) => a - b)
}

// Promise

//Promise.all()

// It will execute all the promises parlelly and wait untill end of all promises will resolve , if a single promise reject it will reject all promises

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P1 resolved')
    }, 1000);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P2 resolved')
    }, 2000);
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P3 resolved')
    }, 3000);
})

Promise.all([p1, p2, p3]).then((values) => {
    console.log(values)
})

//Promise.allSettled()

// It will also execute all the parlelly and wait untill end of all promises will resolve , if a single or more promises will reject then it will not reject all promises but it will log the status of each promise and output the reason of rejection

const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P4 resolved')
    }, 1000);
})

const p5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('P5 rejected')
    }, 2000);
})

const p6 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P6 resolved')
    }, 3000);
})

Promise.allSettled([p4, p5, p6]).then((values) => {
    console.log(values)
})


//Promise.race()

// The name itself suggest means winner , it will capture the first promise that can be resolve or reject and log the value of it

const p7 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('P7 rejected')
    }, 1000);
})

const p8 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('P8 rejected')
    }, 2000);
})

const p9 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P9 resolved')
    }, 3000);
})

Promise.race([p7, p8, p9]).then((values) => {
    console.log(values)
}).catch((error) => {
    console.log(error)
})



//Promise.any()

// The name itself suggest means selleled anyone , whenever first promise will resolve it will log the value of it if all of them are rejcected it will log the error (AggregateError) or reason of rejection for all

const p10 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('P10 rejected')
    }, 1000);
})

const p11 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('P11 rejected')
    }, 2000);
})

const p12 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P12 resolved')
    }, 3000);
})

Promise.any([p10, p11, p12]).then((values) => {
    console.log(values)
}).catch((error) => {
    console.log(error)
})

