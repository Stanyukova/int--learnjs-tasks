// Создайте галерею изображений, в которой основное изображение изменяется при клике на уменьшенный вариант.
thumbs.addEventListener('click', (event) => {
    event.preventDefault();
    if(event.target.tagName !== 'IMG') {return}
    let largeImgSource = largeImg.src;
  
    [largeImg.alt, event.target.alt] = [event.target.alt, largeImg.alt];
        
    [largeImg.src, event.target.closest('a').href] = [event.target.closest('a').href, largeImg.src];
  
    event.target.closest('a').title = event.target.alt;
    event.target.src = largeImgSource.split('lg').join('thumb');
  });