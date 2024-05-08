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
