const hre = require("hardhat");

async function main() {
  const HashContract = await hre.ethers.getContractFactory("HashContract");
  const hashContract = await HashContract.deploy();

  await hashContract.deployed();

  console.log(`HashContract contract deployed to ${hashContract.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
