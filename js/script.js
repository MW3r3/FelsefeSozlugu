const dataPath = "./data/dictionary.json";

fetch(dataPath)
  .then((response) => response.json())
  .then((data) => {
    const searchInput = document.getElementById("term");
    const searchButton = document.getElementById("search-button");
    const definitionText = document.getElementById("definition-text");

    searchButton.addEventListener("click", function () {
      const searchTerm = searchInput.value.toLowerCase();
      const definition = data.find((item) => item.term === searchTerm);

      if (definition) {
        definitionText.textContent = definition.desc;
        document.getElementById("definition").style.display = "block";
      } else {
        definitionText.textContent = "No definition found for this term.";
      }
    });

    searchInput.addEventListener("keyup", function (event) {
      if (event.key === "Enter") {
        searchButton.click();
      }
    });
  })
  .catch((error) => {
    console.error("Error loading dictionary data", error);
  });
