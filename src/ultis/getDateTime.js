function getDateTime(timestamp) {
    let date = new Date(timestamp);
    let dateValues = [
        date.getFullYear(),
        ((date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)),
        ((date.getDate() < 10) ? '0' + date.getDate() : date.getDate()),
        date.getHours(),
        date.getMinutes(),
    ]
    return dateValues
}

export default getDateTime;