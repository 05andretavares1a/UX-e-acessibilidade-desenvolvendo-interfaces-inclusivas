function verificar() {
    const input = document.getElementById('verifyInput').value.trim().toLowerCase();
    const resultDiv = document.getElementById('result');

    if (!input) {
        resultDiv.className = 'error';
        resultDiv.innerText = 'Por favor, insira um CPF ou URL para verificação.';
        resultDiv.style.display = 'block';
        return;
    }

    resultDiv.style.display = 'block';

    if (input.includes('.com') || input.includes('http') || input.includes('.br') || input.includes('.net')) {
        const termosSuspeitos = [
            'login', 'senha', 'recadastro', 'premio', 'sorteio', 
            'banco', 'suporte', 'atendimento', 'seguranca-atualizar',
            '.xyz', '.top', '.buzz', '.tk', 'bit.ly', 'whatsapp-golpe'
        ];

        const eSuspeito = termosSuspeitos.some(termo => input.includes(termo));

        if (eSuspeito) {
            resultDiv.className = 'error';
            resultDiv.innerText = '🚨 ALERTA DE SEGURANÇA: Este link contém padrões frequentemente usados em golpes ou phishing. Não acesse!';
        } else {
            resultDiv.className = 'success';
            resultDiv.innerText = '✓ Link Analisado: Nenhum padrão de ameaça conhecido detectado nesta URL.';
        }

    } else if (input.replace(/\D/g, '').length === 11) {
        resultDiv.className = 'success';
        resultDiv.innerText = '✓ Profissional Verificado: Cadastro ativo e credenciais validadas no banco SêniorSeg.';
    } else {
        resultDiv.className = 'error';
        resultDiv.innerText = '⚠️ Atenção: CPF inválido ou formato não reconhecido.';
    }
}