


const dateNow = () => {

    const today = new Date();

    const month = today.getMonth()+1;
    const year = today.getFullYear();
    const date = today. getDate();
    const currentDate = year + "-" + month + "-" + date;
    
    return currentDate;

}

const threeDayAfterDateNow = () => {

    const today = new Date();
    const nextThreeDays = new Date(today.setDate(today.getDate() + 3));

    const month = nextThreeDays.getMonth()+1;
    const year = nextThreeDays.getFullYear();
    const date = nextThreeDays. getDate();
    const nextThreeDaysDateFormat = year + "-" + month + "-" + date;

    return nextThreeDaysDateFormat;
}

export {
    dateNow, 
    threeDayAfterDateNow,
};