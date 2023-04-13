export default async () => {
    const url="https://picsum.photos/300/300";
    
    const response= await fetch(url)
    return response.url

    

}