let form = document.getElementById("contact-max");
let form_status = document.getElementById("form_status");

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    var firstName = document.querySelector("#user_fname").value;
    var lastName = document.querySelector("#user_lname").value;
    var email = document.querySelector("#user_email").value;
    var phoneNum = document.querySelector("#user_phone").value;
    var message = document.querySelector("#user_message").value;
    const content = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNum: phoneNum,
      message: message,
    };
    const phoneRegex = /[0-9]{3}-[0-9]{3}-[0-9]{4}/;
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let validInfo = false;
    if (!phoneRegex.test(phoneNum)) {
      console.log("Invalid phone number");
      form_status.innerHTML = `<div class="error">There was an issue submitting the form. Please refresh the page and try again.</div>`;
      return false;
    } else if (!emailRegex.test(email)) {
      console.log("Invalid email");
      form_status.innerHTML = `<div class="error">There was an issue submitting the form. Please refresh the page and try again.</div>`;
      return false;
    } else if (
      content.firstName === null ||
      content.lastName === null ||
      content.message === null ||
      content.phoneNum === null ||
      content.email === null ||
      content.firstName === "" ||
      content.lastName === "" ||
      content.message === "" ||
      content.phoneNum === "" ||
      content.email === ""
    ) {
      console.log("Cant leave forms empty, please fill out the forms");
      form_status.innerHTML = `<div class="error">There was an issue submitting the form. Please refresh the page and try again.</div>`;
      return false;
    } else {
      content.phoneNum.replace();
      emailjs.init("LsnVrpJEioYyWQ1ji");
      emailjs
        .send("service_20w6kba", "template_onmrs6j", content)
        .then(function (mes) {
          console.log("Message Sent");
          firstName = "";
          lastName = "";
          email = "";
          phoneNum = "";
          message = "";
        })
        .catch(function (eror) {
          console.log("Email failed to send");
        });
    }
  });
});


function phoneFormat(input) {
  /*
      modified from:
      https://stackoverflow.com/a/68822305
  */

  input = input.replace(/\D/g, "");
  var size = input.length;
  if (size > 0) {
    input;
  }
  if (size > 3) {
    input = input.slice(0, 3) + "-" + input.slice(3, 10);
  }
  if (size > 6) {
    input = input.slice(0, 7) + "-" + input.slice(7);
  }
  return input;
}
//Thanks Evan for the function