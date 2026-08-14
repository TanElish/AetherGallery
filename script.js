/* Function called when page loads to automatically add tabindex attributes */
function addTabFocus() {
  // Step 9a: Console log to verify event trigger
  console.log("onload event triggered: Adding tabindex attributes to images.");

  // Step 9b & 9c: Loop through all gallery images and assign tabindex
  let images = document.querySelectorAll(".preview");
  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
  }
}

/* Step 3 & 6: Updates display on mouseover / focus */
function upDate(previewPic) {
  console.log("Event triggered (mouseover/focus):", previewPic.alt);

  let imageDiv = document.getElementById("image");
  imageDiv.innerHTML = previewPic.alt;
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

/* Step 4 & 6: Resets display on mouseleave / blur */
function undo() {
  console.log("Event triggered (mouseleave/blur): resetting preview.");

  let imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('')";
  imageDiv.innerHTML = "Hover over or focus on an image below to display here.";
}
