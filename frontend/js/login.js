const btn = document.getElementById("botao");
const resposta = document.getElementById("res");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;

  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
      senha: senha,
    }),
  })
    .then((res) => res.json())
    .then((dados) => {
      if (dados.token) {
        localStorage.setItem("token", dados.token);
        localStorage.setItem("nomeFuncionario", dados.nome);
        
        resposta.innerHTML = `<p>Bem-vindo, ${dados.nome}!</p>`;
      } else {
        resposta.innerHTML = `<p>${dados.message}</p>`;
      }
    })
    .catch((err) => {
      console.error("Erro no login:", err);
      resposta.innerHTML = `<p>Erro ao tentar conectar com o servidor.</p>`;
    });
});
