const token = localStorage.getItem("token");

if (!token) {
  location.href = "../index.html";
}

const btn = document.getElementById("botao");
const resposta = document.getElementById("res");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  let nome = document.getElementById("nome").value;
  let cpfEcnpj = document.getElementById("cpfEcnpj").value;

  fetch("http://localhost:3000/fornecedor", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: token,
    },
    body: JSON.stringify({
      nome: nome,
      cpfEcnpj: cpfEcnpj,
    }),
  })
    .then(res => {
            if (!res.ok) {
                localStorage.clear()
                alert('Faça login novamente, tempo expirado!')
                location.href = '../index.html'
                throw new Error('Sessão expirada')
            }
            return res.json()
        })
        .then(dados => {
            resposta.innerHTML = `<p>${dados.message}</p>`
            document.querySelector('form').reset()
        })
        .catch(err => {
            console.error('Erro ao cadastrar fornecedor:', err)
            resposta.innerHTML = '<p>Erro ao tentar conectar com o servidor.</p>'
        })
});
