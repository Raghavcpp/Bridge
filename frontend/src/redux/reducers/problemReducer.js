import ACTIONS from '../actions/'

const initialState = {
    problems:[],
    currentProblem:null
}

export const problemReducer = (state =initialState, action) => {
  switch (action.type) {

    case ACTIONS.GET_ALL_PROJECTS:
      return {
        ...state,
        problems:[...action.payload]
      }
      case ACTIONS.GET_PROJECT:
        return {
          ...state,
          currentProblem:action.payload
        }
    case ACTIONS.ADD_PROJECT:
        return {
            ...state,
            problems:[action.payload.problems.result, ...state.problems]
        }
    case ACTIONS.UPDATE_PROJECT:
        const updateData = action.payload.problems.result
        const filtered = state.problems.map((problem) => problem._id === updateData._id ? {...updateData}:problem);
       
        return {
            ...state,
            problems:[...filtered]
        }
     case ACTIONS.DELETE_PROJECT:
          // const idData = action.payload.problems.result
          return {
              ...state,
              problems:[...filtered]
          }
    default:
      return state

  }
}


