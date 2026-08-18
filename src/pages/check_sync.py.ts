import type { APIRoute } from "astro";
// The drift guard, served verbatim: vendored next to the documents at
// .ai/harder-to-fool/check_sync.py and run in CI.
import body from "../../check_sync.py?raw";

export const GET: APIRoute = () =>
  new Response(body, {
    headers: { "Content-Type": "text/x-python; charset=utf-8" },
  });
