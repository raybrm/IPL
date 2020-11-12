// Create HTML table based on a array
// on passe les fonctions onSave, onDelete, .. en paramètres
function create_dynamic_HTML_table(
  targetHtmlElementId,
  arrayToPrint,
  onDelete,
  onSave,
  onChange,
  contentEditable,
  objectPropertiesToBeSaved, 
) {
  // Get the div container whithin we want to create a dynamic html table
  let div_container = document.getElementById(targetHtmlElementId);
  // Clear any content in the div_container
  div_container.innerHTML = "";
  let myTable = document.createElement("table");
  // Set the classes names with bootstrap
  myTable.className = "table table-bordered text-nowrap";
  // Append the new empty table element to the div container
  div_container.appendChild(myTable);

  // Set the table header
  let headerLine = document.createElement("tr");
  myTable.appendChild(headerLine);
  const objectToPrint = arrayToPrint[0];
  for (const property in objectToPrint) {
    let th = document.createElement("th");
    th.innerHTML = property;
    headerLine.appendChild(th);
  }

  //add header if onDelete
  if (onDelete) headerLine.appendChild(document.createElement("th"));
  //add header if onSave
  if (onSave) headerLine.appendChild(document.createElement("th"));

  // Set the table body
  for (let x = 0; x < arrayToPrint.length; x++) {
    // For each line, add a <tr> element
    let myLine = document.createElement("tr");
    // For each <tr> element, append it to the <tbody> element
    myTable.appendChild(myLine);

    // Loop through all object properties
    const objectToPrint = arrayToPrint[x];
    for (const property in objectToPrint) {
      if (property === "id") {
        // Add an id to the line
        myLine.id = objectToPrint[property];
      }
      let myCell = document.createElement("td");
      myCell.innerHTML = objectToPrint[property];
      if (property !== "id" && contentEditable) 
        myCell.contentEditable=true;
      myLine.appendChild(myCell);
    }
    
    // si on a donné la fonction on delete
    if (onDelete) {
      //add a delete button in a new cell
      let myCell = document.createElement("td");
      myLine.appendChild(myCell);
      let button = document.createElement("button");
      button.value = myLine.id;
      button.className = "btn btn-primary";
      button.innerText = "Delete";
      myCell.appendChild(button);

      button.addEventListener("click", e => {
        e.preventDefault();
        const id = e.target.value;
        onDelete(id);
      });

      //add an event listener on the added line to manage content edition (input event)
      if(onChange){
        myLine.addEventListener("input", e => {
          //it is the td that are clicked
          console.log("change::",e.target.innerText); 
          //get the id given on the parent tr         
          const tr=e.target.parentNode;   
          onChange(tr.id);
      });
      }
      
    }
    //console.log("onSave:",onSave);
    if (onSave) {
      //add a save button in a new cell
      let myCell = document.createElement("td");
      myLine.appendChild(myCell);
      let button = document.createElement("button");
      button.value = myLine.id;
      button.className = "btn btn-primary";
      button.innerText = "Save";
      myCell.appendChild(button);

      button.addEventListener("click", e => {
        e.preventDefault();
        const id = e.target.value;
        //get the line (tr) associated to the button
        const tr=e.target.parentNode.parentNode; 
        //conversion from ListNodes to Array
        const elements = [...tr.childNodes];
        //create an object with all the attributes corresponding to columns
        let item={};
        let i=0;
        if(objectPropertiesToBeSaved)
          {
            objectPropertiesToBeSaved.forEach(property => {
              item[property]=elements[i].innerHTML;
              i++;
            })

          }
          
        onSave(id,item);
      });
    }
  }
}

export default create_dynamic_HTML_table;
