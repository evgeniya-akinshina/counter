import axios from 'axios'
import { AxiosService } from './types'

export const Axios: AxiosService = axios.create({
	baseURL: '',
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
})
