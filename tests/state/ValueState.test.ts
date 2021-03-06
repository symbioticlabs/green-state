import * as assert from 'assert';
import { ValueState } from '../../src/state';
import { listenSeries } from '../support';

describe('ValueState', () => {

  it('happy path', () => {

    const sut = new ValueState({ message: 'first' });

    listenSeries(
      sut,

      // First
      state => {
        const { value, set } = state;
        assert.deepEqual(value, { message: 'first' });
        setImmediate(() => set({ message: 'second' }));
      },

      // Second
      state => {
        const { value } = state;
        assert.deepEqual(value, { message: 'second' });
      },
    );

  });

});
