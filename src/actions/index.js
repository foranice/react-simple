import * as ActionType from '../constants/ActionTypes'
import fetch from '../../fetch/index'
/* eslint-disable import/prefer-default-export */

export function ADD_MESSAGE(data) {
  return {
    type: ActionType.ADD_MESSAGE,
    data: Object.assign(data, {
      id: data.id + 1,
      text: `welcome use Redux${data.id}`,
    }),
  }
}
export function SEARCH_MUSIC(data) {
  return {
    type: ActionType.SEARCH_MUSIC,
    payload: fetch.searchMusic(data),
  }
}
