const colorpicker = document.getElementById('colorpicker');


changeColor = (ev) => {
   const color = ev.target.value;

   //Changement de couleur sur le titre
   let title = document.querySelector('h1');
   title.style.color = color;

   //changement Background NAV et aside
   let bgColor = document.querySelectorAll('ul')
   bgColor.forEach( (element) => {
       element.style.backgroundColor = color;
   });

   //Changement border articles 
   let articles = document.querySelectorAll('article')
   articles.forEach( (element) => {
       element.style.border = 1 + 'px' + ' ' + 'solid' + ' ' + color;
   });

   //Changement couleur texte lien actif
   let actives = document.querySelectorAll('.active')
   actives.forEach( (element) => {
    element.firstChild.style.color = color;
   });

   //Changement BG Badge
   let logo = document.querySelector('.circle')
   logo.style.backgroundColor = color;

  
}

colorpicker.addEventListener('change', changeColor);