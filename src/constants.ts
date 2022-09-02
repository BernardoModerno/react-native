import axios from 'axios';

const constants = axios.create({
  baseURL: 'https://reqres.in/api'
})

export enum Color {
  PRIMARY = '#f2b10c',
  BACKGROUND_DARK = '#252C39'
}

export { constants };



