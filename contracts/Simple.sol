// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Simple {
    uint private _value;

    constructor(uint initialValue) {
        _value = initialValue;
    }

    function set(uint newValue) public {
        require(newValue > 0, "value must be more than zero");
        _value = newValue;
    }

    function get() public view returns (uint) {
        return _value;
    }
}
