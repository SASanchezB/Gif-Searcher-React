export const getGifs = async(category) =>{

    // const url= `https://api.giphy.com/v1/gifs/search?api_key=v3dxpIFWePbG0362BfZdvLMfKzbn93TG&q=${category}&limit=5`;

    //tenor  AIzaSyDBMYQ7r1x2Ve3Ghp1EJZK6SNRIm0-4oIA

    /*
    search_url = "https://tenor.googleapis.com/v2/search?q=" + search_term + "&key=" +
    apikey +"&client_key=" + clientkey +  "&limit=" + lmt;
    */

    const url= `https://tenor.googleapis.com/v2/search?q=${category}&key=AIzaSyDBMYQ7r1x2Ve3Ghp1EJZK6SNRIm0-4oIA&limit=5`;

    const resp= await fetch(url)
    const {results} = await resp.json();

    console.log(results)

    const gifs = results.map(img=>{
    const gifUrl = img.media_formats.gif.url;
        return{
            id: img.id,
            title: gifUrl.split("/").pop().replace(".gif", "").replaceAll("-"," "),
            // url: img.images.downsized_medium.url
            url: img.media_formats.gif.url
        }
    })

    // console.log(gifs)

    return gifs;
}