import ErrorRepository from '../err_repo';

describe('Err tests', () => {
  const errors = [
    [100, 'Error 100'],
    [200, 'Error 200'],
    [300, 'Error 300'],
    [999, 'Unknown error'],
  ];
  const errRepo = new ErrorRepository(errors);

  test('Создание класса', () => {
    expect(errRepo.errLib.size).toBe(4);
  });

  test('Получение "Unknown error"', () => {
    expect(errRepo.translate(500)).toBe('Unknown error');
  });

  test('Получение кастомной ошибки', () => {
    expect(errRepo.translate(100)).toBe('Error 100');
  });
});
