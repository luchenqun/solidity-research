// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/utils/structs/EnumerableMap.sol";

contract AddressToUintMap {
    using EnumerableMap for EnumerableMap.AddressToUintMap;

    EnumerableMap.AddressToUintMap _addressToUintMap;

    function set(address key, uint value) external returns (bool) {
        return _addressToUintMap.set(key, value);
    }

    function remove(address key) external returns (bool) {
        return _addressToUintMap.remove(key);
    }

    function contains(address key) external view returns (bool) {
        return _addressToUintMap.contains(key);
    }

    function length() external view returns (uint) {
        return _addressToUintMap.length();
    }

    function at(uint index) external view returns (address, uint) {
        return _addressToUintMap.at(index);
    }

    function tryGet(address key) external view returns (bool, uint) {
        return _addressToUintMap.tryGet(key);
    }

    function get(address key) external view returns (uint) {
        return _addressToUintMap.get(key);
    }

    function get(
        address key,
        string memory errorMessage
    ) external view returns (uint) {
        return _addressToUintMap.get(key, errorMessage);
    }
}
