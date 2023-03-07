export default async () => {
    const url="https://picsum.photos/300/300";
    
    const response= await fetch(url)
    //const data=await response.json()
    console.log(response.url)
    return response.url

    

}