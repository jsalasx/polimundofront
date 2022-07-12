<script src="./TicketComponent" lang="ts">




</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-5">
                <form @submit.prevent="buscarTicket">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Ciudad Origen</label>
                        <select class="form-select" id="ciudad_o" v-model="vCiudadOrigen" aria-describedby="emailHelp">
                            <option value=""></option>    
                            <option v-for="ciudad_o in CiudadOrigenArr"  :key="ciudad_o" :value="ciudad_o"> {{ciudad_o}}</option>
                            </select>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Ciudad Destino</label>
                        <select class="form-select" id="exampleInputEmail2"  v-model="vCiudadDestino" aria-describedby="emailHelp">
                            <option value=""></option>
                            <option v-for="ciudad_d in CiudadDestinoArr" :key="ciudad_d" :value="ciudad_d"> {{ciudad_d}}</option>
                            </select>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Fecha Salida</label>
                        <input type="date" v-model="vFechaSalida"  class="form-control" id="exampleInputPassword1">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Fecha Retorno</label>
                        <input type="date" v-model="vFechaRetorno"  class="form-control" id="exampleInputPassword2">
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <table class="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Ciudad Origen</th>
                            <th>Ciudad Destino</th>
                            <th>Fecha Salida</th>
                            <th>Fecha Retorno</th>
                            <th>Precio</th>
                            <th>Aerolinea</th>
                            <th>Numero de Escalas</th>
                            <th>Duracion</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="ticket in TicketArr ">
                            <td>{{ ticket.id }}</td>
                            <td>{{ ticket.ciudad_origen }}</td>
                            <td>{{ ticket.ciudad_destino }}</td>
                            <td>{{ ticket.fecha_salida }}</td>
                            <td>{{ ticket.fecha_retorno }}</td>
                            <td>{{ ticket.precio }}</td>
                            <td>{{ ticket.aerolinea }}</td>
                            <td>{{ ticket.numero_escalas }}</td>
                            <td>{{ ticket.duracion }}</td>
                        </tr>
                    </tbody>

                </table>

            </div>
        </div>
    </div>


</template>

<style scoped>
a {
    color: #42b983;
}

label {
    margin: 0 0.5em;
    font-weight: bold;
}

code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
}
</style>
