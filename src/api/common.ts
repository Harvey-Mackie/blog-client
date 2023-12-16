import { errorToast, successToast } from "../utils/utils";

const GENERIC_HEADERS = {
    'Content-Type': 'application/json',
    'Accept': 'application/json, text/plain, */*'
}

export const HTTP_METHOD = {
    PUT: "PUT",
    GET: "GET",
    POST: "POST",
    PATCH: "PATCH",
}

export const fetching = async <T>(path: string, method = "GET", body?: T, includeHeaders = false, successMessage?:string) => {
    const url = buildApiUrl(path)
    const response = await fetch(url, {
        method: method,
        headers: includeHeaders ? GENERIC_HEADERS : undefined,
        body: body ? JSON.stringify(body) : undefined
    })

    const responseJson = await response.json();

    if(!response.ok){
      errorToast(responseJson ? responseJson.message : "Error Occured");
      return;
    }

    if(successMessage){
        successToast(successMessage);
    }

    return responseJson.content;

}

export const buildApiUrl = (path: string): string =>  `https://blog-api-spring-app-20231216070621.azuremicroservices.io/${path}`;

