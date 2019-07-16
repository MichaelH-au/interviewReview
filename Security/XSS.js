/**
 * XSS
 * type1: reflection  -> url parameters
 * attacker send modified url  -> user visit url
 *
 * type2: storage     -> store into DB then read
 * HTML content, HTML attribute, JS code, rich text
 *
 * input
 * <img src="" onerror="alert(1)">
 */

/**
 * Protection
 * 1. set header("X-XSS-Protection: 0");
 * 0 -> close protection   1 -> open protection  X-XSS-Protection : 1; report=<reporting-uri>
 * only protect the reflection XSS (HTML content, HTML attribute, rich content)
 *
 * 2. parse
 * "<" -> &lt;  ">" -> &gt   '"' -> &quto "'" -> &#39
 *
 * JSON.stringify(str)
 */
let html
html.replace(/<\s*\/?script\s*>/gi, ')
html.replace(/javascript:[^'"]*/g,'')
html.replace(/onerror\s*=['"]?[^'"]*['"]?/g,'')


/**
 * CSRF
 *
 * 1. forbid the third part site bring others cookies (chrome only)
 * header('same-site') Strict   Lax
 * Set-Cookie: key=value; path=/; SameSite
 *
 */

/**
 * clickjacking
 *
 * JS forbid iframe
 * header('X-FRAME-OPTIONS ') DENY, SAMEORIGIN
 *
 */