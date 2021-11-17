// DOM elements

const hustleList = document.querySelector('.hustles');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');
const setupUI = (user) => {
  if (user) {
    // account info
    const html = `
      <div>Logged in as ${user.email}</div>
    `;
    accountDetails.innerHTML = html;
    // toggle user UI elements
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');
  } else {
    // clear account info
    accountDetails.innerHTML = '';
    // toggle user elements
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block');
  }
};



// setup hustles
const setupHustles = (data) => {

if (data.length) {
  let html = '';
  data.forEach(doc => { 
    const hustle = doc.data();
    const li = `
      <li>
        <div class="card-panel grid col-span-2 bg-blue-600 m-2 rounded overflow-hidden">
          <img class="block center-align" src="/img/sample.jpg">
        <div class="recipe-title grey lighten-4"> ${hustle.title} </div>
        <div class="recipe-title "> ${hustle.description} </div>
        <div class="recipe-title "> E ${hustle.price} </div>
        <div class="recipe-titlewhite"> ${hustle.location} </div>
        <div class="recipe-ingredients blue"> ${hustle.verified} </div>
       </div>
      </li>
    `;
    html += li;
  });

  hustleList.innerHTML = html
} else {
  hustleList.innerHTML = '<h5 class="center-align">Welcome to Side Hustle, Please Login to view Hustles</h5>';
}

};




// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});





document.addEventListener('DOMContentLoaded', function() {
  // nav menu
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, {edge: 'right'});
  // add recipe form
  const forms = document.querySelectorAll('.side-form');
  M.Sidenav.init(forms, {edge: 'left'});
});

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "";
    moreText.style.display = "inline";
  }
}

