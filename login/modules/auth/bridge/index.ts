const data = {
  user: "admin",
  password: "123456.",
};

export /*actions*/ /*bundle*/
class Auth {
  async login(user: string, password: string) {
    if (user !== data.user || password !== data.password) {
      return { status: true, error: "Invalid data" };
    }

    return { status: true, data: { valid: true } };
  }
}

