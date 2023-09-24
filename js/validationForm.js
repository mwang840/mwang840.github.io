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
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let validInfo = false;
    if (!phoneRegex.test(phoneNum)) {
      console.log("Invalid phone number");
      return false;
    } else if (!emailRegex.test(email)) {
      console.log("Invalid email");
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
      return false;
    } else {
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
