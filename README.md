# Harder to Fool

A practical framework for human–machine collaboration. Its aim is not to eliminate bias — no process can — but to make the joint process harder to fool than either participant alone.

> Reality is the reference.  
> Models are instruments.  
> Confidence must be earned.  
> Correction is progress.

## Documents

The framework has three layers, in order of authority:

1. **[CODE.md](CODE.md)** — the portable normative core: K1–K6, M1–M10, the thresholds, invocation, conformance test, limits, adoption rule, and self-test.
2. **[CHARTER.md](CHARTER.md)** — the normative operating procedure for substantial collaborations. It covers evidence, authority, responsibility, the decision cycle, risk, restraint, and review. The Code governs if they conflict.
3. **[COMMENTARY.md](COMMENTARY.md)** — the non-normative rationale, design choices, rejected alternatives, and open limitations.

The repository also ships integration files: **[AGENTS.md](AGENTS.md)**, a template whose Harder to Fool block inlines the Code's kernels verbatim; **[CLAUDE.md](CLAUDE.md)**, a pointer for tools that load that name; and **[check_sync.py](check_sync.py)**, which fails CI if the block drifts from `CODE.md`.

## Use

**In a repository:** copy `CODE.md`, `CHARTER.md`, `COMMENTARY.md`, and `check_sync.py` into `.ai/harder-to-fool/`, merge the block from `AGENTS.md` into your repository's `AGENTS.md` (`CLAUDE.md` points there for tools that load it by name), and add `python .ai/harder-to-fool/check_sync.py .ai/harder-to-fool/CODE.md AGENTS.md` to CI. Cite rules by ID to open a correction — for example, “K3 applies” or “M9 applies” — not to end an argument.

**In a consequential collaboration:** use the Charter’s operating cycle and preserve its compact decision record.

**In a low-stakes task:** apply the principles proportionately. Do not turn a simple question into a ceremony.

**By a machine system:** a system without persistent identity or memory applies the Code only within the current context. Implementation is not belief, consent, or enduring commitment.

## Status and maintenance

This is a provisional framework. Its authority extends no further than the quality of its evidence, reasoning, and results.

The repository history is the revision record. Material changes should explain their rationale, important objections, expected effects, and unresolved uncertainty. Forks should identify their source and substantive modifications.
