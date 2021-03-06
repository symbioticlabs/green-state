import * as assert from 'assert';
import { NumberState } from '../../src/state';
import { listenSeries } from '../support';

describe('NumberState', () => {

  it('happy path', () => {

    const sut = new NumberState(10);

    listenSeries(
      sut,

      // First
      state => {
        const { value, set } = state;
        assert.equal(value, 10);
        setImmediate(() => set(20));
      },

      // Second
      state => {
        const { value } = state;
        assert.equal(value, 20);
      },
    );
  });

});
