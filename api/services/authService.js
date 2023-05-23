import api from "../utils/axiosUtil";


export const login = async (userName, passwordHash) => {
  return await api.post("/account/login", {
    UserName: userName, //"maximkhachatryan",
    PasswordHash: passwordHash //"9663353191d4fb084e2f1bae7ac232b891482f0087d34ea9a58bfdbbdf6e0b4e"
  })
    .then(function (response) {
      let venderId = response.data;
      return venderId;
    })
    .catch(function (error) {
      
      if (error.code === 'ERR_BAD_REQUEST')
        return null;
      else {
        throw (error);
      }

    });

}