const apilink='http://localhost:8080/'

interface MessCut{
    CutDays:Array<number>,
    ID:string,
    date:Date,
}


export const fetchMessCutbyID = async (ID:string)=>{
    const res= await fetch(apilink+'fetchMessCutbyID?'+new URLSearchParams({
        ID:ID.slice(0,-10)
    })
    )
    const data=await res.json()
    return data
}

export const updateMessCut = async (data:MessCut) => {
    const res = await fetch(apilink+'updateMessCutbyID',{
        method:'POST',
        headers: {
            "Content-Type": "application/json",
          },
        body:JSON.stringify(data)
    })

    const val=await res.json()

    return val

}