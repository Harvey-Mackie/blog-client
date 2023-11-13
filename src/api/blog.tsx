export async function GetBlogs(){
    const url = buildApiUrl("")

    const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
    })

    return response.json();
}

export async function GetBlog(id:number){
    const url = buildApiUrl(`${id}`)

    const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
    })

    return response.json();
}


export async function addBlog(title?:string, summary?:string, image?: string, content?: string){
    const url = buildApiUrl("")
    const response = await fetch(url, {
        method: "POST",
        headers:{
          'Content-Type': 'application/json',
          'Accept': 'application/json, text/plain, */*'
        },
        body: JSON.stringify(
            {
              title: title,
              summaryContent: summary,
              summaryPicture: image,
              articleContent: content,
            }
          )
    })

    return response;
}


export const buildApiUrl = (path: string): string =>
  `http://localhost:8080/${path}`;