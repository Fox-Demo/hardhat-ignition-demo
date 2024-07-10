// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

import "./Lock.sol";

contract Lock2 {
    Lock public lock;

    constructor(address _lock) {
        lock = Lock(_lock);
    }
}
