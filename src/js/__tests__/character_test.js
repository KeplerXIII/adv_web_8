import Character from '../character';

test('Create character', () => {
  const character1 = new Character('buba', 1, 'stable', 'defense');
  const correct = {
    name: 'buba',
    level: 1,
    status: 'stable',
    strategy: 'defense',
  };
  expect(character1).toEqual(correct);
});
