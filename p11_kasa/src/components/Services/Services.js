export class DataImport {
    async getDatas(){
        const res = await fetch('./datas.json')
        const data = await res.json()
        return data
    }
}

 
