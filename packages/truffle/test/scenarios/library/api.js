const assert = require("assert");

describe("Truffle Library APIs", () => {
  // Avoid `npm test:raw`
  if (process.env.NO_BUILD) return;

  let truffle;
  before(function() {
    this.timeout(5000);
    truffle = require("../../../build/library.bundled.js");
  });

  it("truffle.build API definition", () => {
    assert(truffle.build, "build undefined");
    assert(truffle.build.clean, "build.clean undefined");
    assert(truffle.build.build, "build.build undefined");
  });

  it("truffle.create API definition", () => {
    assert(truffle.create, "create undefined");
    assert(truffle.create.contract, "create.contract undefined");
    assert(truffle.create.test, "create.test undefined");
    assert(truffle.create.migration, "create.migration undefined");
  });

  it("truffle.console API definition", () => {
    // This one returns a constructor.
    assert(truffle.console, "console undefined");
  });

  it("truffle.contracts API definition", () => {
    assert(truffle.contracts.compile, "contracts.compile undefined");
    assert(
      truffle.contracts.collectCompilations,
      "contracts.collectCompilations undefined"
    );
    assert(
      truffle.contracts.compileSources,
      "contracts.compileSources undefined"
    );
    assert(
      truffle.contracts.reportCompilationStarted,
      "contracts.reportCompilationStarted undefined"
    );
    assert(
      truffle.contracts.reportCompilationFinished,
      "contracts.reportCompilationFinished undefined"
    );
    assert(
      truffle.contracts.reportNothingToCompile,
      "contracts.reportNothingToCompile undefined"
    );
    assert(
      truffle.contracts.writeContracts,
      "contracts.writeContracts undefined"
    );
  });

  it("truffle.package API definition", () => {
    assert(truffle.package.publish, "package.publish undefined");
    assert(truffle.package.install, "package.install undefined");
    assert(truffle.package.digest, "package.digest undefined");
    assert(
      truffle.package.publishable_artifacts,
      "package.publishable_artifacts undefined"
    );
  });

  it("truffle.test API", () => {
    assert(truffle.test.run, "test.run undefined");
    assert(truffle.test.createMocha, "test.createMocha undefined");
    assert(truffle.test.getAccounts, "test.getAccounts undefined");
    assert(
      truffle.test.compileContractsWithTestFilesIfNeeded,
      "test.withTestFiles undefined"
    );
    assert(
      truffle.test.performInitialDeploy,
      "test.performInitialDeploy undefined"
    );
    assert(
      truffle.test.defineSolidityTests,
      "test.defineSolidityTests undefined"
    );
    assert(truffle.test.setJSTestGlobals, "test.setJSTestGlobals undefined");
  });

  it("truffle.version API", () => {
    assert(truffle.version, "truffle.version undefined");
  });

  it("truffle.ganache", () => {
    assert(truffle.ganache, "ganache undefined");
    assert(truffle.ganache.provider, "ganache.provider undefined");
    assert(truffle.ganache.server, "ganache.server undefined");
  });
});
