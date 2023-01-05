const {ethers, upgrades} = require("hardhat");

const proxyContract = process.env.PROXY;

async function main() {
  
  const Implementation = await ethers.getContractFactory("ImplementationV2");
  const implementation = await upgrades.upgradeProxy(proxyContract, Implementation)
  console.log( `Implementation upgraded to V2: ${implementation.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
