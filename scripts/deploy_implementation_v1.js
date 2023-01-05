const {ethers, upgrades} = require("hardhat");

async function main() {
  
  const Implementation = await ethers.getContractFactory("ImplementationV1");
  const implementation = await upgrades.deployProxy(Implementation, [959], {
    initializer: "initialize",
  })
  await implementation.deployed();

  console.log( `Implementation address deployed to ${implementation.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
