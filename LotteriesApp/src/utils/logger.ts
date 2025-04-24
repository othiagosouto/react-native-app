

export function logError(tag: string, message: string, error: any){
    console.error(tag, message, error);
}

export function logDebug(tag: string, message: string, extras?:any){
    console.debug(tag, message,extras);
}
