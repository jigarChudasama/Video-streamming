export const FULLNAME_REGEX = /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$|^$/;
export const SPACE_REGEX = /^\S*$/;
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
export const COOKIE_OPTIONS = {
    path: "/",
    expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000 * 365),
    // sameSite: 'strict',
    // secure: true,
    // domain: '.faithprotocol.com'
}