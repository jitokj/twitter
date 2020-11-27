export const initialState = {
    photoUrl: null,
    displayName: null
}

const reducer = (state,action)=>{
    switch(action.type){
        case "ADD_USER":
            return {
                ...state,
                photoUrl: action.photoUrl,
                displayName: action.displayName
            }
    }
}

export default reducer;