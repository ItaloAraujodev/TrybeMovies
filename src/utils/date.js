const tratarDate = (date) => {
    if(date === null || date === undefined){
        return 'Vazio';
    }
    const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    let data = new Date(date)
    let dataFormatada = ((data.getDate()) + " de " + meses[(data.getMonth())] + " de " + data.getFullYear())
    return dataFormatada
}


const formatDateDia = (data) => {
    let dataformt = new Date(data);
    let dataFormatada = ((dataformt.getDate())) + "/" + ((dataformt.getMonth() + 1)) + "/" + dataformt.getFullYear();
    return dataFormatada
}

const converter = (minutos) => {
    const horas = Math.floor(minutos/ 60);          
    const min = minutos % 60;
    const textoHoras = (`00${horas}`).slice(-2);
    const textoMinutos = (`00${min}`).slice(-2);
    
    return `${textoHoras }:${textoMinutos}`;
  };

export { tratarDate, formatDateDia, converter };