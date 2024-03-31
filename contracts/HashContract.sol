// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HashContract {
    function staticCallSha256Hash(
        bytes memory data
    ) external view returns (bytes32) {
        bytes32 hash;
        assembly {
            // 调用预编译合约 sha256hash
            if iszero(
                staticcall(
                    not(0),
                    0x2,
                    add(data, 0x20),
                    mload(data),
                    hash,
                    0x20
                )
            ) {
                revert(0, 0)
            }
        }
        return hash;
    }

    function calculateKeccak256Hash(
        string memory data
    ) public pure returns (bytes32) {
        return keccak256(abi.encodePacked(data));
    }

    function calculateSha256Hash(
        string memory data
    ) public pure returns (bytes32) {
        return sha256(abi.encodePacked(data));
    }
}
