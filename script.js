<script>
let tipoConsulta = "";

function abrir(tipo) {
  tipoConsulta = tipo;
  document.getElementById("tituloConsulta").innerText = tipo;
  document.getElementById("modal").style.display = "flex";
}

function fechar() {
  document.getElementById("modal").style.display = "none";
}

function enviar() {
  const nome = document.getElementById("nome").value;
  const data = document.getElementById("data").value;

  if (!nome || !data) {
    alert("Preencha todos os campos");
    return;
  }

  const mensagem =
`✨ Reinado de Mulambo ✨

Nome: ${nome}
Data: ${data}
Consulta: ${tipoConsulta}`;

  const url = "https://wa.me/5562984420263?text=" + encodeURIComponent(mensagem);

  window.open(url, "_blank");
}
</script>
