fetch('https://jcst.any.gay/api/getTimeOffset')
.then(res => res.json())
.then(({ timeOffset }) => {
    const GetClock = element => {
        element.innerText = moment().utcOffset(timeOffset).format('dddd, Do MMMM YYYY, h:mm:ss A');
        setTimeout(() => GetClock(element), 1000)
    }
    
    document.querySelector('#clockboxOffset').innerText = (timeOffset >= 0) ? `+${timeOffset}` : timeOffset;
    GetClock(document.getElementById('clockbox'))    
})

