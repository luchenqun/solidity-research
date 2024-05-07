const hre = require('hardhat');

async function main() {
  const PrecompileBug = await hre.ethers.getContractFactory('PrecompileBug');
  const delegatorAddress = '0x00000be6819f41400225702d32d3dd23663dd690';
  const validatorAddress = 'evmosvaloper144e9he9zg4v5tfkypxjvahampewsmal43zt70v';
  const amount = '1000000000000000000';

  const precompileBug = await PrecompileBug.deploy({ value: amount });
  await precompileBug.deployed();

  console.log(`PrecompileBug contract deployed to ${precompileBug.address}`);
  let tx;

  tx = await precompileBug.setCount2(validatorAddress);
  await tx.wait();
  console.log(await precompileBug.count());

  // tx = await precompileBug.delegate(delegatorAddress, validatorAddress, amount);
  // await tx.wait();

  // tx = await precompileBug.delegate(delegatorAddress, validatorAddress, amount);
  // await tx.wait();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
