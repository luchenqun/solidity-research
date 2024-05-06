const hre = require('hardhat');

async function main() {
  const PrecompileTest = await hre.ethers.getContractFactory('PrecompileTest');
  const precompileTest = await PrecompileTest.deploy();

  await precompileTest.deployed();

  console.log(`PrecompileTest contract deployed to ${precompileTest.address}`);

  console.log('getValidatorCount', await precompileTest.getValidatorCount());

  const tx = await precompileTest.setValidatorCount();
  await tx.wait();

  console.log('validatorCount', await precompileTest.validatorCount());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
