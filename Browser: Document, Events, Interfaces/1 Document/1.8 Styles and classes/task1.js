// Напишите функцию showNotification(options), которая создаёт уведомление: <div class="notification"> с заданным содержимым. Уведомление должно автоматически исчезнуть через 1,5 секунды.


function showNotification({top = 0, right = 0, className, html}) {
    if(document.querySelector('.' + className)) {
      let el = document.querySelector('.' + className)
      el.innerHTML = html
      el.style.display = ''
      setTimeout(() => el.style.display = 'none', 1500)
      return 
    }
  
    let elem = document.createElement('div')
    elem.className = className + ' notification'
    elem.style.cssText = `top:${top + 'px'};right:${right + 'px'}` 
    elem.innerHTML = html  
    document.body.prepend(elem)
    setTimeout(() => elem.style.display = 'none', 1500)
  }