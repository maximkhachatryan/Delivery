import axios from "axios"

export const getVenderAddresses = async (venderId) => {
    let url = `https://439b-37-252-93-46.ngrok-free.app/api/venderAddresses/${venderId}`
    return await axios.get(url)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            throw (error);
        });

}

export const addVenderAddresses = async (venderId, district, address) => {
    let url = `https://439b-37-252-93-46.ngrok-free.app/api/venderAddresses/${venderId}`
    return await axios.post(url, {
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
    let url = `https://439b-37-252-93-46.ngrok-free.app/api/venderAddresses/${venderId}`
    return await axios.delete(url, {
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