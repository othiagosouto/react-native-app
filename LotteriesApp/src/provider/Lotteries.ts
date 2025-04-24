export enum HttpMethod {
    POST = "POST",
    GET = "GET",
}

/**
 * 
 * @param method support methods, see @type {HttpMethod}
 * @param relativePath relative path to the endpoint
 * @param body body of the request, optional
 * 
 * @returns @type {Result<T,Error>}
 */
export async function request<T>(
    method: HttpMethod,
    relativePath: string,
    body?: string | null
) : Promise<T> {
    const response = await fetch(`http://localhost:3000${relativePath}`, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: body,
    });

    return await response.json();
}
