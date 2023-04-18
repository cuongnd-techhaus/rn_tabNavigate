export const getUser = user => {
  return {
    type: 'LOGIN',
    payload: {
      userName: user.userName,
      password: user.password,
    },
  };
};
