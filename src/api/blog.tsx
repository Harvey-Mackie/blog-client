import { HTTP_METHOD, fetching } from "./common";

export async function GetBlogs(){
    return await fetching("", HTTP_METHOD.GET, undefined, true, undefined);
}

export async function GetBlog(id:number){
    return await fetching(`${id}`, HTTP_METHOD.GET, undefined, true, undefined);
}


export async function addBlog(title?:string, summary?:string, image?: string, content?: string){
  const body = {
    title: title,
    summaryContent: summary,
    summaryPicture: image,
    articleContent: content,
  };

  return await fetching("", HTTP_METHOD.POST, body, true, 'Successfully Added Blog - Navigating Now');
}

export async function editBlog(id?:string, title?:string, summary?:string, image?: string, content?: string){
  const body = {
    id,
    title: title,
    summaryContent: summary,
    summaryPicture: image,
    articleContent: content,
  };

  return await fetching("", HTTP_METHOD.PUT, body, true, 'Successfully Updated Blog');
}