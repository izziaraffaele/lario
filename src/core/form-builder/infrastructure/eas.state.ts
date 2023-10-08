import {
  Attestation,
  SchemaEncoder,
} from '@ethereum-attestation-service/eas-sdk';
import { FormNode } from '../types';
import { getDefaultEdges, getTreeEdges } from '../edge';
import { getDefaultLayout, makeNode } from '../node';
import { fromHex } from 'viem';
import { FormBlock } from '@quillforms/types';

const formEncoder = new SchemaEncoder(
  'string title, string description, bytes[] blocks'
);

type JSONValue = string | number | boolean | JSONObject | JSONArray;

type JSONObject = {
  [x: string]: JSONValue;
};

type JSONArray = Array<JSONValue>;

type AttestationNode = {
  id: string;
  type: string;
  parentNode?: string;
  attributes: JSONObject;
};

export function getAttestationBlocks(
  attestation: Attestation
): AttestationNode[] {
  const [title, description, blocks] = formEncoder.decodeData(attestation.data);

  return (blocks.value.value as `0x${string}`[]).map((item) =>
    JSON.parse(fromHex(item, 'string'))
  );
}

export function fromAttestation(attestation: Attestation) {
  const nodes: FormNode[] = getAttestationBlocks(attestation).map((block) => {
    const node = makeNode(block.type, block.id, {
      id: block.id,
      name: block.type,
      attributes: block.attributes as FormBlock['attributes'],
    });
    node.parentNode = block.parentNode;
    return node;
  });

  return { nodes: getDefaultLayout(nodes), edges: getTreeEdges(nodes) };
}
