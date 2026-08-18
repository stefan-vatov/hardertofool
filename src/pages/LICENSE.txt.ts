import type { APIRoute } from "astro";
// The dual license, served verbatim so adopters can vendor it with the
// documents.
import body from "../../LICENSE?raw";

export const GET: APIRoute = () =>
  new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
