// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract ImplementationV1 is Initializable {

    uint public myValue;

    function initialize(uint _val) external initializer {
        myValue = _val;
    }

    function increaseVal() external {
        myValue += 1;
    }

}
