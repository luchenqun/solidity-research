// SPDX-License-Identifier: Apache-2.0

pragma solidity ^0.8.0;

import "./interface/staking/IStaking.sol";

contract PrecompileTest {
    IStaking public staking =
        IStaking(0x0000000000000000000000000000000000001003);
    uint256 public validatorCount = 0;

    function setValidatorCount() public {
        BondStatus status = BondStatus.Bonded;
        PageRequest memory pagination = PageRequest("", 0, 100, true, false);
        (, PageResponse memory pageResponse) = staking.validators(
            status,
            pagination
        );
        validatorCount = pageResponse.total;
    }

    function getValidatorCount() public view returns (uint) {
        BondStatus status = BondStatus.Bonded;
        PageRequest memory pagination = PageRequest("", 0, 100, true, false);
        (, PageResponse memory pageResponse) = staking.validators(
            status,
            pagination
        );
        return pageResponse.total;
    }
}
