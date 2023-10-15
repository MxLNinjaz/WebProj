const shortbtn = document.getElementById("btn-shortener");
const reloadbtn = document.getElementById("btn-reload");

shortbtn.addEventListener("click", shortenURL);

function shortenURL() {
  var orginalUrl = document.getElementById("orginalUrl").value;
  var apiURL =
    "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(orginalUrl);
  shortenedURLTextarea = document.getElementById("shortenedOutput");

  fetch(apiURL)
    .then((response) => response.text())
    .then((data) => {
      shortenedURLTextarea.value = data;
    })
    .catch((error) => {
      shortenedURLTextarea.value = "Error: Unable to Shoten URL!";
    });
}

reloadbtn.addEventListener("click", () => {
  location.reload();
});
