// Создать меню, которое по нажатию открывается либо закрывается:
function listHandler() {
    button.addEventListener('click', () => {
      button.classList.toggle('open');
      button.classList.toggle('closed');
      list.classList.toggle('hide');
  });
  }
  listHandler();

//style
// .menu ul {
//     margin: 0;
//     list-style: none;
//     padding-left: 20px;
//     display: none;
//   }

//   .menu .title {
//     font-size: 18px;
//     cursor: pointer;
//   }

//   .menu .title::before {
//     content: '▶ ';
//     font-size: 80%;
//     color: green;
//   }

//   .menu.open .title::before {
//     content: '▼ ';
//   }

//   .menu.open ul {
//     display: block;
//   }