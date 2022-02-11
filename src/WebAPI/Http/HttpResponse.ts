export default interface HttpResponse {
    send(body?: any): this;
    json(body?: any): this;
    contentType(type: string): this;
    status(code: number): this;
}