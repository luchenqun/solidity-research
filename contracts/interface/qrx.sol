// SPDX-License-Identifier: LGPL-3.0-only
pragma solidity >=0.8.16;

interface QRXI {
    /**
     * @dev Returns name of erc20.
     */
    function name() external view returns (string memory);

    /**
     * @dev Returns symbol of erc20.
     */
    function symbol() external view returns (string memory);

    /**
     * @dev Returns decimals of erc20.
     */
    function decimals() external view returns (uint8);

    /**
     * @dev Returns the amount of tokens in existence.
     */
    function totalSupply() external view returns (uint256);

    /**
     * @dev Returns the amount of tokens owned by `account`.
     */
    function balanceOf(address account) external view returns (uint256);

    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    /**
     * @dev Moves `amount` tokens from the caller's account to `to`.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transfer(address to, uint256 amount) external returns (bool);

    /**
     * @dev Returns true if this contract implements the interface defined by
     * `interfaceId`. See the corresponding
     * https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]
     * to learn more about how these ids are created.
     *
     * This function call must use less than 30 000 gas.
     */
    function supportsInterface(bytes4 interfaceId) external view returns (bool);

    event Delegate(
        address indexed delegatorAddress,
        address indexed validatorAddress,
        uint256 amount
    );

    function delegate(
        address delegatorAddress,
        address validatorAddress,
        uint256 amount
    ) external returns (bool success);

    function delegation(
        address delegatorAddress,
        address validatorAddress
    ) external view returns (uint256 amount);

    event Redelegate(
        address indexed delegatorAddress,
        address indexed validatorSrcAddress,
        address indexed validatorDstAddress,
        uint256 amount,
        uint256 completionTime
    );

    function redelegate(
        address delegatorAddress,
        address validatorSrcAddress,
        address validatorDstAddress,
        uint256 amount
    ) external returns (int64 completionTime);

    event Unbond(
        address indexed delegatorAddress,
        address indexed validatorAddress,
        uint256 amount,
        uint256 completionTime
    );

    function undelegate(
        address delegatorAddress,
        address validatorAddress,
        uint256 amount
    ) external returns (int64 completionTime);
}
