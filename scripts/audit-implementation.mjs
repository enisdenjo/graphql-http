/**
 *
 * Tests a running local server for GraphQL over HTTP compliance.
 *
 * Usage example from root of project:
 *
 * ```sh
 * yarn build:esm
 * PORT=4000 node scripts/audit-implementation.mjs
 * ```
 *
 * Note that graphql-http has to be built before running this script!
 *
 */

import os from 'os';
import fetch from 'node-fetch';
import { auditServer } from '../lib/audits/server.mjs';

async function main() {
  const serverUrl = new URL(`http://localhost:${process.env.PORT}/graphql`);

  let total = 0;
  const results = {
    ok: [],
    warn: [],
    error: [],
  };
  for (const result of await auditServer({
    url: serverUrl.toString(),
    fetchFn: fetch,
  })) {
    total++;
    results[result.status].push(result);
  }

  console.log(`${results.ok.length} audits are passing.`);
  for (const result of results.ok) {
    console.log(`\t✅ ${result.name}`);
  }

  console.log();
  console.log(
    `${results.warn.length} audits are warnings. The server SHOULD support these, but is not required.`,
  );
  for (const result of results.warn) {
    console.log(`\t${'⚠️'} ${result.name}`);
    console.log(`\t\t💬 ${result.reason}`);
  }

  console.log();
  console.log(
    `${results.error.length} audits are errors. The server MUST support these.`,
  );
  for (const result of results.error) {
    console.log(`\t❌ ${result.name}`);
    console.log(`\t\t💬 ${result.reason}`);
  }

  const resultStr = `${results.ok.length} audits passed out of ${total}. ${results.warn.length} are warnings (optional) and ${results.error.length} are errors (required).`;
  console.log(resultStr);

  if (results.error.length) {
    // only warn because auditing _did_ suceed. failing jobs is reserved for errors that couldn't even run the audit
    process.stdout.write(
      `::warning::Implementation does not comply with the GraphQL over HTTP spec. ${resultStr}${os.EOL}`,
    );
  } else if (results.warn.length) {
    process.stdout.write(
      `::notice::Implementation complies with the GraphQL over HTTP spec, but does not pass all optional audits. ${resultStr}${os.EOL}`,
    );
  } else {
    process.stdout.write(
      `::notice::Implementation is fully compliant with the GraphQL over HTTP spec!${os.EOL}`,
    );
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
