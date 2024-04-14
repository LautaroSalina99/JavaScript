const { BankAccount, BankAccountProxy, User } = require('./bankAccountProxy');

// Prueba de acceso sin autenticación
test('Acceso sin autenticación debería lanzar un error', () => {
  const account = new BankAccount(1000);
  const user = new User('usuario1', false);
  const proxy = new BankAccountProxy(account, user);

  expect(() => {
    proxy.getBalance();
  }).toThrow('Usuario no autenticado. Acceso denegado.');
});

// Prueba de acceso con autenticación
test('Acceso con autenticación debería devolver el saldo de la cuenta', () => {
  const account = new BankAccount(2000);
  const user = new User('usuario2', true);
  const proxy = new BankAccountProxy(account, user);

  expect(proxy.getBalance()).toBe(2000);
});
