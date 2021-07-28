import { PUT_DATA, PUT_COMMENTS } from '../actions/constants'

const initState = {
  posts: [],
  comments: [],
}

const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case PUT_DATA:
      return {
        ...state,
        posts: action.payload,
      }
    case PUT_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      }
    default:
      return state
  }
}

export default loginReducer
