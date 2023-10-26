document.addEventListener("DOMContentLoaded", function () {
  const overlap = document.querySelector(".presenting");
  const start = document.querySelector("#load");
  const progressLoad = document.querySelector(".loading-progress");

  document.body.style.overflow = "hidden";
  let currentProgress = 0;
  const timeInterval = setInterval(() => {
    if (currentProgress >= 100) {
      clearInterval(timeInterval);
      overlap.style.display = "none";
      start.style = "block";
      document.body.style.overflow = "auto";
    } else {
      currentProgress += 5;
      progressLoad.style.width = `${currentProgress}%`;
    }
  });
});
