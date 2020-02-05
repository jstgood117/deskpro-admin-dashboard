import {
  getColor,
} from '../apiToComponentAdapter';

describe('getColor', () => {
  test('for index 0 returns correct color', () => {
    const color0 = getColor(0);

    expect(color0).toEqual({ background: '#E1EEFB', textColor: '#3A8DDE' });
  });

  test('for index 1 returns correct color', () => {
    const color1 = getColor(1);

    expect(color1).toEqual({ background: '#F9E6E1', textColor: '#EC6C4E' });
  });

  test('for index 2 returns correct color', () => {
    const color2 = getColor(2);

    expect(color2).toEqual({ background: '#FFF8E1', textColor: '#F8AF3C' });
  });

  test('for index 3 returns correct color', () => {
    const color3 = getColor(3);

    expect(color3).toEqual({ background: '#EBE4F2', textColor: '#9384BD' });
  });

  test('for index 4 returns correct color', () => {
    const color4 = getColor(4);

    expect(color4).toEqual({ background: '#F7F7F7', textColor: '#8B9293' });
  });

  test('for index 5 returns correct color', () => {
    const color5 = getColor(5);

    expect(color5).toEqual({ background: '#FAE8F0', textColor: '#DF5E9C' });
  });

  test('for index 6 returns correct color', () => {
    const color6 = getColor(6);

    expect(color6).toEqual({ background: '#DAEEED', textColor: '#54B162' });
  });
});
