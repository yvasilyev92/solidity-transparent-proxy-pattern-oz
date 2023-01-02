# Transparent Proxy Upgrade Pattern using OpenZeppelin
#
This is a simple example of using OpenZeppelins Hardhat-Upgrades plugin to deploy the OpenZeppelin TransparentProxy implementation for upgrading your contracts. It follows a similiar approach we took in https://github.com/yvasilyev92/solidity-transparent-proxy-pattern except now using Openzeppelins audited secure contracts, this is the recommended approach when applying the TransparentProxy pattern to your contracts. 
#
> OpenZeppelins Hardhat-Upgrades plugin allows you to deploy & configure your Logic V1 contract, ProxyAdmin contract, and TransparentUpgradebleProxy contract in a single call. Your 1st call to upgrades.deployProxy() deploys those 3 contracts in that order (example in scripts/deploy_logic_v1.js). To upgrade from V1 to V2 you must use upgrades.upgradeProxy() (example in scripts/upgrade_logic_v2.js)
#
> OpenZeppelins Hardhard-Upgrades tool is very useful because it allows you implement a secure TransparentProxy pattern with minimal changes to your contracts, and its functions will throw errors if you attempt to use unsafe implementation practices such as improper storage layout. However you should not fully depend on this and still make sure your implementation contracts follow secure practices.
#
> OpenZeppelin does recommend using the UUPS upgrade pattern approach for implementing upgradeable contracts.
# 
TransparentUpgradeableProxy.sol
https://testnet.bscscan.com/address/0x566cd743a6e56bfd2c38b20262f30ccce3f3aae9#code
ProxyAdmin.sol
https://testnet.bscscan.com/address/0xf97a3c55d8f37f11a1d3969b30adad448a9d8683#code
LogicV1.sol implementation contract
https://testnet.bscscan.com/address/0xac37c08A4888CF7C258464697549bb6f69B0Dfc4#code
LogicaV2.sol implementation contract
https://testnet.bscscan.com/address/0xb03B00198d0603B4Ee54De049495D8c64E400a03#code