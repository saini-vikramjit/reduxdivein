function setTechnology(text){
    return {
        type: "SET_TECHNOLOGY",
        tech: text
    }
}

function updateFromServer(text){
    return {
        type: "UPDATE_FROM_SERVER",
        tech: text
    }
}

module.exports = {
    setTechnology,
    updateFromServer
}