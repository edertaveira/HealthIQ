/* ACTION TYPES */
export const USER_LOGGED_IN = 'USER_LOGGED_IN';
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT';

/* ACTION CREATORS */
export function userLoggedInAction(clientId) {
  console.log(clientId);
  return { type : USER_LOGGED_IN, clientId }
}

export function userLoggedOutAction() {
  return { type : USER_LOGGED_OUT }
}