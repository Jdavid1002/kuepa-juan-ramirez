import axios from "axios";

//CONSTANTES
export const GET_USERS = "GET_USERS";
export const GET_USER = "GET_USER";

//Endpoints

const apiUsers = "https://api.opendota.com/api/proPlayers";
const apiUser = "https://api.opendota.com/api/players/";



export const getUsers = () => {
  return (dispatch) => {
    axios
      .get(apiUsers)
      .then((res) => {
        if (res.data.length > 0) {
         const newUsers = res.data.filter(user =>  user.name && user.name.length > 3 && user.name.length < 7);
         const usersOrderRandom = newUsers.map((user, index) => {
           return{
             ...user,
             orderRandom : Math.floor((Math.random() * ((newUsers.length - 1) - index + 1)) + index)
           }
         })
         .sort((a, b) => a.orderRandom - b.orderRandom)
         .map((user, index) => {
            if(index < 12){
              return user;
            }else{
              return false;
            }
         }).filter(user => user);
          dispatch({
            type: GET_USERS,
            payload: usersOrderRandom,
          });
        } else {
          alert("No llegaron usuarios para mostrar");
        }
      })
      .catch((err) => {
        console.log("error del catch", err);
      });
  };
};


export const getUser = (id) => {
  return (dispatch) => {
    axios
      .get(`${apiUser}${id}`)
      .then((res) => {
        dispatch({
          type: GET_USER,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log("error del catch", err);
      });
  };
};