export async function subscribe(firstName:String, email:String){
    const url = buildApiUrl("actions/subscribe")
    const response = await fetch(url, {
        method: "PUT",
        headers:{
          'Content-Type': 'application/json',
          'Accept': 'application/json, text/plain, */*'
        },
        body: JSON.stringify({name: firstName, email: email})
    })

    return response;
}

export const buildApiUrl = (path: string): string =>
  `http://localhost:8080/${path}`;