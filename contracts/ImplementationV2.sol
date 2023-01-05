// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract ImplementationV2 is Initializable {

    uint public myValue;
    uint public constant MY_CONST = 123;

    function increaseVal() external {
        myValue += 1;
    }

    function decreaseVal() external {
        myValue -= 1;
    }
}
