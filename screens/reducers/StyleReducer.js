const initialState = {
   titulo: 'Teste Redux ...'
};

const StyleReducer = (state = [], action) => {

    if(state.length == 0){
        return initialState;
    }

    return state;
};

export default StyleReducer;