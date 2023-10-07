const { EAS, SchemaEncoder } = require('@ethereum-attestation-service/eas-sdk');
const ethers = require('ethers');
const { fromBytes, fromHex } = require('viem');

const EASContractAddress = '0xAcfE09Fd03f7812F022FBf636700AdEA18Fd2A7A'; // Sepolia v0.26

const url = 'https://goerli.base.org';
const provider = new ethers.providers.JsonRpcProvider(url);

const eas = new EAS(EASContractAddress);
const formEncoder = new SchemaEncoder(
  'string title, string description, bytes[] blocks'
);
eas.connect(provider);

eas
  .getAttestation(
    '0xaa8ed4b6ad1ad5a52fe365b6591ed1813cc2778d13260ad41331990d7ab03d88'
  )
  .then((r) => {
    const decodedData = formEncoder.decodeData(r.data);

    decodedData[2].value.value.map((item) =>
      console.log(JSON.parse(fromHex(item, 'string')))
    );
  });
