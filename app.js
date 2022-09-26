const questions = document.getElementsByClassName("question");
const qHeaders = document.getElementsByClassName("question-header");
const qBodies = document.getElementsByClassName("question-body");


// Menu
// Array.from(qHeaders).forEach((question) => {
//     question.addEventListener('click', e => {
//         document.querySelector('.question-header.active').classList.remove('active');
//         e.target.classList.toggle('active');

//         console.log(e);
//         // console.log(e.currentTarget);
//         console.log(e.target);
//     });
//   });


Array.from(qHeaders).forEach((question) => {
    question.addEventListener('click', e => {
        let activeElements = document.querySelector('.question-header.active'); 
         if (activeElements || activeElements != null) {
            activeElements.classList.remove('active');
        }        
        e.target.classList.add('active');
        
        if (e.target.classList.length > 1 ) {
            if (activeElements || activeElements != null) {
                activeElements.classList.remove('active');
            }
        }
       

        // na klik,
        //     ako bilo koji od elemenata ima A klasu, ukloni je i dodaj je samo target element
        //         ako target ima A klasu, ukloni je svima
       
        // console.log(e);
        // console.log(e.currentTarget);
        // console.log(e.target);
    });
  });
