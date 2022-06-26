function increase(number) {
    const promise = new Promise((resolve, reject) => {
        //resolve는 성공, reject는 실패
        setTimeout(()=> {
            const result = number + 50;
            if(result > 500) {
                const e = new Error('NumberTooBig');
                return reject(e)
            }
            resolve(result);
        }, 1000);
    });
    return promise;
}
increase(0)
    .then(number => {
        console.log(number);
        return increase(number)
    })
    .then(number => {
        console.log(number);
        return increase(number)
    })
    .then(number => {
        console.log(number);
        return increase(number)
    })
    .then(number => {
        console.log(number);
        return increase(number)
    })
    .then(number => {
        console.log(number);
        return increase(number)
    })
    .catch(e => {
        console.log(e);
    });