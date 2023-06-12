function generateKey(length, characters) {
  let result = ''
  const charactersLength = characters.length

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength)
    result += characters[randomIndex]
  }

  return result
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
const length = 16

const key = generateKey(length, characters)
console.log(key)
