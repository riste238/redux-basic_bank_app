let initialState = {
    accounts: [
        {
            id: 1,
            name: "Riste",
            phone: "555-555-555",
            email: "riste@gmail.com"
        }
    ],
    display: 1
}
const store = Redux.createStore(reducer);
let start = { type: "START" };

let newAccount = {type: "NEW_ACCOUNT"};
let displayAccountsAction = {type: "DISPLAY_ACCOUNTS"};

let saveAccount = (newAccount)=> {
   return {
    type: "SAVE_ACCOUNT",
    payload:  
    {
        newAccount : newAccount 
    }
   }
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case "START":
            return state;   
            case "NEW_ACCOUNT":
                return Object.assign({},state,{display:2});
                case "DISPLAY_ACCOUNTS":
                    return Object.assign({},state,{display:1});
                    case "SAVE_ACCOUNT":
                        return Object.assign({},state, { accounts : [...state.accounts,action.payload.newAccount]})
            default:
            return state;
    }
}