const ADD_USER = 'ADD-USER';
const UPDATE_USER = "UPDATE-USER";

let initialState = {
    user:  {
        firstName: "",
        lastName: "",
        email: "",
        suggestions: [],
        experience: [
            {
              industry: "-",
              years: 1
            },
          ]
    }
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_USER:
            state.user = action.newUser;
            return state;
        case UPDATE_USER:
            // TODO
            return state;
        default:
            return state;
    }
}

export default rootReducer