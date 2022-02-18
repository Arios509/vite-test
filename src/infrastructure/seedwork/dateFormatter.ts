import moment from "moment";

function formatMilliseconds(milliseconds: any) {
    return moment(parseInt(milliseconds)).format("DD MMM YYYY hh:mm a")
}

function formatDate(dateTime: any) {
    return moment(dateTime).format('yyyy-MM-DD')
}

function calculateDateByDay(startDateTime: any, days: any ){
    return moment(startDateTime).add(days, 'days').format('yyyy-MM-DD');
}
export {
    formatMilliseconds,
    formatDate,
    calculateDateByDay
}