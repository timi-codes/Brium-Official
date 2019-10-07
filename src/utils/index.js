/* eslint-disable func-names */
/* eslint-disable import/prefer-default-export */
export const throttle = (func, wait = 100) => {
  let timer = null;
  return function(...args) {
    if (timer === null) {
      timer = setTimeout(() => {
        func.apply(this, args);
        timer = null;
      }, wait);
    }
  };
};

/*
  userObject: Object of user fields and values to store
*/
export const storeList = (object) => {
  Object.keys(object).forEach((key) => {
    localStorage.setItem(key, object[key]);
  });
};

/*
  userFields: Array of fields to be removed from session
*/
export const removeList = (userFields) => {
  userFields.forEach((field) => localStorage.removeItem(field));
};
