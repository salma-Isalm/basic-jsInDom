const sections =document.querySelectorAll('section');
//console.log(sections)
for(const section of sections){
   section.style.border = '2px solid steelblue';
   section.style.marginBottom = '9px';
   section.style.borderRadius = '15px';
   section.style.paddingLeft = ' 7px';
   section.style.backgroundColor = 'lightgray'
    //console.log(section)
}
const placesContainer = document.getElementById('places-container');
//placesContainer.style.backgroundColor= ' yellow'
placesContainer.classList.add('text-center');
placesContainer.classList.remove('large-text')
