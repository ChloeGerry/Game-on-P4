// create array to update fields validation
export const getFieldsElements = () => {
  const locationInput = document.getElementsByName("location");
  let isLocationInputChecked = false;

  for (let i = 0; i < locationInput.length; i++) {
    if (locationInput[i].checked) {
      isLocationInputChecked = true;
    }
  }

  const firstNameInput = document.getElementById("first-name");
  const firstNameErrorMessage = document.getElementsByClassName("first-name-error-message");
  const lastNameInput = document.getElementById("last-name");
  const lastNameErrorMessage = document.getElementsByClassName("last-name-error-message");
  const emailInput = document.getElementById("email");
  const emailErrorMessage = document.getElementsByClassName("email-error-message");
  const birthdateInput = document.getElementById("birthdate");
  const birthdateErrorMessage = document.getElementsByClassName("birthdate-error-message");
  const tournamentsInput = document.getElementById("tournaments-quantity");
  const tournamentsQuantityErrorMessage = document.getElementsByClassName("tournaments-quantity-error-message");
  const locationErrorMessage = document.getElementsByClassName("location-error-message");
  const usersConditionsInput = document.getElementById("users-conditions");
  const usersConditionsErrorMessage = document.getElementsByClassName("users-conditions-error-message");

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const tournamentsRegex = /^(\d{1,2}|[0-9][0-9])$/;

  const currentDate = new Date();
  const parts = birthdateInput.value.split("/");
  const userBirthdate = new Date(parts[2] + "/" + parts[1] + "/" + parts[0]);

  const fieldsValidations = [
    {
      messageNode: firstNameErrorMessage,
      isInvalid: !firstNameInput.value || firstNameInput.value.length < 2,
    },
    {
      messageNode: lastNameErrorMessage,
      isInvalid: !lastNameInput.value || lastNameInput.value.length < 2,
    },
    {
      messageNode: emailErrorMessage,
      isInvalid: !emailInput.value || !emailRegex.test(emailInput.value),
    },
    {
      messageNode: birthdateErrorMessage,
      isInvalid:
        !birthdateInput.value ||
        currentDate.getFullYear() - userBirthdate.getFullYear() < 18 ||
        currentDate.getFullYear() - userBirthdate.getFullYear() >= 90 ||
        (currentDate.getFullYear() - userBirthdate.getFullYear() === 18 &&
          userBirthdate.getMonth() >= currentDate.getMonth() &&
          userBirthdate.getDate() > currentDate.getDate()),
    },
    {
      messageNode: tournamentsQuantityErrorMessage,
      isInvalid: !tournamentsInput.value || !tournamentsRegex.test(tournamentsInput.value),
    },
    {
      messageNode: locationErrorMessage,
      isInvalid: !isLocationInputChecked,
    },
    {
      messageNode: usersConditionsErrorMessage,
      isInvalid: !usersConditionsInput.checked,
    },
  ];

  return fieldsValidations;
};
