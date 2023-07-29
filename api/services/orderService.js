import api from "../utils/axiosUtil";

export const addOrder = async (order) => {
    return await api.post('/order', order)
        .then(function (response) {
            return response.status == 200;
        })
        .catch(function (error) {
            console.log(error);
            return false;
        });

}

export const getAllOrders = async (vendorId) => {
    return await api.get(`/order/${vendorId}`)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            throw (error);
        });

}