addEventListener("load", main)

function main() {
    btCalcSales.addEventListener("click", calculateSales)
}

function calculateSales() {
    // input
    Price=parseFloat(txPrice.value)
    TaxRate=parseFloat(txTaxRate.value)/100
    //Processing
    Tax=Price*TaxRate
    Total=Price+Tax
    //Output
    spTotal.innerHTML=Total.toFixed(2)
}

