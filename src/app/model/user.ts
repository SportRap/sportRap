export class User {
    public id: number;
    constructor(
        public nomeCompleto: string,
        public nomeUsuario: string,
        public fotoUsuario: string,
        public senha: string,
        public email: string,
        public dataNascimento: string,
        public esporteFavorito: string
    ) {
    }
}
