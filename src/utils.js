export const getFormatedDate = () => {
    const date = new Date();
    const [year, month, day, hour, minute, second] = [
        date.getFullYear(), 
        date.getMonth() + 1, 
        date.getDate(), 
        date.getHours(), 
        date.getMinutes(), 
        date.getSeconds()
    ].map(padDate);
    
    return `${year}-${month}-${day} ${hour}:${minute}:${second}: `;
}


const padDate = date => date < 10 ? `0${date}` : date;