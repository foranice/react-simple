import { SEARCH_MUSIC } from '../constants/ActionTypes'

const initialState = {
  searchres: [],
}

export default function searchmusic(state = initialState, action) {
  switch (action.type) {
    case SEARCH_MUSIC:
      if (!action.error) {
        let res
        try {
          res = Object.entries(action.payload).filter(p => p[0] === 'list')[0][1].map(p => ({ id: p.songid, songname: p.songname }))
        } catch (err) {
          res = []
        }
        console.log(res)
        return Object.assign({}, state, {
          searchres: res,
        })
      }
      return {}
    default:
      return state
  }
}
