//<<-------------------------------------Validation for Body ------------------------------------------->>
const isValidBody = function (body) {
  return Object.keys(body).length > 0;
};

//<<------------------------------Validation for Intern Name ------------------------------------------->>
const isValidintern = function (name) {
  return /^[ a-zA-Z ]+$/.test(name);
};

//<<---------------------------------Validation for College Name ------------------------------------->>
const isValid = function (value) {
  if (typeof value === "undefined" || typeof value === null) return false;
  if (typeof value === "string" && value.trim().length >= 1) return true;
  // return true;
};

//<<--------------------------------------------Validation for Email --------------------------------->>
const isValidEmail = function (email) {
  return /^[A-Za-z0-9.]{2,}@[A-Za-z]{2,}[.]{1}[A-Za-z.]{2,3}$/.test(email);
};

//<<-------------------------------------Validation for Mobile No. ----------------------------------->>
const isValidMobile = function (mobile) {
  return /^([+]\d{2})?\d{10}$/.test(mobile);
};


//<<============================Imported Validation Function Modules ===========================>>//

module.exports = {
  isValidBody,
  isValid,
  isValidEmail,
  isValidMobile,
  isValidintern,
};


