export default {
  user(state,payload){
    state.user =  payload.user;
  },
  token(state,payload){
    console.log('mutations.js token payload=',payload)
    state.token =  payload.token;
    if (!payload.token) {
      sessionStorage.removeItem('token')
    } else {
      sessionStorage.setItem('token',state.token)
    }
  },
};
