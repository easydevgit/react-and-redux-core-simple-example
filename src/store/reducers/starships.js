const initialState = {
    data: null,
    loadSuccess: false,
    loading: false,
    error: false
  }
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case "LOADING_STARSHIPS":
        return {
          ...state,
          data: null,
          loading: true
        }
      case "LOADING_STARSHIPS_SUCCESS":
        return {
          ...state,
          loading: false,
          data: action.data
        }
      case "LOADING_STARSHIPS_ERROR":
        return {
          ...state,
          loading: false,
          error: true
        }
      default:
        return state
    }
  }