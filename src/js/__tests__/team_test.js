import Team from '../team';
import Character from '../character';

describe('Team', () => {
  const char1 = new Character('buba', 1, 'stable', 'defense');
  const char2 = new Character('biba', 1, 'stable', 'attack');
  test('Метод add добавляет персонажа в команду', () => {
    const team = new Team();
    team.add(char1);

    expect(team.members.size).toBe(1);
    expect(team.members.has(char1)).toBe(true);
  });

  test('Метод add выбрасывает ошибку при повторном добавлении персонажа', () => {
    const team = new Team();
    team.add(char1);

    expect(() => {
      team.add(char1);
    }).toThrowError('Этот персонаж уже в команде.');

    expect(team.members.size).toBe(1);
  });

  test('Метод addAll добавляет несколько персонажей в команду', () => {
    const team = new Team();
    team.addAll(char1, char2, char2);

    expect(team.members.size).toBe(2);
    expect(team.members.has(char1)).toBe(true);
    expect(team.members.has(char2)).toBe(true);
  });

  test('Метод toArray правильно конвертирует Set в массив', () => {
    const team = new Team();
    team.addAll(char1, char2);

    const charactersArray = team.toArray();

    expect(Array.isArray(charactersArray)).toBe(true);
    expect(charactersArray).toContain(char1);
    expect(charactersArray).toContain(char2);
    expect(charactersArray).toHaveLength(2);
  });
});
