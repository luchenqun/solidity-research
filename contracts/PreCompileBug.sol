// SPDX-License-Identifier: Apache-2.0

pragma solidity ^0.8.0;

interface StakingI {
    // 注意原来的预编译合约接口返回的是一个Validator结构体数据
    // 这里我简单返回了string，与重现漏洞无关
    function validator(
        string memory validatorAddress
    ) external view returns (string calldata validator);
}

contract PrecompileBug {
    uint256 public count = 0;

    function setCount() public {
        count = 255;
        StakingI staking = StakingI(0x0000000000000000000000000000000000000800);
        staking.validator(
            "evmosvaloper1wgmweh3ayhnnpy7lqxd7zll78sjv6kvfms9t8h"
        );
        count = 0;
    }

    // 用于多次测试
    function resetCount() public {
        count = 0;
    }
}

// pragma solidity ^0.8.0;
// /**
//  * @dev Description defines a validator description.
//  */
// struct Description {
//     // moniker defines a human-readable name for the validator.
//     string moniker;
//     // identity defines an optional identity signature (ex. UPort or Keybase).
//     string identity;
//     // website defines an optional website link.
//     string website;
//     // securityContact defines an optional email for security contact.
//     string securityContact;
//     // details define other optional details.
//     string details;
// }

// /**
//  * @dev CommissionRates defines the initial commission rates to be used for creating a validator.
//  */
// struct CommissionRates {
//     // rate defines the maximum commission rate which validator can ever charge, as a fraction.
//     uint256 rate;
//     // maxRate defines the maximum commission rate which validator can ever charge, as a fraction.
//     uint256 maxRate;
//     // maxChangeRate defines the maximum daily increase of the validator commission, as a fraction.
//     uint256 maxChangeRate;
// }

// /**
//  * @dev Commission defines commission parameters for a given validator.
//  */
// struct Commission {
//     // commissionRates defines the initial commission rates to be used for creating a validator
//     CommissionRates commissionRates;
//     // updateTime defines the validator update commissionRates time
//     int64 updateTime;
// }

// /**
//  * @dev BondStatus is the status of a validator.
//  */
// enum BondStatus {
//     // Unspecified defines an invalid validator status.
//     Unspecified,
//     // Unbonded defines a validator that is not bonded.
//     Unbonded,
//     // Unbonding defines a validator that is unbonding.
//     Unbonding,
//     // Bonded defines a validator that is bonded.
//     Bonded
// }

// /**
//  * @dev Validator defines a validator, together with the total amount of the
//  * Validator's bond shares and their exchange rate to coins. Slashing results in
//  * a decrease in the exchange rate, allowing correct calculation of future
//  * undelegations without iterating over delegators. When coins are delegated to
//  * this validator, the validator is credited with a delegation whose number of
//  * bond shares is based on the amount of coins delegated divided by the current
//  * exchange rate. Voting power can be calculated as total bonded shares
//  * multiplied by exchange rate.
//  */
// struct Validator {
//     // operatorAddress defines the address of the validator's operator
//     address operatorAddress;
//     // consensusPubkey is the consensus public key of the validator
//     string consensusPubkey;
//     // jailed defined whether the validator has been jailed from bonded status or not.
//     bool jailed;
//     // status is the validator status (bonded/unbonding/unbonded).
//     BondStatus status;
//     // tokens define the delegated tokens (incl. self-delegation).
//     uint256 tokens;
//     // delegatorShares defines total shares issued to a validator's delegators.
//     uint256 delegatorShares;
//     // description defines the description terms for the validator.
//     Description description;
//     // unbonding_height defines, if unbonding, the height at which this validator has begun unbonding.
//     int64 unbondingHeight;
//     // unbonding_time defines, if unbonding, the min time for the validator to complete unbonding.
//     int64 unbondingTime;
//     // commission defines the commission parameters.
//     Commission commission;
//     // minSelfDelegation is the validator's self declared minimum self delegation.
//     uint256 minSelfDelegation;
// }

// interface StakingI {
//     // 注意原来的预编译合约接口返回的是一个Validator结构体数据
//     // 这里我简单返回了string，与重现漏洞无关
//     function validator(
//         address validatorAddr
//     ) external view returns (Validator calldata validator);
// }

// contract PrecompileBug {
//     uint256 public count = 0;

//     function setCount() public {
//         count = 255;
//         StakingI staking = StakingI(0x0000000000000000000000000000000000001003);
//         Validator memory validator = staking.validator(
//             0xbf657D0ef7b48167657A703Ed8Fd063F075246D7
//         );
//         count = validator.tokens;
//     }

//     // 用于多次测试
//     function resetCount() public {
//         count = 0;
//     }
// }
