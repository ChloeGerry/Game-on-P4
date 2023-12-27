import { getFieldsElements } from "./getFieldsElements.js";
import HandleModalClass from "./HandleModalClass.js";

// open navigation bar in mobile version
const openNavigation = () => {
  const editNavigation = () => {
    const navigationMenu = document.getElementById("my-top-nav");
    if (navigationMenu.className === "top-nav") {
      navigationMenu.className += "responsive";
    } else {
      navigationMenu.className = "top-nav";
    }
  };

  const navigationIcon = document.getElementsByClassName("navigation-icon")[0];
  navigationIcon.addEventListener("click", editNavigation);
};

// check form fields
const validate = () => {
  const fieldsValidations = getFieldsElements();
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
