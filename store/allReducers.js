const initailData = {
    currentDonation: {},
    donationBannerPosition: "alignLeftTop"
};

export const allReducers = (state = initailData, action) => {
    switch (action.type) {
        case "SELECT_CURRENT_DONATIONS":
            return {
                ...state,
                currentDonation: action.payload,
            };
        case "DONATION_CURRENT_POSITIONS":
            return {
                ...state,
                donationBannerPosition: action.payload,
            }
        default:
        return state;
    }
};