import apiClient from '../../untils/apiClient'
import PATHS from '../paths'

// eslint-disable-next-line import/prefer-default-export
export const getPost = () => apiClient.get(PATHS.post)
export const getTodo = () => apiClient.get(PATHS.todo)
export const getComent = () => apiClient.get(PATHS.comment)
