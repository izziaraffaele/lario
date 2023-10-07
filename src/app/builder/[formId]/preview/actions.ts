'use server';

import { Web3Gate, Web3GateInstance } from '@/core/web3-gate';

type StepKey = keyof Web3GateInstance;
type StepParams<T extends StepKey> = Parameters<Web3GateInstance[T]>[1];

export async function verifyWeb3WorkflowStep<T extends StepKey>(
  key: T,
  ctx: { wallet: string },
  params: StepParams<T>
) {
  const verifiers = await Web3Gate.fromDefaults();
  const verifyStep = verifiers[key];

  return ctx.wallet ? verifyStep(ctx.wallet, params) : false;
}
