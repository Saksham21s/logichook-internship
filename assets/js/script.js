/* Hamburger menu javascript starts here */
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("active");
    });
});
/* Hamburger menu javascript ends here */

/* Download Resume starts here */
function downloadResume() {
    const resumePath = "assets/images/Saksham-Resume.pdf"; 
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "Saksham-Resume.pdf";  // name on which file is to be downloaded
    link.click();  
}


/* Download Resume ends here */

// filter button for projects
const filterButtons = document.querySelectorAll('.filter-button');
const projects = document.querySelectorAll('.project');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;

        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to the clicked button
        button.classList.add('active');

        projects.forEach(project => {
            const type = project.dataset.type;
            if (filter === 'all' || filter === type) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});

// Get the button
const scrollTopBtn = document.getElementById("scrollTopBtn");

// Show button after scrolling down 200px
window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollTopBtn.classList.add("show");
    scrollTopBtn.classList.remove("hide");
  } else {
    scrollTopBtn.classList.add("hide");
    setTimeout(() => scrollTopBtn.classList.remove("show"), 300);
  }
};

// Scroll to top when button is clicked
scrollTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};



// Contact Form Data 

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = {
    fullName: contactForm.querySelector("input[placeholder='Your Full Name']").value,
    email: contactForm.querySelector("input[placeholder='Email Address']").value,
    subject: contactForm.querySelector("input[placeholder='Subject']").value,
    phone: contactForm.querySelector("input[placeholder='Phone Number']").value,
    message: contactForm.querySelector("textarea").value
  };

  console.log("Form Data:", formData);

  contactForm.reset();
});


