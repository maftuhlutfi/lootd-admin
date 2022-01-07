const formatPostDate = (date) => {
    const d = new Date(date)

    const diff = Math.abs(d - new Date())
    const minutes = Math.floor(diff / 1000 / 60)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)

    const monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    if (minutes < 1) {
        return 'Recently'
    }

    if (minutes < 60) {
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`
    }

    if (hours < 24) {
        return `${hours} hour${hours > 1 ? 's' : ''} ago`
    }

    if (days <= 7) {
        return `${days} day${days > 1 ? 's' : ''} ago`
    }

    return `${monthsArray[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
}

export default formatPostDate;