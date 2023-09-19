$(document).ready(function() {
  $("#go").on("click", function (event) {
    const information = {
      firstName: document.getElementById("fname").value,
      lastName: document.getElementById("lname").value,
      email: document.getElementById("user_email").value,
      phoneNum: document.getElementById("user_phone").value,
      message: document.getElementById("user_message").value
    }
    const emailValidator = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    const serviceID = "service_pdhhje";
    const templateID = "template_onmrs6j";
    const publicKey = "LsnVrpJEioYyWQ1ji";
    emailjs.init(publicKey);
    //Conditions to add if any of those forms is null or empty
    if (
      information.firstName === null ||
      information.lastName === null ||
      information.email === null ||
      information.phoneNum === null ||
      information.message === null ||
      information.firstName === "" ||
      information.lastName === "" ||
      information.email === "" ||
      information.phoneNum === "" ||
      information.message === ""
    ) {
      return false;
    } else if (information.email !== null && emailValidator.test(email) === false) {
      return false;
    }
    else{
      emailjs.send(serviceID, templateID, information).then(
        result => {
          document.getElementById("fname").value = "";
          document.getElementById("lname").value = "";
          document.getElementById("user_email").value = "";
          document.getElementById("user_phone").value = "";
          document.getElementById("user_message").value = "";
          console.log(result);
        }
      )
      .catch((err)=> console.log(err));
    }
  });
});
