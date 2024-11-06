// toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".nav");

// scroll sections
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
}

function downloadCV() {
    window.location.href = 'https://github.com/MS2716/MaitriSuthar/tree/main/download/Maitrisuthar.pdf';  
}
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      // active navbar Links
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });

      //active section for animation on scroll
      sec.classList.add('show-animate');
    }
    //if want to show the animation that repeats on scroll then use this 
    else{
      sec.classList.remove('show-animate');
    }
  });

  // sticky header
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // remove toggle icon and navbar when click navbar links (scroll)
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");

  // animation footer on scroll
};

const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents default form submission

        // Create a FormData object to send data to the server
        const formData = new FormData(form);
        
        fetch('send_email.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                document.getElementById('responseMessage').innerText = 'Submitted successfully!';
                form.reset(); // Reset the form fields
            } else {
                document.getElementById('responseMessage').innerText = 'Submission failed, please try again.';
            }
        })
        .catch(error => {
            document.getElementById('responseMessage').innerText = 'There was an error, please try again later.';
        });
    });
