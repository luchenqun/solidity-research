// SPDX-License-Identifier: LGPL-3.0-only

struct Coin {
    string denom;
    uint256 amount;
}

struct DecCoin {
    string denom;
    uint256 amount;
    uint8 precision;
}

interface DistributionI {
    function fundCommunityPool(
        Coin[] memory amount
    ) external returns (bool success);

    function communityPool() external view returns (DecCoin[] memory pool);
}

contract DistributionTest {
    DistributionI public distribution =
        DistributionI(0x0000000000000000000000000000000000001004);
    int64 public counter;

    constructor() {
        counter = 255;
    }

    receive() external payable {}

    function testFundCommunityPool(
        Coin[] memory amount
    ) public returns (bool success) {
        counter += 1;
        success = distribution.fundCommunityPool(amount);
        counter -= 2;
        return success;
    }
}
