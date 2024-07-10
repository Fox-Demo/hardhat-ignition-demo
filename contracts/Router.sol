// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

import "./Lock.sol";
import "./Lock2.sol";

contract Router {
    Lock public lock;
    Lock2 public lock2;

    constructor(address _lock, address _lock2) {
        lock = Lock(_lock);
        lock2 = Lock2(_lock2);
    }

    function add(uint256 a, uint256 b) public pure returns (uint256) {
        require(a > 0, "a must be greater than 0");
        return a + b;
    }
}
