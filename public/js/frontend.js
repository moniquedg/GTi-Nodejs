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
      alert('Produto adicionado com sucesso');
      carregarProdutos();
    } else {
      alert('Erro ao adicionar produto');
    }
  });
  
  async function carregarProdutos() {
    const response = await fetch('/produtos');
    const produtos = await response.json();
    
    const listaProdutos = document.getElementById('listaProdutos');
    listaProdutos.innerHTML = '';
    
    produtos.forEach(produto => {
      const li = document.createElement('li');
      li.textContent = `Nome: ${produto.nome}, Descrição: ${produto.descricao}, Preço: ${produto.preco}`;
      listaProdutos.appendChild(li);
    });
  }
  
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
      carregarCompras();
    } else {
      alert('Erro ao adicionar compra');
    }
  });
  
  async function carregarCompras() {
    const response = await fetch('/compras');
    const compras = await response.json();
    
    const listaCompras = document.getElementById('listaCompras');
    listaCompras.innerHTML = '';
    
    compras.forEach(compra => {
      const li = document.createElement('li');
      li.textContent = `ID do Comprador: ${compra.idComprador}, ID do Vendedor: ${compra.idVendedor}, ID do Produto: ${compra.idProduto}`;
      listaCompras.appendChild(li);
    });
  }
  
  carregarProdutos();
  carregarCompras();
  