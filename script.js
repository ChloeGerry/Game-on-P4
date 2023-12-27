import HandleModalClass from "./HandleModalClass.js";

// open navigation bar in mobile version
const openNavigation = () => {
  const editNavigation = () => {
    const navigationMenu = document.getElementById("my-top-nav");
    if (navigationMenu.className === "top-nav") {
      navigationMenu.className += " responsive";
    } else {
      navigationMenu.className = "top-nav";
    }
  };

  const navigationIcon = document.getElementsByClassName("navigation-icon")[0];
  navigationIcon.addEventListener("click", editNavigation);
};

// check form fields
const validate = () => {
  const locationInput = document.getElementsByName("location");
  let isLocationInputChecked = false;

  for (let i = 0; i < locationInput.length; i++) {
    if (locationInput[i].checked) {
      isLocationInputChecked = true;
    }
  }

  // Form regex
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const tournamentsRegex = /^(\d{1,2}|[0-9][0-9])$/;

  // DOM elements
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

  // dates const
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

  let areAllFieldsValids = true;

  fieldsValidations.forEach((field) => {
    field.messageNode[0].setAttribute("data-error-visible", field.isInvalid ? "true" : "false");

    if (field.isInvalid) {
      areAllFieldsValids = false;
      return;
    }
  });

  if (areAllFieldsValids) {
    console.log(
      "firstname :",
      firstNameInput.value,
      "lastname :",
      lastNameInput.value,
      "email :",
      emailInput.value,
      "birthdate :",
      birthdateInput.value,
      "tournaments :",
      tournamentsInput.value,
      "is locationInput checked :",
      isLocationInputChecked,
      "are users conditions checked :",
      usersConditionsInput.checked
    );

    form.style.display = "none";

    const validationMessage = new HandleModalClass();
    validationMessage.lauchValidationMessage();

    firstNameInput.value = "";
    lastNameInput.value = "";
    emailInput.value = "";
    birthdateInput.value = "";
    tournamentsInput.value = "";
    for (let i = 0; i < locationInput.length; i++) {
      locationInput[i].checked = false;
      isLocationInputChecked = false;
    }
  }
};

// submit the form
const form = document.getElementsByClassName("form")[0];
form.addEventListener("submit", (event) => {
  event.preventDefault();
  validate();
});

// orchestrator for all functions
const run = () => {
  const modalClass = new HandleModalClass();

  openNavigation();
  modalClass.openModal();
  modalClass.closeModal();
};

run();
