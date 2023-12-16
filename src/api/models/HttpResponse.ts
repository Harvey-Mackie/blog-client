export interface HttpResponse<T>{
    statusCode: number,
    message: string,
    content: T
}
