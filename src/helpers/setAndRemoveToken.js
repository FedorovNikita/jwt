export const setTokens = (accessToken, refreshToken) => {
  localStorage.setItem('token', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
};

export const setAcsessTokens = (accessToken) => {
  localStorage.setItem('token', accessToken);
};

export const setRefreshTokens = (refreshToken) => {
  localStorage.setItem('refreshToken', refreshToken);
};

export const removeTokens = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('refreshToken');
};

export const getTokens = () => {
  const token = localStorage.getItem('token');
  const refreshToken = localStorage.getItem('refreshToken');

  return {
      token,
      refreshToken,
  };
};
