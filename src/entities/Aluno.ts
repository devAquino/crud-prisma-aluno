export class Aluno {
    id?: string;
    name: string;
    phone: string;
    password: string;

  
    private constructor({name, phone, password }: Aluno) {
      return Object.assign(this, {
        name,
        phone,
        password,
      });
    }
  
    static create({ name, phone, password }: Aluno) {
      const aluno = new Aluno({ name, phone, password });
      return aluno;
    }
}

  