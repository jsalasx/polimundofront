export interface Ticket {
    id?: number;
    ciudad_origen:string;
    ciudad_destino : string;
    fecha_salida?: String;
    fecha_retorno?: String;
    precio?: number;
    aerolinea? : string;
    numero_escalas? :number;
    duracion?: string
}