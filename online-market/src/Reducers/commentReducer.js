
import {
    GET_CHAT,
    POST_CHAT,
    EDIT_CHAT
 } from "../Actions/types";

 const initialState = {
     coments: []
 }

 export default function (state = initialState, action) {
     switch(action.type) {
        case GET_CHAT:
             return {
                 ...state,
                 coments: action.payload
             }
        case POST_CHAT:
            console.log(action.payload)
            return {
                ...state,
                coments: action.payload
            }
        case EDIT_CHAT:
            console.log(action.payload)
            return {
                ...state
            }
        default:
            return{
                ...state
            }

     }
 }