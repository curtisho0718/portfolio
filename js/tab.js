function openProject(project) {
    var i;
    var x = document.getElementsByClassName("project-showcase");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    document.getElementById(project).style.display = "block"; 
  }