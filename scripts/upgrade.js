// scripts/deploy.js
async function main() {
    const BoxV2 = await ethers.getContractFactory("BoxV2")
    let box = await upgrades.upgradeProxy("0x76527d8ada44d7Da28c5dd248b69304528C549eF", BoxV2)
    console.log("Box upgraded to:", box.address)

}

  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });