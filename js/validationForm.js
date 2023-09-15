$(document).ready(function () {
  $("#go").on("click", function (event) {
    var initId = "";
    emailjs.init(initId);
    let firstName = document.forms["Information"]["fname"].value;
    let lastName = document.forms["Information"]["lname"].value;
    let email = document.forms["Information"]["user_email"].value;
    let phoneNum = document.forms["Information"]["user_phone"].value;
    let message = document.forms["Information"]["user_message"].value;
    const emailValidator = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    //Conditions to add if any of those forms is null or empty
    if (
      firstName === null ||
      lastName === null ||
      email === null ||
      phoneNum === null ||
      message === null ||
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      phoneNum === "" ||
      message === ""
    ) {
      return false;
    } else if (email !== null && emailValidator.test(email) === false) {
      return false;
    }
  });
});
