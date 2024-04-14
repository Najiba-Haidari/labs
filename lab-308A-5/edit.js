export  function handleEdit(event) {
    event.preventDefault();
    console.log(event.target.parentNode.parentNode);
    let selectedTr = event.target.parentNode.parentNode;
  
    var newProjectName = prompt("New Name of the project??");
    if (newProjectName === "") {
      newProjectName = projectName.value;
    } else {
      selectedTr.firstChild.textContent = newProjectName;
    }
  
    //  projectName.value = selectedTr.firstChild.textContent
    var newProjectLanguage = prompt("New Language of the project??");
    if (newProjectLanguage === "") {
      newProjectLanguage = projectLanguage.value;
    } else {
      selectedTr.firstChild.nextSibling.textContent = newProjectLanguage;
    }
  
    var newProjectDate = prompt("New Date of the project in YYYY-MM-DD format??");
    if (newProjectDate === "") {
      newProjectDate = projectDate.value;
    } else {
      selectedTr.firstChild.nextSibling.nextSibling.textContent = newProjectDate;
    }
  
    var newProjectStatus = prompt("New Status of the project??");
    if (newProjectStatus === "") {
      newProjectStatus = projectStatus.value;
    } else {
      selectedTr.firstChild.nextSibling.nextSibling.nextSibling.textContent =
        newProjectStatus;
    }
}