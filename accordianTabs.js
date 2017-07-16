const openTab = (selectedTabBody, tab) => {

    var x = document.getElementsByClassName("tab-body-container");
    var y = document.getElementsByClassName('tab-btn');
    for (var i = 0; i < x.length; i++) {
       x[i].style.display = "none";
       y[i].classList.remove('active')
    }

    document.getElementById(tab).classList.add('active')

    document.getElementById(selectedTabBody).style.display = "flex";
}

const openBar = (bar, panel) => {
  var selectedBar = document.getElementById(bar)
  var selectedPanel = document.getElementById(panel)

  if(selectedPanel.style.display == 'flex') {
    selectedPanel.style.display = 'none'
    selectedBar.classList.remove('active-two')
  } else {
    var allPanels = document.getElementsByClassName("panel");
    var allBars = document.getElementsByClassName('accordion-bar')
    
    for (var j = 0; j < allPanels.length; j++) {
      allPanels[j].style.display = "none";
      allBars[j].classList.remove('active-two')
    }

    selectedBar.classList.add('active-two')
    selectedPanel.style.display = 'flex'
  }
}
