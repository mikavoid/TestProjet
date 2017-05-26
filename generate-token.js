module.exports = function () {
  let token = "";
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const max = 15
  const min = 6

  const randomTokenLength = Math.floor(Math.random() * (max - min + 1)) + min
  for (i = 0; i < randomTokenLength; i++) {
    const randomPosition = Math.floor(Math.random() * (characters.length))
    token += characters[randomPosition]
  }

  return token;
}