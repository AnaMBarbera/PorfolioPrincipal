var formStartTime = Date.now();

function sendMail() {
    var subject = document.getElementById('subject');
    var comment = document.getElementById('comment');
    var honeypot = document.getElementById('website');

     // Si el honeypot tiene contenido, probablemente es un bot
     if (honeypot.value.trim() !== "") {
        return;
    }
      // Tiempo mínimo de 3 segundos
      var elapsedTime = Date.now() - formStartTime;

      if (elapsedTime < 3000) {
          return;
      }

    if (subject.value.trim() === "" || comment.value.trim() === "") {
        alert("Por favor, completa el asunto y el mensaje.");
        return;
    }

    var link = "mailto:anabarbera90@gmail.com"
        + "?subject=" + encodeURIComponent(subject.value)
        + "&body=" + encodeURIComponent(comment.value);

    window.open(link, "_blank");

    subject.value = "";
    comment.value = "";

    alert("Se ha abierto tu programa de correo para enviar el mensaje.");
}
