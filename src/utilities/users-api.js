// API modules are used to perform the AJAX
// communications between client (browser)
// and the server
import sendResquest from './send-request';
const BASE_URL = '/api/users';

export function signUp(userData) {
  return sendResquest(BASE_URL, 'POST', userData)
}

export function login(credentials) {
    return sendResquest(`${BASE_URL}/login`, 'POST', credentials)
}

