
function button1Clicked()
{
  document.getElementById('button-1').classList.toggle('was-clicked');
}

function button2Clicked()
{
  document.getElementById('button-2').classList.toggle('was-clicked-2');
}

function windowLoaded()
{
  console.log("loaded ok!");
  document.getElementById('button-1').addEventListener('click', button1Clicked);
  document.getElementById('button-2').addEventListener('mouseover', button2Clicked);
  // events: mouseover, mouseleave, mousedown, mouseup
}

window.onload = windowLoaded;
