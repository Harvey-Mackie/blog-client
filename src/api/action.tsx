import { errorToast, successToast } from "../utils/utils";
import { HTTP_METHOD, fetching } from "./common";
import { HttpResponse } from "./models/HttpResponse";

export async function subscribe(firstName:String, email:String){
  return await fetching(
    "actions/subscribe",
    HTTP_METHOD.PUT,
    {name: firstName, email: email},
    true,
    'Thank you for subscribing!'
    )
}