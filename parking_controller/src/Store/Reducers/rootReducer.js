const initialState = {
  cars: [],
  carsOnTerritory: [],
  brands: [],
  models: [],
  tenants: [],
  sort: [],
  search: '',
  isCarsOnTerritoryOnly: false,
  hiddenTenantsList: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CARS':
      return {
        ...state,
        cars: [...action.payload]
      }
    case 'SET_CARS_ON_TERRITORY':
      return {
        ...state,
        carsOnTerritory: [...action.payload]
      }
    case 'SET_CAR_BRANDS':
      return {
        ...state,
        brands: [...action.payload]
      }
    case 'SET_CAR_MODELS':
      return {
        ...state,
        models: [...action.payload]
      }      
    case 'SET_TENANTS':
      return {
        ...state,
        tenants: [...action.payload]
      }
    case 'SET_SORT':
      return {
        ...state,
        sort: [...action.payload]
      }    
    case 'SET_SEARCH':
      return {
        ...state,
        search: action.payload
      }
    case 'SET_TERRITORY_ONLY':
      return {
        ...state,
        isCarsOnTerritoryOnly: !state.isCarsOnTerritoryOnly
      }
    case 'SET_HIDDEN_TENANTS':
      return {
        ...state,
        hiddenTenantsList: action.payload ? [...action.payload] : []
      }      
    default:
      return state;
  }
}

export default rootReducer;