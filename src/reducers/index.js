export default (state, action) => {
    console.log(`Reducer ${action.type}`);
    switch(action.type){
        case "SET_TECHNOLOGY":
            return {
                ...state,
                tech : action.tech
            };

        case "SET_NOTHING":
            return state;

        case "ERROR":
            throw new Error(`Something went wrong`);
        
        case "UPDATE_FROM_SERVER":
            return state;

        default:
            return state;
    }
    
}