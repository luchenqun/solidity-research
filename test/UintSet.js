const { ethers } = require("hardhat");

describe("Set", function () {
  let set;
  // 准备环境
  before(async function () {
    const Set = await ethers.getContractFactory("UintSet");
    set = await Set.deploy();
    await set.deployed();
    console.log("set deployed to:", set.address);
  });

  it("test", async function () {
    // 没有增加任何元素，所以此时长度应该为0
    console.log("length", await set.length());

    await set.add(1);
    console.log("length", await set.length()); // 新增元素1，此时长度为1
    console.log("contains 1", await set.contains(1)); // 应该包含
    console.log("contains 2", await set.contains(2)); // 不该包含

    await set.add(1); // 添加重复元素
    await set.add(8); // 添加非重复元素
    console.log("length", await set.length()); // 此时虽然添加了2个元素，但是有个是重复的。所以此时长度为2
    console.log("at index 0", await set.at(0)); // 查索引对应的值，应该为1
    console.log("at index 1", await set.at(1)); // 查索引对应的值，应该为8
    try {
      console.log("at index 3", await set.at(3)); // 查没有的索引，应该报错
    } catch (error) {}

    await set.remove(1); // 移除元素

    console.log("values", await set.values()); // 因为移除了1，所以应该只有元素8了
  });
});
