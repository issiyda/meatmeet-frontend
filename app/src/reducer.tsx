



export const reducer = (state:any, action:any) => {
  console.log('checkState', state)
  switch (action.type) {
    case "ADD_REQUIREMENT":
      return {
        ...state,
        requirementInfo: [
          ...state.requirementInfo,
          {
            name: action.payload.name,
            place: action.payload.place,
            shopName: action.payload.shopName,
            title: action.payload.title,
          }
        ],
        nextRequirementId: state.nextRequirementId + 1
      };
    case "TOGGLE_TODO":
      return {
      };
    case "SET_VISIBILITY_FILTER":
      return {
      };
    default:
      return state;
  }
};
