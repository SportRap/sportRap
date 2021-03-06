import { enumEsportes } from "./enumSportes";

export class User {
    constructor(
        public id: number,
        public nomeCompleto: string,
        public nomeUsuario: string,
        public fotoUsuario: string,
        public senha: string,
        public email: string,
        public dataNascimento: Date,
        public esporteFavorito: enumEsportes
    ) { }
}
