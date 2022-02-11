export default interface HttpRequest {
    query: any;
    params: any;
    body: any;
    headers: any;
    header(name: string): string | undefined;
}