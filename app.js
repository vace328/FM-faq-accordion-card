const qHeaders = document.getElementsByClassName("question-header");

Array.from(qHeaders).forEach((question) => {
  question.addEventListener("click", (e) => {
    let activeElements = document.querySelector(".question-header.active");
    if (activeElements || activeElements != null) {
      activeElements.classList.remove("active");
    }
    
    e.target.classList.add("active");

    if (e.target.classList.length > 1) {
      if (activeElements || activeElements != null) {
        activeElements.classList.remove("active");
      }
    }
  });
});
