// SPDX-License-Identifier: Apache-2.0

pragma solidity ^0.8.0;

enum BondStatus {
    Unspecified,
    Unbonded,
    Unbonding,
    Bonded
}

/// @dev Represents a validator in the staking module.
struct Validator {
    string operatorAddress;
    string consensusPubkey;
    bool jailed;
    BondStatus status;
    uint256 tokens;
    uint256 delegatorShares; // TODO: decimal
    string description;
    int64 unbondingHeight;
    int64 unbondingTime;
    uint256 commission;
    uint256 minSelfDelegation;
}

interface StakingI {
    function delegate(
        address delegatorAddress,
        string memory validatorAddress,
        uint256 amount
    ) external returns (bool success);

    function validator(
        string memory validatorAddress
    ) external view returns (Validator calldata validator);
}

contract PrecompileBug {
    StakingI public staking =
        StakingI(0x0000000000000000000000000000000000000800);
    uint256 public count = 0;

    event Result(bool indexed success);

    receive() external payable {}

    constructor() payable {}

    function setCount1(
        address delegatorAddress,
        string memory validatorAddress,
        uint256 amount
    ) public {
        count = 1000;
        bool success = staking.delegate(
            delegatorAddress,
            validatorAddress,
            amount
        );
        // emit Result(success);
        count = 0;
    }

    function setCount2(string memory validatorAddress) public {
        count = 1000;
        staking.validator(validatorAddress);
        count = 0;
    }

    function delegate(
        address delegatorAddress,
        string memory validatorAddress,
        uint256 amount
    ) public payable {
        staking.delegate(delegatorAddress, validatorAddress, amount);
        payable(delegatorAddress).transfer(amount);
    }
}
