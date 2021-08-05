  import axios from 'axios'
  import { getItem } from './localStorage'

  let baseEndpoint = ''
  let temporaryEndpoint = ''

  const getBaseHeaders = () => ({
    Accept: 'application/json',
    'Content-Type': 'application/json',
  })

  export const setBaseEndpoint = (ep) => {
    baseEndpoint = ep
  }

  export const setTemporaryEndpoint = (ep) => {
    temporaryEndpoint = ep
  }

  const callApi = async (url, { headers = {}, params = {}, data, ...restOptions }) => {
    const config = {
      url: temporaryEndpoint ? `${temporaryEndpoint}${url}` : `${baseEndpoint}${url}`,
      headers: { ...getBaseHeaders(), ...headers },
      params: { ...params },
      data,
      ...restOptions,
    }

    console.log(config)

    temporaryEndpoint = ''

    if (restOptions.method === 'POST' && !config.data) {
      config.data = {}
    }

    const response = await axios.request(config)
    return response
  }

  export default {
    get: (url, options) => callApi(url, { ...options, method: 'GET' }),
    post: (url, options) => callApi(url, { ...options, method: 'POST' }),
    put: (url, options) => callApi(url, { ...options, method: 'PUT' }),
    delete: (url, options) => callApi(url, { ...options, method: 'DELETE' }),
    patch: (url, options) => callApi(url, { ...options, method: 'PATCH' }),
  }
