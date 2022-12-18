const tratarDate = (date) => {
    const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    let data = new Date(date)
    let dataFormatada = ((data.getDate()) + " de " + meses[(data.getMonth())] + " de " + data.getFullYear())
    return dataFormatada
}

export default tratarDate;