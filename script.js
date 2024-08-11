document.getElementById('rsvp-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtém os valores dos campos do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const attendance = document.getElementById('attendance').value;
    
    // Atualiza o recibo com os valores do formulário
    document.getElementById('receipt-name').textContent = name;
    document.getElementById('receipt-email').textContent = email;
    document.getElementById('receipt-attendance').textContent = attendance === 'yes' ? 'Sim' : 'Não';
    
    // Exibe o recibo
    document.getElementById('receipt').classList.remove('hidden');
    
    // Opcional: Você pode aqui enviar os dados para um servidor
    // e mostrar uma mensagem de sucesso.
    alert('Obrigado por confirmar sua presença!');
    this.reset();
});

function printReceipt() {
    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write('<html><head><title>Recibo de Confirmação</title>');
    printWindow.document.write('<link rel="stylesheet" type="text/css" href="styles.css">');
    printWindow.document.write('</head><body >');
    printWindow.document.write(document.getElementById('receipt').innerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
}
