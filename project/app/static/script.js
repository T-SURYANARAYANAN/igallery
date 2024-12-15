function update(imgElement) {
    const displayDiv = document.getElementById("image");
    displayDiv.innerHTML = `<img src="${imgElement.src}" alt="${imgElement.alt}" style="max-width: 100%; max-height: 100%;">`;
}

function undo() {
    const displayDiv = document.getElementById("image");
    displayDiv.innerHTML = "Hover over an image below to display here.";
}
