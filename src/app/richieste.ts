export class Richieste {
    id!: number
    numeroTicket!: number
    applicativo!: {applicativoId:number,descApplicativo: string }
    oggetto!: string
    statoRichiestaConsap!:{ statoRichiestaConsapId: number, descStatoRichiestaConsap:string}
    dataCreazione!:Date
    statoApprovazioneConsap!:{statoApprovazioneConsap: number,descStatoApprovazioneConsap: string}
    statoApprovazioneOs!:{statoApprovazioneOs: number, descStatoApprovazioneOs: string}
    statoRichiestaOs!:{statoRichiestaOs: number, descStatoRichiestaOs: string}
    dataStimaFine!: Date
    importo!: number
    codiceCommessa!:{codiceCommessa:number, descCodiceCommessa: string }


}
