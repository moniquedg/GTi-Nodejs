document.getElementById('adicionarProduto').addEventListener('click', async () => {
  const nome = document.getElementById('nome').value;
  const descricao = document.getElementById('descricao').value;
  const preco = document.getElementById('preco').value;

  const response = await fetch('/produtos', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nome, descricao, preco })
  });

  if (response.ok) {
      alert('Produto criado com sucesso');
      loadProdutos();
  } else {
      alert('Erro ao criar produto');
  }
});

document.getElementById('adicionarCompra').addEventListener('click', async () => {
  const idComprador = document.getElementById('idComprador').value;
  const idVendedor = document.getElementById('idVendedor').value;
  const idProduto = document.getElementById('idProduto').value;

  const response = await fetch('/compras', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ idComprador, idVendedor, idProduto })
  });

  if (response.ok) {
      alert('Compra adicionada com sucesso');
      loadCompras();
  } else {
      alert('Erro ao adicionar compra');
  }
});

async function loadProdutos() {
  const response = await fetch('/produtos');
  const produtos = await response.json();

  const listaProdutos = document.getElementById('listaProdutos');
  listaProdutos.innerHTML = '';

  produtos.forEach(produto => {
      const li = document.createElement('li');
      li.className = "border-b border-gray-200 py-2";
      li.textContent = `ID: ${produto.id}, Nome: ${produto.nome}, Descrição: ${produto.descricao}, Preço: ${produto.preco}`;
      listaProdutos.appendChild(li);
  });
}

async function loadCompras() {
  const response = await fetch('/compras');
  const compras = await response.json();

  const listaCompras = document.getElementById('listaCompras');
  listaCompras.innerHTML = '';

  compras.forEach(compra => {
      const li = document.createElement('li');
      li.className = "border-b border-gray-200 py-2";
      li.textContent = `ID: ${compra.id}, Comprador: ${compra.idComprador}, Vendedor: ${compra.idVendedor}, Produto: ${compra.idProduto}`;
      listaCompras.appendChild(li);
  });
}

loadProdutos();
loadCompras();
