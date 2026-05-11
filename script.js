// ======================
// HERO SLIDER
// ======================

const slides = document.querySelectorAll(".hero-slide");

const heroText = document.getElementById("heroText");

const heroSub = document.getElementById("heroSub");

const heroData = [

  {
    title: "Study Abroad Made Easy",
    sub: "USA • UK • Canada • Australia"
  },

  {
    title: "Get Admission in Top Universities",
    sub: "Scholarship Guidance Available"
  },

  {
    title: "Fast Visa Approval Support",
    sub: "Expert Guidance Step-by-Step"
  }

];

let currentSlide = 0;

// FIRST SLIDE ACTIVE
if(slides.length > 0){
  slides[0].classList.add("active");
}

function updateHero() {

  // REMOVE ACTIVE
  slides.forEach(slide => {
    slide.classList.remove("active");
  });

  // NEXT INDEX
  currentSlide =
    (currentSlide + 1) % slides.length;

  // SHOW NEXT SLIDE
  slides[currentSlide]
    .classList.add("active");

  // TEXT ANIMATION
  heroText.style.opacity = 0;
  heroSub.style.opacity = 0;

  setTimeout(() => {

    heroText.innerText =
      heroData[currentSlide].title;

    heroSub.innerText =
      heroData[currentSlide].sub;

    heroText.style.opacity = 1;
    heroSub.style.opacity = 1;

  }, 500);
}

// AUTO SLIDER
setInterval(updateHero, 4000);


// ======================
// SCROLL TO CONTACT
// ======================

function scrollToForm(){

  const contact =
    document.getElementById("contact");

  if(contact){
    contact.scrollIntoView({
      behavior:"smooth"
    });
  }
}


// ======================
// EMAILJS INIT
// ======================

(function(){

  emailjs.init("YOUR_PUBLIC_KEY");

})();


// ======================
// CONTACT FORM
// ======================

const leadForm =
  document.getElementById("leadForm");

if(leadForm){

  leadForm.addEventListener("submit", function(e){

    e.preventDefault();

    const params = {

      name:
        document.getElementById("name").value,

      phone:
        document.getElementById("phone").value,

      email:
        document.getElementById("email").value,

      message:
        document.getElementById("msg").value
    };

    emailjs.send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      params
    )

    .then(function(){

      alert("Message sent successfully!");

      leadForm.reset();

    })

    .catch(function(error){

      alert("Failed to send message");

      console.log(error);

    });

  });

}


// ======================
// STICKY HEADER
// ======================

window.addEventListener("scroll", () => {

  const header =
    document.getElementById("header");

  if(window.scrollY > 50){

    header.classList.add("scrolled");

  } else {

    header.classList.remove("scrolled");
  }

});


// ======================
// SCROLL ANIMATION
// ======================

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


// ======================
// SEE MORE TOGGLE
// ======================

function toggleMore(id, btn) {

  const content =
    document.getElementById(id);

  if(content.classList.contains("show")){

    content.classList.remove("show");

    btn.innerText = "See More";

  } else {

    content.classList.add("show");

    btn.innerText = "See Less";
  }

}