import api from "../utils/axiosUtil";

export const getVenderAddresses = async (venderId) => {
    return await api.get(`/venderAddresses/${venderId}`)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            throw (error);
        });

}

export const addVenderAddresses = async (venderId, district, address) => {
    return await api.post(`/venderAddresses/${venderId}`, {
        district: district,
        addressInfo: address
    })
        .then(function (response) {
            return response.status == 200;
        })
        .catch(function (error) {
            console.log(error);
            return false;
        });

}

export const removeVenderAddress = async (venderId, addressId) => {
    return await api.delete(`/venderAddresses/${venderId}`, {
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            id: addressId
        }
    }
    )
        .then(function (response) {
            return response.status == 200;
        })
        .catch(function (error) {
            console.log(error);
            return false;
        });

}