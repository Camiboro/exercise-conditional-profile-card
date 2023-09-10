import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {function render(variables = {}) {
  const {
    includeCover = true,
    background = null,
    avatarURL = null,
    socialMediaPosition = "right",
    twitter = null,
    github = null,
    linkedin = null,
    instagram = null,
    name = null,
    lastname = null,
    role = null,
    country = null,
    city = null
  } = variables;

  const coverHTML = includeCover && background ? `<div class="cover"><img src="${background}" /></div>` : '';
  const avatarHTML = avatarURL ? `<img src="${avatarURL}" class="photo" />` : '';
  
  const socialLinks = [
    { platform: 'twitter', icon: 'fa-twitter', url: `https://twitter.com/${twitter}` },
    { platform: 'github', icon: 'fa-github', url: `https://github.com/${github}` },
    { platform: 'linkedin', icon: 'fa-linkedin', url: `https://linkedin.com/in/${linkedin}` },
    { platform: 'instagram', icon: 'fa-instagram', url: `https://instagram.com/${instagram}` }
  ].map(link => {
    return link.platform && variables[link.platform] ? `<li><a href="${link.url}"><i class="${link.icon}"></i></a></li>` : '';
  }).join('');

  const html = `
    <div class="widget">
      ${coverHTML}
      ${avatarHTML}
      <h1>${name} ${lastname}</h1>
      <h2>${role}</h2>
      <h3>${city}, ${country}</h3>
      <ul class="position-${socialMediaPosition}">
        ${socialLinks}
      </ul>
    </div>
  `;

  document.querySelector("#widget_content").innerHTML = html;
}
}
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); //print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>Lucy Boilett</h1>
          <h2>Web Developer</h2>
          <h3>Miami, USA</h3>
          <ul class="position-right">
            <li><a href="https://twitter.com/4geeksacademy"><i class="fab fa-twitter"></i></a></li>
            <li><a href="https://github.com/4geeksacademy"><i class="fab fa-github"></i></a></li>
            <li><a href="https://linkedin.com/4geeksacademy"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/4geeksacademy"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: "alesanchezr",
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); //render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new valus
    });
  });
};
