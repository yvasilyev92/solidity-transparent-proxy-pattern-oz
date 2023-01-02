// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract LogicV2 is Initializable {

    uint public myValue;
    uint public constant MY_CONST = 123; // Constants are fine, they dont live in storage

    // Remember you can no longer initialize after V1 but Initializable must remain
    // function initialize(uint _val) external initializer {
    //     myValue = _val;
    // }

    function increaseVal() external {
        myValue += 1;
    }

    function decreaseVal() external {
        myValue -= 1;
    }
}
