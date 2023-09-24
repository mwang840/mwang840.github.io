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
  });
});
