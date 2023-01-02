const {ethers, upgrades} = require("hardhat");

const proxyContract = "0x566CD743a6E56bFd2c38b20262f30cCce3F3aae9";

async function main() {
  
  const LogicV2 = await ethers.getContractFactory("LogicV2");
  const logicV2 = await upgrades.upgradeProxy(proxyContract, LogicV2)
  console.log( `Logic upgraded to V2: ${logicV2.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
