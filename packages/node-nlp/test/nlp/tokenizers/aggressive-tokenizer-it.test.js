/*
 * Copyright (c) AXA Group Operations Spain S.A.
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

const { NlpUtil } = require('../../../src/nlp');

const tokenizer = NlpUtil.getTokenizer('it');

describe('Aggressive Tokenizer It', () => {
  describe('Constructor', () => {
    test('It should create a new instance', () => {
      expect(tokenizer).toBeDefined();
    });
  });
  describe('Tokenize', () => {
    test('It must tokenize simple sentence', () => {
      const expected = [
        'Quando',
        'arriva',
        'la',
        'notte',
        'e',
        'la',
        'terra',
        'è',
        'oscura',
      ];
      const actual = tokenizer.tokenize(
        'Quando arriva la notte e la terra è oscura',
        false
      );
      expect(actual).toEqual(expected);
    });
    test('It must tokenize and normalize', () => {
      const expected = [
        'quando',
        'arriva',
        'la',
        'notte',
        'e',
        'la',
        'terra',
        'e',
        'oscura',
      ];
      const actual = tokenizer.tokenize(
        'Quando arriva la notte e la terra è oscura',
        true
      );
      expect(actual).toEqual(expected);
    });
  });
});
