function printNums (n,cb) {
    if (typeof n !== "number") return
    for(let nums = 1;nums<=n;nums++) {
        setTimeout(() => {
            cb(nums)
        }, nums*1000)
    }
}
printNums(5,(num) => {
    console.log(num)
})

