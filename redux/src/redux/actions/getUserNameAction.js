export const getUsername = userName => {
  return {
    type: 'GET_USER_NAME',
    payload: {
      userName: userName,
    },
  };
};

