const initialState = {
    email: 'admin@admin.com',
    senha: '1231232'
};

const AuthReducer = (state = [], action) => {

    if(state.length == 0){
        return initialState;
    }

   
    if(action.type == 'editEmail'){
        return{
            ...state, email:action.payload.email
        };
    }


    return state;
};

export default AuthReducer;