export const initialState = {
    photoUrl: "",
    displayName: "",
    token: ""
}

const reducer = (state,action)=>{
    console.log("😄",action);
    switch(action.type){
        case "ADD_USER":
            return {
                ...state,
                photoUrl: action.photoURL,
                displayName: action.displayName,
                token: action.token
            }
    }
}

export default reducer;