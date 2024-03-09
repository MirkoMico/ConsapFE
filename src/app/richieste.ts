export class Richieste {
    id!: number
    numeroTicket!: number
    applicativo!: {applicativoId:number}
    oggetto!: string
    statoRichiestaConsap!:{ statoRichiestaconsapId: number}
    dataCreazione!:Date

}
