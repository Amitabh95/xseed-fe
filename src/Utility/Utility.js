export const updatedObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const dateFormater = (date, format) => {
    const monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];

    date = new Date(date);
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    switch (format) {
        case 'DD/MM/YYYY':
            return day + '/' + monthIndex + 1 + '/' + year;
        case 'DD-MMM-YYYY':
            return day + '-' + monthNames[monthIndex].padEnd(3) + '-' + year;
        default:
            return day + '/' + monthIndex + 1 + '/' + year;
    }
}

export const timeFormater = (date) => {
    date = new Date(date);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();
    return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
}