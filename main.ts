// ai-joke-03 v2 entry (Node 22, standard library only): writes one fixed joke,
// a one-liner about AI coding agents, to /output/entry.txt. The joke is original,
// written in this session: the agent that was hired to be the senior engineer
// escalates its problem back to the human. Tightened the punchline so it ends
// on the reversal instead of restating the setup.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), "My agent got stuck, so it escalated to a senior engineer. That's me.");
