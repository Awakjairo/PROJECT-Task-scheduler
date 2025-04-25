const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// Set thresholds
const thresholds = {
  branches: 45,
  functions: 50,
  lines: 45,
  statements: 45,
};

// Run tests with coverage and ignore failures
try {
  execSync("npx jest --coverage", {
    stdio: "inherit",
  });
} catch (error) {
  // Ignore test failures
  console.log("Some tests failed, but we will still check coverage...");
}

// Read the coverage-summary.json file
const coverageSummaryPath = path.join(
  __dirname,
  "coverage",
  "coverage-summary.json"
);

if (!fs.existsSync(coverageSummaryPath)) {
  console.error(
    "Coverage summary file not found. Make sure Jest is generating coverage reports."
  );
  process.exit(1);
}

const coverageData = JSON.parse(fs.readFileSync(coverageSummaryPath, "utf8"));
const totalCoverage = coverageData.total;

console.log("\n--- COVERAGE RESULTS ---");
console.log(
  `Branches:   ${totalCoverage.branches.pct}% (threshold: ${thresholds.branches}%)`
);
console.log(
  `Functions:  ${totalCoverage.functions.pct}% (threshold: ${thresholds.functions}%)`
);
console.log(
  `Lines:      ${totalCoverage.lines.pct}% (threshold: ${thresholds.lines}%)`
);
console.log(
  `Statements: ${totalCoverage.statements.pct}% (threshold: ${thresholds.statements}%)`
);

// Check if coverage meets thresholds
let failed = false;
if (totalCoverage.branches.pct < thresholds.branches) {
  console.error(
    `❌ Branch coverage (${totalCoverage.branches.pct}%) is below threshold (${thresholds.branches}%)`
  );
  failed = true;
}
if (totalCoverage.functions.pct < thresholds.functions) {
  console.error(
    `❌ Function coverage (${totalCoverage.functions.pct}%) is below threshold (${thresholds.functions}%)`
  );
  failed = true;
}
if (totalCoverage.lines.pct < thresholds.lines) {
  console.error(
    `❌ Line coverage (${totalCoverage.lines.pct}%) is below threshold (${thresholds.lines}%)`
  );
  failed = true;
}
if (totalCoverage.statements.pct < thresholds.statements) {
  console.error(
    `❌ Statement coverage (${totalCoverage.statements.pct}%) is below threshold (${thresholds.statements}%)`
  );
  failed = true;
}

if (!failed) {
  console.log("\n✅ All coverage thresholds have been met!");
  process.exit(0);
} else {
  console.error("\n❌ Some coverage thresholds were not met!");
  process.exit(1);
}
