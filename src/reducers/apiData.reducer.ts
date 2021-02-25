export default function (state = [], action: { type: any; payload: any; }){
    if(state == []){
        switch(action.type){
            case 'ADD_API_DATA':
                return [ ...state, action.payload];
            default: 
            return state;
        }
    } else {
        return state;
    }
}