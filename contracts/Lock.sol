// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Lock {
    bool public isLocked;
    address public owner;

    constructor() {
        isLocked = false;
        owner = msg.sender;
    }

    function lock() public {
        require(isLocked == false, "Unlocked!");
        isLocked = true;
    }

    function unlock() public {
        require(isLocked == true, "Locked!");
        isLocked = false;
    }
}
