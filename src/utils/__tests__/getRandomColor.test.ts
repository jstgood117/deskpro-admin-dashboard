import 'jest-extended';
import {
  getRandomItem,
  getColorByIndex,
  getColorByChar
} from '../getRandomColor';

describe('getRandomColor', () => {
  describe('getRandomItem', () => {
    test('returns object with background and textColor', () => {

      const result = getRandomItem();
      expect(result).toEqual(expect.objectContaining({
        background: expect.any(String),
        textColor: expect.any(String),
      }));

    });
  });

  describe('getColorByIndex', () => {
    test('returns object with background and textColor', () => {

      const result = getColorByIndex(0);

      expect(result).toEqual(expect.objectContaining({
        background: expect.any(String),
        textColor: expect.any(String),
      }));

    });
  });

  describe('getColorByChar', () => {
    test('returns object with background and textColor', () => {

      const resultA = getColorByChar('A');
      expect(resultA).toContainAllEntries([
        ['background', '#E1EEFB'],
        ['textColor', '#3A8DDE']
      ]);

      const resultB = getColorByChar('B');
      expect(resultB).toContainAllEntries([
        ['background', '#F9E6E1'],
        ['textColor', '#EC6C4E']
      ]);

      const resultC = getColorByChar('C');
      expect(resultC).toContainAllEntries([
        ['background', '#FFF8E1'],
        ['textColor', '#F8AF3C']
      ]);

      const resultD = getColorByChar('D');
      expect(resultD).toContainAllEntries([
        ['background', '#EBE4F2'],
        ['textColor', '#9384BD']
      ]);

      const resultE = getColorByChar('E');
      expect(resultE).toContainAllEntries([
        ['background', '#F7F7F7'],
        ['textColor', '#8B9293']
      ]);

      const resultF = getColorByChar('F');
      expect(resultF).toContainAllEntries([
        ['background', '#FAE8F0'],
        ['textColor', '#DF5E9C']
      ]);

      const resultG = getColorByChar('G');
      expect(resultG).toContainAllEntries([
        ['background', '#DAEEED'],
        ['textColor', '#54B162']
      ]);

      const resultRandom = getColorByChar('5');
      expect(resultRandom).toContainAllEntries([
        ['background', '#DAEEED'],
        ['textColor', '#54B162']
      ]);
    });
  });
});