const ADD_USER = 'ADD-USER';
const UPDATE_USER = "UPDATE-USER";

let initialState = {
    users: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_USER:
            state.users.push(action.newUser);
            return state;
        case UPDATE_USER:
            state.newPostText = action.newTetx;
            return state;
        default:
            return state;
    }
}

export default rootReducer