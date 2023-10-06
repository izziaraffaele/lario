import { FormNode, FormBuilderState } from './types';

export function getFormBlocks(state: FormBuilderState): FormNode['data'][] {
  return state.nodes.map((n) => n.data);
}
