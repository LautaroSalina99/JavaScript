// Implementación de una cuenta bancaria
class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }

  getBalance() {
    return this.balance;
  }
}

// Proxy para controlar el acceso a la cuenta bancaria
class BankAccountProxy {
  constructor(account, user) {
    this.account = account;
    this.user = user;
  }

  getBalance() {
    if (this.user.isAuthenticated()) {
      console.log(`El usuario ${this.user.username} está consultando el saldo de la cuenta.`);
      return this.account.getBalance();
    } else {
      throw new Error('Usuario no autenticado. Acceso denegado.');
    }
  }
}

// Usuario simulado
class User {
  constructor(username, isAuthenticated) {
    this.username = username;
    this.isAuthenticated = isAuthenticated;
  }
}

module.exports = { BankAccount, BankAccountProxy, User };