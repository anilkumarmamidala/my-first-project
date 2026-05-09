// HERO SLIDER

const slides = [
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

function updateHero(){

  const title = document.getElementById("heroText");
  const sub = document.getElementById("heroSub");

  title.style.opacity = 0;
  sub.style.opacity = 0;

  setTimeout(() => {

    title.innerText = slides[currentSlide].title;
    sub.innerText = slides[currentSlide].sub;

    title.style.opacity = 1;
    sub.style.opacity = 1;

    currentSlide =
      (currentSlide + 1) % slides.length;

  },300);
}

setInterval(updateHero,3000);

// SCROLL TO CONTACT

function scrollToForm(){

  document
    .getElementById("contact")
    .scrollIntoView({
      behavior:"smooth"
    });
}

// SAVE LEAD

const form =
  document.getElementById("leadForm");

form.addEventListener("submit", saveLead);

function saveLead(e){

  e.preventDefault();

  const lead = {

    name:
      document.getElementById("name").value,

    phone:
      document.getElementById("phone").value,

    email:
      document.getElementById("email").value,

    message:
      document.getElementById("msg").value
  };

  let leads = [];

  try{
    leads =
      JSON.parse(localStorage.getItem("leads"))
      || [];
  }
  catch{
    leads = [];
  }

  leads.push(lead);

  localStorage.setItem(
    "leads",
    JSON.stringify(leads)
  );

  alert("Lead Submitted Successfully!");

  form.reset();
}

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