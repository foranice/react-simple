import * as ActionType from '../constants/ActionTypes';
/* eslint-disable import/prefer-default-export */
export function ADD_MESSAGE(data) {
  console.log(data);
  return {
    type: ActionType.ADD_MESSAGE,
    data: Object.assign(data, {
      id: data.id + 1,
      text: `welcome use Redux${data.id}`,
    }),
  };
}
