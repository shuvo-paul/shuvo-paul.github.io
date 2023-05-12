export const parseDate = (dateString: string) => {
    const parts = dateString.split('-');
    const date = new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
    console.log(date);
    return date;
}

export const formatedDate = (dateString: string) => {
    const date = parseDate(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.toLocaleString('default', { year: '2-digit' });
    return `${day} - ${month} - ${year}`;
}