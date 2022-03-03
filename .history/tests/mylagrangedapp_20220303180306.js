const anchor = require('@project-serum/anchor');
const assert = require("assert");

describe('mylagrangedapp', () => {
  const provider = anchor.Provider.local();
  anchor.setProvider(provider);
  const program = anchor.workspace.mylagrangedapp;

  let mint = null;
  let from = null;
  let to = null;

  it("Initializes test state", async () => {

  });

  it("Mints a token", async () => {

  });

  it("Transfers a token", async () => {

  });

  it("Burns a token", async () => {

  });

  it("Set new mint authority", async () => {

  });
  
});
