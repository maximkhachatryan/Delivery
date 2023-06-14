const getDistrictName = districtCode => {
    switch (districtCode) {
        case 1:
            return 'Կենտրոն';
        case 2:
            return 'Արաբկիր';
        case 3:
            return 'Քանաքեռ Զեյթուն';
        case 4:
            return 'Ավան';
        case 5:
            return 'Նոր Նորք';
        case 6:
            return 'Նորք Մարաշ';
        case 7:
            return 'Էրեբունի';
        case 8:
            return 'Շենգավիթ';
        case 9:
            return 'Նուբարաշեն';
        case 10:
            return 'Մալաթիա-Սեբաստիա';
        case 11:
            return 'Աջափնյակ';
        case 12:
            return 'Դավթաշեն';
        default:
            return '...'
    }
};



export {
    getDistrictName
    
};