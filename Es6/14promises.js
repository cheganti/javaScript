let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Done")
    }, 1000);
})

promise.then(data => {
    console.log(data)
}, (error) => {
    console.log('error' + error)
});
console.log("hello");

// Promise chaining
function waitASecond(seconds) {
    return new Promise((resolve, reject) => {
        if (seconds > 2) {
            reject("rejected")
        } else {
            setTimeout(() => {
                seconds++
                resolve(seconds)
            }, 1000)
        }

    })
}

waitASecond(1)
    .then(waitASecond)
    .then(waitASecond)
    .then((data) => {
        console.log(data)
    }).catch((error) => {
        console.log(error)
    })