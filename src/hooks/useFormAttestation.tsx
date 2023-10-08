import { EAS } from '@ethereum-attestation-service/eas-sdk';
import { ethers } from 'ethers';
import useSWR from 'swr';

const eas = new EAS('0xAcfE09Fd03f7812F022FBf636700AdEA18Fd2A7A');

const url = 'https://goerli.base.org';
const provider = new ethers.providers.JsonRpcProvider(url) as any;

eas.connect(provider);

export function useFormAttestation(attestationId: string) {
  return useSWR(
    attestationId,
    () =>
      attestationId && attestationId.startsWith('0x')
        ? eas.getAttestation(attestationId)
        : null,
    {
      revalidateOnReconnect: false,
      revalidateIfStale: false,
      revalidateOnFocus: false,
    }
  );
}
