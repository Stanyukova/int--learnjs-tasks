// Почему в коде ниже return false не работает?

// <script>
//   function handler() {
//     alert( "..." );
//     return false;
//   }
// </script>

// <a href="https://w3.org" onclick="handler()">браузер откроет w3.org</a>
// event.preventDefault()
function handler(event) {
    alert("...");
    event.preventDefault();}