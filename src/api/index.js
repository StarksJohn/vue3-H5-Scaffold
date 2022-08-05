export const getUserInfoAPI = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name:'userName' })
    }, 3000)
  })
}
