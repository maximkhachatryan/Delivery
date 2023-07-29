import api from "../utils/axiosUtil";

export const getVendorAddresses = async (vendorId) => {
    return await api.get(`/vendorAddresses/${vendorId}`)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            throw (error);
        });

}

export const addVendorAddresses = async (vendorId, district, address) => {
    return await api.post(`/vendorAddresses/${vendorId}`, {
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

export const removeVendorAddress = async (vendorId, addressId) => {
    return await api.delete(`/vendorAddresses/${vendorId}`, {
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