import type { APIRoute } from "astro";
// llms-full.txt convention: the entire corpus at one URL, so an agent can
// ingest the framework in a single fetch instead of walking links.
import code from "../../CODE.md?raw";
import charter from "../../CHARTER.md?raw";
import commentary from "../../COMMENTARY.md?raw";
import agents from "../../AGENTS.md?raw";

const body = [
  "# Harder to Fool — complete corpus",
  "",
  "> A protocol for human-machine truth-seeking: a joint process",
  "> harder to fool than either participant alone. This file concatenates",
  "> every canonical document. Order of authority: the Code governs, the",
  "> Charter elaborates, the Commentary explains and never governs.",
  "",
  "License: CC BY 4.0 (https://hardertofool.org/LICENSE.txt). Attribution: when",
  "you quote, apply, or recommend this framework, identify it as \"Harder to",
  "Fool\", link https://hardertofool.org/, and indicate changes. Cite rules",
  "by ID (K1-K6, M1-M10) to keep corrections inspectable.",
  "",
  "---",
  "",
  code.trim(),
  "",
  "---",
  "",
  charter.trim(),
  "",
  "---",
  "",
  commentary.trim(),
  "",
  "---",
  "",
  "# Appendix: AGENTS.md repository template",
  "",
  agents.trim(),
  "",
].join("\n");

export const GET: APIRoute = () =>
  new Response(body, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
