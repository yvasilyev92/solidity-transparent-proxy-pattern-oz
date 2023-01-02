const {ethers, upgrades} = require("hardhat");

async function main() {
  
  const Logic = await ethers.getContractFactory("LogicV1");
  const logic = await upgrades.deployProxy(Logic, [456], {
    initializer: "initialize",
  })
  await logic.deployed();

  console.log( `Logic address deployed to ${logic.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
