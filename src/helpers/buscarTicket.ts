import { Ticket } from '../interfaces/Ticket';
import  polimundoApi  from '../api/polimundoApi';


export async function buscarTicketApi  (ticket: any): Promise<Ticket[]>  {
    const response= await polimundoApi.post('/ticketssearch', JSON.stringify(ticket))
    console.log(ticket);
    console.log(response);
    return response.data;
}

export default buscarTicketApi;