// Cloudflare Worker for letsgrowclients.com
// Serves static files from GitHub Pages or R2 bucket

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)

  // Default to index.html for root
  let path = url.pathname
  if (path === '/' || path === '') {
    path = '/index.html'
  }

  // GitHub Pages origin (update with your actual GitHub Pages URL)
  const origin = 'https://bb313x.github.io/LGC'

  try {
    const response = await fetch(origin + path, {
      headers: {
        'User-Agent': 'Cloudflare-Worker',
      },
    })

    // Clone response and add security headers
    const newResponse = new Response(response.body, response)

    newResponse.headers.set('X-Content-Type-Options', 'nosniff')
    newResponse.headers.set('X-Frame-Options', 'DENY')
    newResponse.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
    newResponse.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')
    newResponse.headers.set('Cache-Control', 'public, max-age=3600')

    // Set correct content types
    if (path.endsWith('.html')) {
      newResponse.headers.set('Content-Type', 'text/html; charset=utf-8')
    } else if (path.endsWith('.css')) {
      newResponse.headers.set('Content-Type', 'text/css')
    } else if (path.endsWith('.js')) {
      newResponse.headers.set('Content-Type', 'application/javascript')
    } else if (path.endsWith('.jpg') || path.endsWith('.jpeg')) {
      newResponse.headers.set('Content-Type', 'image/jpeg')
    } else if (path.endsWith('.png')) {
      newResponse.headers.set('Content-Type', 'image/png')
    } else if (path.endsWith('.svg')) {
      newResponse.headers.set('Content-Type', 'image/svg+xml')
    } else if (path.endsWith('.ico')) {
      newResponse.headers.set('Content-Type', 'image/x-icon')
    }

    return newResponse
  } catch (error) {
    return new Response('Not Found', { status: 404 })
  }
}
