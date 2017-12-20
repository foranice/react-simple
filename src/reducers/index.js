import { combineReducers } from 'redux'
import addmessage from './addmessage'
import searchmusic from './searchmusic'

const rootReducer = combineReducers({
  addmessage,
  searchmusic,
})

export default rootReducer
