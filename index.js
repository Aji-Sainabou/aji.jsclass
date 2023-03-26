function toggleDetails(id) {
  let detailsElement = document.getElementById(`details-${id}`);
  if (detailsElement.classList.contains("active")) {
    detailsElement.classList.remove("active");
  } else {
    detailsElement.classList.add("active");
  }
}
