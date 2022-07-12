import { Ticket } from '../interfaces/Ticket';
import  polimundoApi  from '../api/polimundoApi';


export async function buscarTicketApi  (ticket: Ticket): Promise<Ticket[]>  {
    const response= await polimundoApi.post('/ticketssearch', JSON.stringify(ticket))
    //console.log(ticket);
    return response.data;
}
const getTickets = async (): Promise<Ticket[]> => {
    const response= await polimundoApi.get('/tickets');
    //console.log(response);
    return response.data;
}

export default getTickets; buscarTicketApi;