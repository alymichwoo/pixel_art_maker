// Select color input
let color = document.getElementById('colorPicker');

// Select size input
let size = document.getElementById('sizePicker');
const table = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()
size.addEventListener('submit', function(event) {
  event.preventDefault();
  makeGrid();
});

// Function that starts to creat the canvas
function makeGrid() {
  table.innerHTML = "";
  let height = document.getElementById('inputHeight').value;
  let width = document.getElementById('inputWidth').value;

  // Creates table rows and columns for the canvas
  for (x = 1; x <= height; x++) {
    let tableRows = document.createElement('tr');
    table.appendChild(tableRows);
    for (y = 1; y <= width; y++) {
      let tableColumns = document.createElement('td');
      tableRows.appendChild(tableColumns);

      // Fills individual cells with selected color
      tableColumns.addEventListener('click', function(event) {
        tableColumns.style.background = color.value;
      });
    }
  }
}
