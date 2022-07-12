import { defineComponent, ref } from "vue";
import buscarTicketApi from "../helpers/buscarTicket";
import getTickets from "../helpers/getTickets";

import { Ticket } from "../interfaces/Ticket";

export default defineComponent({
  name: "TicketComponent",
  components: {},
  data() {
    return {
      vFechaSalida: { type: Date, default: "", value: "" },
      vCiudadOrigen: { type: String, default: "", value: "" },
      vCiudadDestino: { type: String, default: "", value: "" },
      vFechaRetorno: { type: Date, default: "", value: "" },
    };
  },
  methods: {
    buscarTicket: function () {
      const ticket: any = {
        ciudad_origen:
          this.vCiudadOrigen.value != "" ? this.vCiudadOrigen.toString() : "",
        fecha_retorno:
          this.vFechaRetorno.value != "" ? this.vFechaRetorno.toString() : "",
        fecha_salida:
          this.vFechaSalida.value != "" ? this.vFechaSalida.toString() : "",
        ciudad_destino:
          this.vCiudadDestino.value != "" ? this.vCiudadDestino.toString() : "",
      };
      for (var key in ticket) {
        if (ticket.key == "") {
          delete ticket[key];
        }
      }
      
      const setTicketsBuscados = async () => {
        this.TicketArr = await buscarTicketApi(ticket);
      };
      setTicketsBuscados();
    },
  },
  setup: () => {
    let TicketArr = ref<Ticket[]>([]);
    let CiudadOrigenArr = ref<string[]>([]);
    let CiudadDestinoArr = ref<string[]>([]);

    const geTick = async () => {
      TicketArr.value = await getTickets();
      TicketArr.value.forEach((ticket) => {
        CiudadOrigenArr.value.push(ticket.ciudad_origen);
        CiudadDestinoArr.value.push(ticket.ciudad_destino);
      });

      CiudadOrigenArr.value = CiudadOrigenArr.value.filter((item, index) => {
        return CiudadOrigenArr.value.indexOf(item) === index;
      });
      CiudadDestinoArr.value = CiudadDestinoArr.value.filter((item, index) => {
        return CiudadDestinoArr.value.indexOf(item) === index;
      });
    };

    console.log(CiudadOrigenArr);
    geTick();

    return {
      TicketArr,
      CiudadOrigenArr,
      CiudadDestinoArr,
    };
  },
});
