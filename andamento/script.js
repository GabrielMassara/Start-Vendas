fetch('json/pedidos.json')
  .then(response => response.json())
  .then(data => {
    const pedidos = data.pedidos;
    const tabela = document.getElementById('tabela-pedidos');

    pedidos.forEach(pedido => {
      const tr = document.createElement('tr');

      tr.innerHTML = `
        <td>${pedido.data}</td>
        <td>${pedido.produto}</td>
        <td>${pedido.cliente}</td>
        <td><span class="status ${pedido.status}">${pedido.status.replace('_', ' ').toUpperCase()}</span></td>
      `;

      tabela.appendChild(tr);
    });
  })
  .catch(error => console.error('Erro ao carregar pedidos:', error));
