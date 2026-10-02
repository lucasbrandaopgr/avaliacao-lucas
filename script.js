var res = document.getElementById("resultado")
//Valor original do produto
const valorOrg = 12500.00
//Calculando desconto do produto
const valorDesconto = valorOrg - (valorOrg * 10 / 100)
//Valor do produto com 2% de acréscimo
const acrescimo = valorOrg + (valorOrg * 0.02)

function simularPagamento(){
    //perguntando o metodo que o cliente vai pagar (parcelado ou à vista)
    let metodo = window.prompt("Digite 1 para pagamento à vista ou 2 para pagamento parcelado.")

    if (metodo == 2){
        let parcelas = window.prompt("Em quantas parcelas deseja dividir (até12x)?")
        if (parcelas >= 2){
            let valorParcela = valorOrg / parcelas
            res.innerHTML = `<h3>O seu Notebook ficará em ${parcelas} parcelas de R$${valorParcela},00</h3>`
        }
    }else{
            res.innerHTML = `<h3>Com 10% de desconto, o seu Notebook sai por apenas R$${valorDesconto},00<h3>`
        }
}