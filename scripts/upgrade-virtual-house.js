// scripts/upgrade-virtual-house.js
const { ethers, upgrades } = require("hardhat");

async function main() {
  const VirtualHouseAddress = "";
  const VirtualHouseV2 = await ethers.getContractFactory("VirtualHouseV2");
  const virtualHouse = await upgrades.upgradeProxy(VirtualHouseAddress, VirtualHouseV2);
  console.log("VirtualHouse upgraded");
}

main();
