

// ======================
// HERO SLIDER
// ======================

const slides = [

  {
    photo: "./assets/home2.jpg",
    title: "Study Abroad Made Easy",
    sub: "USA • UK • Canada • Australia"
  },

  {
    photo: "./assets/home3.jpg",
    title: "Get Admission in Top Universities",
    sub: "Scholarship Guidance Available"
  },

  {
    photo: "./assets/home4.jpg",
    title: "Fast Visa Approval Support",
    sub: "Expert Guidance Step-by-Step"
  }

];

let currentSlide = 0;

function updateHero() {

  const title =
    document.getElementById("heroText");

  const sub =
    document.getElementById("heroSub");

  const image =
    document.getElementById("heroImage");

  // fade out
  title.style.opacity = 0;
  sub.style.opacity = 0;
  image.style.opacity = 0;

  setTimeout(() => {

    currentSlide =
      (currentSlide + 1) % slides.length;

    title.innerText =
      slides[currentSlide].title;

    sub.innerText =
      slides[currentSlide].sub;

    image.src =
      slides[currentSlide].photo;

    // fade in
    title.style.opacity = 1;
    sub.style.opacity = 1;
    image.style.opacity = 1;

  }, 500);
}

// AUTO CHANGE
setInterval(updateHero, 4000);
// SCROLL TO CONTACT

function scrollToForm(){

  document
    .getElementById("contact")
    .scrollIntoView({
      behavior:"smooth"
    });
}

// SAVE LEAD

  emailjs.init("YOUR_PUBLIC_KEY");

  document
    .getElementById("leadForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const params = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        message: document.getElementById("msg").value,
      };

      emailjs
        .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", params)
        .then(function () {
          alert("Message sent successfully!");
          document.getElementById("leadForm").reset();
        })
        .catch(function (error) {
          alert("Failed to send message");
          console.log(error);
        });
    });


// STICKY HEADER

window.addEventListener("scroll", () => {

  const header =
    document.getElementById("header");

  if(window.scrollY > 50){
    header.classList.add("scrolled");
  }
  else{
    header.classList.remove("scrolled");
  }
});

// SCROLL ANIMATION

const observer =
  new IntersectionObserver(entries => {

    entries.forEach(entry => {

      if(entry.isIntersecting){

        entry.target.classList.add("show");
      }
    });

  }, {
    threshold:0.1
  });

document
  .querySelectorAll(".fade-in")
  .forEach(el => {
    observer.observe(el);
  });

//see more toggle
function toggleMore(id, btn) {
  const content = document.getElementById(id);

  if (content.style.display === "block") {
    content.style.display = "none";
    btn.innerText = "See More";
  } else {
    content.style.display = "block";
    btn.innerText = "See Less";
  }
}
