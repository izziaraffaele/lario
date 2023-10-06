import { createStore } from '@/core/form-builder';

export const useFormBuilderStore = createStore({
  nodes: [
    {
      id: 'start',
      position: { x: 0, y: 0 },
      type: 'start',
      data: {},
      selectable: false,
      draggable: false,
    },
    {
      id: 'end',
      position: { x: 0, y: 0 },
      type: 'end',
      data: {},
      selectable: false,
    },
  ],
  edges: [],
});
