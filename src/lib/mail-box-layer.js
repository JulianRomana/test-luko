import axios from 'axios'

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const ACCESS_KEY = process.env.VUE_APP_MAILBOXLAYER_ACCESS_KEY

const validateEmail = email => EMAIL_REGEX.test(email.toLowerCase())

const checkEmail = async email => {
  try {
    const { data } = await axios.get(`https://apilayer.net/api/check?access_key=${ACCESS_KEY}&email=${email}&smtp=0&format=1`)

    if (data.format_valid) return data.format_valid
    else throw new Error('Email is invalid')
  } catch(error) {
    return error
  }
}

export {
  validateEmail,
  checkEmail,
}