import {UPDATE_EMAIL} from '../reducers/infoReduce.js';

export const updateEmail = email => async dispatch => {
  try {
    await console.log('Bắt đầu update');
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1500);
    });

    dispatch({
      type: UPDATE_EMAIL,
      payload: {
        email: email,
      },
    });
    await console.log('Đã update');
  } catch (error) {}
};
