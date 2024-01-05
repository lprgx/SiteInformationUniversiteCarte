function showLoginForm() {
    var loginForm = document.getElementById("loginForm");
    var signupForm = document.getElementById("signupForm");
  
    loginForm.style.display = "block";
    signupForm.style.display = "none";
  }
  
  function showSignupForm() {
    var loginForm = document.getElementById("loginForm");
    var signupForm = document.getElementById("signupForm");
  
    loginForm.style.display = "none";
    signupForm.style.display = "block";
  
    // Récupération du menu déroulant
    var selectElement = document.getElementById("signupMenu");
  
    // Chargement du fichier GeoJSON externe
    fetch("json/universite.geojson")
      .then(response => response.json())
      .then(data => {
        // Ajout des options basées sur le GeoJSON
        data.features.forEach((feature) => {
          var option = document.createElement("option");
          option.value = JSON.stringify(feature.geometry.coordinates);
          option.text = feature.properties.name;
          selectElement.appendChild(option);
        });
      })
      .catch(error => {
        console.error('Erreur de chargement du fichier GeoJSON :', error);
      });
  }
  