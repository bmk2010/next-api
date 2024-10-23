export async function GET(request) {
    return new Response(JSON.stringify({ message: 'Hello, Next.js 15 API!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  