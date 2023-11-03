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

export const buildApiUrl = (path: string): string =>
  `http://localhost:8080/${path}`;