import { enumEsportes } from "./enumSportes";

export class User2 {
    public id: number;
    constructor(
        public nomeCompleto: string,
        public nomeUsuario: string,
        public fotoUsuario: string,
        public email: string,
        public dataNascimento: Date,
        public esporteFavorito: enumEsportes
    ) {
    }
}
