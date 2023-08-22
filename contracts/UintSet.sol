// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";

contract UintSet {
    using EnumerableSet for EnumerableSet.UintSet;
    EnumerableSet.UintSet _uintSet;

    function add(uint value) external returns (bool) {
        return _uintSet.add(value);
    }

    function remove(uint value) external returns (bool) {
        return _uintSet.remove(value);
    }

    function at(uint index) external view returns (uint) {
        return _uintSet.at(index);
    }

    function contains(uint value) external view returns (bool) {
        return _uintSet.contains(value);
    }

    function length() external view returns (uint) {
        return _uintSet.length();
    }

    function values() external view returns (uint[] memory) {
        return _uintSet.values();
    }
}
