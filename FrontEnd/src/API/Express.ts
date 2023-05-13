const apilink='http://localhost:8080/'

export const fetchMessCutbyID = async (ID:string)=>{
    const res= await fetch(apilink+'fetchMessCutbyID?'+new URLSearchParams({
        ID:ID.slice(0,-10)
    })
    )
    const data=await res.json()
    return data
}