let fotos = ["propaganda.jpg","desconto.jpg","fragancias.jpg"];
let x = 0;
funcition slideshow()
{
  if (==3)
  {
    x=0;
  }
  document.getElementById("foto").src = fotos[x];
  x++;
}

setInterval(slideshow,2000);
