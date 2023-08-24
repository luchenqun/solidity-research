const { ethers } = require("hardhat");

describe("Map", function () {
  let map;
  // 准备环境
  before(async function () {
    const Map = await ethers.getContractFactory("AddressToUintMap");
    map = await Map.deploy();
    await map.deployed();
    console.log("map deployed to:", map.address);
  });

  it("test", async function () {
    const address1 = "0x1111102Dd32160B064F2A512CDEf74bFdB6a9F96";
    const address2 = "0x2222207B1f7b8d37566D9A2778732451dbfbC5d0";
    const address3 = "0x33333BFfC67Dd05A5644b02897AC245BAEd69040";

    // 没有增加任何元素，所以此时长度应该为0
    console.log("length", await map.length());
    await map.set(address1, 1); // 添加元素
    console.log("length", await map.length()); // 新增元素了一对元素，此时长度为1
    console.log("contains address1", await map.contains(address1)); // 应该包含
    console.log("contains address2", await map.contains(address2)); // 不该包含

    await map.set(address2, 3); // 添加元素
    await map.set(address2, 8); // 添加元素，覆盖
    console.log("length", await map.length()); // 此时虽然添加了2个元素，但是有个是重复的。所以此时长度为2, 不为3
    console.log("at index 0", await map.at(0)); // 查索引对应的值，应该为(address1, 1)
    console.log("at index 1", await map.at(1)); // 查索引对应的值，应该为(address8, 8)
    try {
      console.log("at index 3", await map.at(3)); // 查没有的索引，应该报错
    } catch (error) {}

    await map.remove(address1); // 移除元素
    await map.set(address3, 88); // 添加元素

    // 遍历所有元素，应该有 (address2, 8), (address3, 88)
    const length = await map.length();
    for (let i = 0; i < length; i++) {
      const item = await map.at(i);
      console.log("item", item);
    }
  });
});
