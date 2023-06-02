export const getCookieValue = (cookieName: string) => {
    const cookieString = decodeURIComponent(document.cookie);
    const cookieArray = cookieString.split(';');

    for (let i = 0; i < cookieArray.length; i++) {
        const cookie = cookieArray[i].trim();

        if (cookie.startsWith(`${ cookieName }=`)) {
            return cookie.substring(`${ cookieName }=`.length);
        }
    }

    return '';
};