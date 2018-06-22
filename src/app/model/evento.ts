import { User } from "./user";
import { enumEsportes } from "./enumSportes";

export class Evento {
     nomeEvento : string;
     descricaoEvento : string;
     dataEvento : string;
     localEvento : string;
     criadorEvento : User;
     esporteEscolhidoEnum : enumEsportes;
     membrosTime1 : string[] = [];
     membrosTime2 : string[] = [];
}