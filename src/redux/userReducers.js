import { GET_USERS , GET_USER, GET_ALL_USERS, SEARCH_USER} from "./actions";

const inicialState = {
  users: [],
  user: {},
  allUsers : [],
  search : ''
};

export default function userReducer(state = inicialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };

    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case GET_ALL_USERS:
      return {
        ...state,
        allUsers: action.payload,
      };

    case SEARCH_USER:
      return {
        ...state,
        search: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};