
function getRealDate(){
    const currentDate = new Date();
    
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    let amPm = hours >= 12 ? 'pm' : 'am';
    
    hours = hours % 12;
    hours = hours ? hours : 12;
    let strTime = `${String(hours).padStart(2, 0)}:${String(minutes).padStart(2, 0)}:${String(seconds).padStart(2,0)} ${amPm}`;
    document.getElementById('clock').innerText = strTime;
    clock.innerHTML = strTime;
    setTimeout(getRealDate, 1000);
}


getRealDate();