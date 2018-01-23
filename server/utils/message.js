var generateMessage = (from, text) => {
    // Return message object
    return {
        from,
        text,
        createdAt: new Date().getTime()
    }
}

module.exports = {generateMessage};