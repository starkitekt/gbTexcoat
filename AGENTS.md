<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes: APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Writing style

Never use the em dash (the long "U+2014" dash) anywhere in this project: UI copy, code, comments, or commit messages. Use a comma, colon, period, parentheses, or the word "to" for numeric ranges. (En dashes and minus signs inside numeric ranges are fine.)

This is enforced automatically: `node scripts/check-emdash.mjs` scans `src/` and fails if any are found, and the same script runs as a `PostToolUse` hook (see `.claude/settings.json`) to remind on every edit.
