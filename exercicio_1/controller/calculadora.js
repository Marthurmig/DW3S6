const fSoma = (num1, num2) => num1 + num2;
const fSubtracao = (num1, num2) => num1 - num2;
const fMultiplicacao = (num1, num2) => num1 * num2;
const fDivisao = (num1, num2) => num2 !== 0 ? num1 / num2 : 'Divisão por zero não permitida';

const fCalculo = (req, res) => {
    const { num1, num2, operacao } = req.body;

    let resultado;

    switch (operacao) {
        case '+':
            resultado = fSoma(num1, num2);
            break;
        case '-':
            resultado = fSubtracao(num1, num2);
            break;
        case '*':
            resultado = fMultiplicacao(num1, num2);
            break;
        case '/':
            resultado = fDivisao(num1, num2);
            break;
        default:
            return res.status(400).json({ error: 'Operação inválida' });
    }

    res.json({ resultado });
};

module.exports = {
    fCalculo
};