# Ex.08 Design of Interactive Image Gallery
## Date:

## AIM:
To design a web application for an inteactive image gallery with minimum five images.

## DESIGN STEPS:

### Step 1:
Clone the github repository and create Django admin interface.

### Step 2:
Change settings.py file to allow request from all hosts.

### Step 3:
Use CSS for positioning and styling.

### Step 4:
Write JavaScript program for implementing interactivity.

### Step 5:
Validate the HTML and CSS code.

### Step 6:
Publish the website in the given URL.

## PROGRAM :
```
HTML:
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        Image gallery
    </title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
</head>

<body>
    <h1>
        Image Gallery of Famous places in Tamilnadu .
    </h1>
    <div class="container">
        <div class="gallery">
            <img class="preview" src="chennai.png" alt="Chennai" onmouseover="update(this);" onmouseout="undo();">
            <img class="preview" src="kanyakumari.png" alt="Kanyakumari" onmouseover="update(this);"
                onmouseout="undo();">
            <img class="preview" src="kodaikanal.png" alt="Kodaikanal" onmouseover="update(this);" onmouseout="undo();">
            <img class="preview" src="thanjavur.png" alt="Thanjavur" onmouseover="update(this);" onmouseout="undo();">

        </div>
        <div id="image">
            Hover over an image below to display here.
        </div>
    </div>
</body>

</html>

CSS:
@import url('https://fonts.googleapis.com/css2?family=Delius&family=Pacifico&family=Quicksand:wght@300..700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

body {
    margin: 2%;
    font-family: "Roboto", serif;
    font-weight: 700;
    font-style: normal;
    background-color: #c7cbb7;
    color: rgb(255, 255, 255);
    text-align: center;
}

h1 {
    margin-bottom: 20px;
    font-size: 2em;
    color: rgb(72, 16, 16);
    text-align: left;
}

.container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
}

.gallery {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding: 10px;
    border: 2px solid #4f0909;
    background-color: #d7e6cf;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
}

.preview {
    width: 150px;
    border: 3px solid transparent;
    transition: border-color 0.3s, transform 0.3s;
    cursor: pointer;
    border-radius: 4px;
}

.preview:hover {
    border-color: #3a080b;
    transform: scale(1.05);
}

#image {
    width: 500px;
    height: 485px;
    border: 5px solid #333;
    background-color: hsl(65, 33%, 93%);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    color: #3f0e0e;
    font-size: 1.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    box-shadow: 1 4px 8px rgba(74, 2, 2, 0.2);
}

img {
    width: 100%;
    border-radius: 4px;
}

JAVASCRIPT:
function update(imgElement) {
    const displayDiv = document.getElementById("image");
    displayDiv.innerHTML = `<img src="${imgElement.src}" alt="${imgElement.alt}" style="max-width: 100%; max-height: 100%;">`;
}

function undo() {
    const displayDiv = document.getElementById("image");
    displayDiv.innerHTML = "Hover over an image below to display here.";
}


```

## OUTPUT:



## RESULT:
The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.
