const btn = document.getElementById("botao");
const resposta = document.getElementById("res");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;

  fetch("http://localhost:3000/funcionario", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nome: nome,
      email: email,
      senha: senha
    }),
  })
    .then((res) => res.json())
    .then((dados) => {  
        resposta.innerHTML = `<p> ${dados.message}</p>`;
    })
    .catch((err) => {
      console.error("Erro no cadastrar:", err);
      resposta.innerHTML = `<p>Erro ao tentar conectar com o servidor.</p>`;
    });
});
