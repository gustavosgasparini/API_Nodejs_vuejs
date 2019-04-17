<template>
  <div class="hello">
    <b-container>
      <b-row class="justify-content-center">
        <b-col col md="8">
          <!-- formulario criar faturas -->
          <b-card title="Cadastro de faturas" sub-title="Cadastre uma nova fatura" class="mb-4 mt-4">
            <b-form class="mt-4" @submit.prevent="salvar" @reset.prevent="onReset">

              <b-form-group id="input-group-emp-req">
                <b-row>
                  <b-col md="6" class="mb-3">
                    <b-form-input id="input-empresa" v-model="formFatura.nomeEmpresa" type="text" required placeholder="Nome da empresa"></b-form-input>
                  </b-col>
                  <b-col md="6">
                    <b-form-input id="input-requerente" v-model="formFatura.iDusuario" type="text" required placeholder="Nome do requerente"></b-form-input>
                  </b-col>
                </b-row>
              </b-form-group>

              <b-form-group id="input-group-val-pag">
                <b-row>
                  <b-col md="6" class="mb-3">
                    <b-form-input id="input-valor" v-model="formFatura.valor" type="number" step="0.01" required placeholder="Valor a ser pago"></b-form-input>
                  </b-col>
                  <b-col md="6">
                    <b-form-select id="input-pagou" v-model="formFatura.pagou" :options="pagouOp" required>
                    </b-form-select>
                  </b-col>
                </b-row>
              </b-form-group>

              <b-button type="submit" variant="outline-info" class="mr-2">Adicionar fatura</b-button>
              <b-button type="reset" variant="outline-danger">Apagar dados</b-button>

            </b-form>
          </b-card>

          <hr>
          <h5 class="mb-3 mt-4">LISTA DE FATURAS</h5>

          <!-- for loop faturas -->
          <div v-for="fatura in faturas" :key="fatura.id">
            <router-link v-bind:to="'/fatura/' + fatura._id">
            <b-card title="Pagamento de fatura" sub-title="Clique no card para mais detalhes" class="mb-3 mt-4">
              <b-row>

                <b-col col md="8">
                  <b-card-text class="mt-2">
                    <strong>Código fatura:</strong> {{ fatura._id }} <br>
                    <strong>Requerente:</strong> {{ fatura.iDusuario }} <br>
                    <strong>Empresa:</strong> {{ fatura.nomeEmpresa }} <br>
                    <div v-if="fatura.pagou === 'Fatura paga'">
                      <strong>Situação:</strong> <span id="verde"> {{ fatura.pagou }}</span>
                    </div>
                    <div v-else>
                      <strong>Situação:</strong> <span id="vermelho"> {{ fatura.pagou }}</span>
                    </div>
                  </b-card-text>
                </b-col>

                <b-col col md="4">
                  <router-link to="/">
                    <b-button variant="outline-danger" size="lg" @click="remover(fatura._id)" class="mr-2 ml-1 mt-3">Excluir</b-button>
                  </router-link>
                  <router-link v-bind:to="`/fatura/editar/${fatura._id}`">
                    <b-button variant="outline-info" size="lg" class="mt-3">Editar</b-button>
                  </router-link>
                </b-col>

              </b-row>
            </b-card>
          </router-link>

          </div>
          

        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Fatura from '../service/fatura'

export default {
  data() {
    return {
      id: this.$route.params.id,
      formFatura: {
        nomeEmpresa: "",
        iDusuario: "",
        valor: "",
        pagou: null,
      },
      pagouOp: [{ text: "Situação da fatura", value: null }, "Fatura paga", "Não paga"],
      faturas: []
    }
  },

  mounted(){
    this.listar()
  },

  methods: {
    listar() {
      Fatura.listar().then(resposta => {
        this.faturas = resposta.data
      })
    },

    salvar() {
      Fatura.salvar(this.formFatura).then(() => {
        this.formFatura = {}
        alert('Fatura salva com sucesso')
        this.listar()
      })
    },

    remover(_id) {
      if (confirm('Deseja excluir essa fatura?')) {
        Fatura.apagar(_id).then(() => {
          this.listar()
        })
      }
    },

    onReset(evt) {
      evt.preventDefault()
      this.formFatura.nomeEmpresa = ""
      this.formFatura.iDusuario = ""
      this.formFatura.valor = ""
      this.formFatura.pagou = null
    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #vermelho {
    color: #ed6363;
    font-weight: 800; 
  }
  #verde {
    color: #42b983;
    font-weight: 800;    
  }
  .card {
    text-align: left;
    box-shadow: 0px 0px 30px #d1d1d1;
    border-radius: 15px;
    -webkit-transition: 0.5s;
  }
  .card:hover {
    background-color: #f2f2f2;
  }
  .card-link {
    color: #42b983
  }
  a {
    color: #2c3e50;
    text-decoration: none;
  }
  a:hover {
    color: #2c3e50;
    text-decoration: none;
  }
</style>
