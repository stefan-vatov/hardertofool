import type { APIRoute } from "astro";
// The canonical document, inlined at build time and served verbatim
// for machine consumption.
import body from "../../CODE.md?raw";

export const GET: APIRoute = () =>
  new Response(body, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
