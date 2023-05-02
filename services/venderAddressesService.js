import axios from "axios"

export const getVenderAddresses = async (venderId) => {
    let url = "https://0bef-37-252-93-46.ngrok-free.app/api/venderAddresses/" + venderId
    return await axios.get(url)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            throw (error);
        });

}