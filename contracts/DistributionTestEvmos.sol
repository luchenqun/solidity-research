// SPDX-License-Identifier: LGPL-3.0-only

interface DistributionI {
    function fundCommunityPool(
        address depositor,
        uint256 amount
    ) external returns (bool success);
}

contract DistributionTestEvmos {
    DistributionI public distribution =
        DistributionI(0x0000000000000000000000000000000000000801);
    int64 public counter;

    constructor() {
        counter = 255;
    }

    receive() external payable {}

    function testFundCommunityPool(
        address depositor,
        uint256 amount
    ) public returns (bool success) {
        counter += 1;
        success = distribution.fundCommunityPool(depositor, amount);
        counter -= 1;
        return success;
    }
}
