class SessionService {
  static login(user, password) {
    return new Promise((resolve, reject) => {
      if (user === 'admin' && password === '1234567890') {
        setTimeout(() => resolve(), 2000);
      } else {
        // eslint-disable-next-line
        setTimeout(() => reject({ code: '401', message: 'usuario y/contraseña incorrecta' }), 2000);
      }
    });
  }

  static logout() {
    return new Promise(resolve => {
      setTimeout(() => resolve(), 2000);
    });
  }
}

export default SessionService;
