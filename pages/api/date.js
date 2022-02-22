function date(request, response){

    const dynamicDate = new Date();

    /*fetch('https://sisu-api-pcr.apps.mec.gov.br/api/v1/oferta/182462/selecionados-lista-espera')
        .then(response => response.json())
        .then(data2 => {
            data2.map((id2)=> {
                console.log(id2.no_inscrito + " " + id2.nu_nota_candidato)
            })

        })

     */

    //João Paulo Bernardinelli



    console.log("teste.aqui");

    fetch('https://sisu-api-pcr.apps.mec.gov.br/api/v1/oferta/instituicoes', {
        method: 'GET',
        headers: {
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/json',
            'Content-Encoding': 'gzip',
            'access-control-expose-headers': 'Authorization',
        },
    }).then(response => console.log(response))





    response.json({
        date: dynamicDate.toJSON(),
        hoursUTC: dynamicDate.getUTCHours(),
        minutesUTC: dynamicDate.getUTCMinutes(),
        dayUTC: dynamicDate.getUTCDate(),
        monthUTC: dynamicDate.getUTCMonth()
        //yearUTC: dynamicDate.getUTCFullYear()
    })

}

export default date;