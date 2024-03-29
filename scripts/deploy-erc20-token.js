const hre = require("hardhat");

async function main() {
  const ERC20Token = await hre.ethers.getContractFactory("TetherToken");
  const erc20Token = await ERC20Token.deploy("Tether USD", "USDT");

  await erc20Token.deployed();

  console.log(`ERC20Token contract deployed to ${erc20Token.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
