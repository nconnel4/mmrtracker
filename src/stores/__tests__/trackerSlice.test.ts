import reducer, { toggleItem, upgradeItem } from '../trackerSlice';

describe('Tracker slice state tests', () => {
  test('Item toggle should change active flag for item', () => {
    const initialState = {
      items: {
        ocarina: { name: 'Ocarina of Time', image: 'ocarina', type: 'item', active: false },
      },
      flags: {},
    };
    expect(reducer(initialState, toggleItem('ocarina')).items.ocarina.active).toBe(true);
  });
  test('Item should activate next item in progress', () => {
    const initialState = {
      items: {
        kokiriSword: {
          name: 'Kokiri Sword',
          image: 'kokiriSword',
          type: 'item',
          active: true,
          nextLevel: 'razorSword',
        },
        razorSword: { name: 'Razor Sword', image: 'razorSword', type: 'item', active: false },
      },
      flags: {},
    };
    expect(reducer(initialState, upgradeItem('kokiriSword')).items.razorSword.active).toBe(true);
  });
});
