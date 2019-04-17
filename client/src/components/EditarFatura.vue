<template>
  <div>
   <b-container>
      <b-row class="justify-content-center">
        <b-col col md="9">
          <b-card title="Atualizar fatura" sub-title="" class="mb-4 mt-4">
            <hr>
            <b-form class="mt-4" @submit.prevent="atualizar">

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

              <b-button type="submit" variant="outline-info" class="mr-2">Atualizar fatura</b-button>

            </b-form>
          </b-card>

          <b-card title="Detalhes da fatura" sub-title="" class="mb-3 mt-4">
            <hr>
            <b-row>
              <b-col col md="5">
                <img src="http://guiaavare.com/public/Upload/images/como-imprimir-boleto-bancario-itau.png" id="img-arrumar">
              </b-col>

              <b-col col md="7">
                <b-card-text class="mt-2">
                  <strong>Código fatura:</strong> {{ faturas._id }} <br><br>
                  <strong>Requerente:</strong> {{ faturas.iDusuario }} <br>
                  <strong>Empresa:</strong> {{ faturas.nomeEmpresa }} <br>
                  <strong>Data de vencimento:</strong> {{ faturas.dataVencimento }}
                  <div v-if="faturas.pagou === 'Fatura paga'">
                    <strong>Situação:</strong> <span id="verde"> {{ faturas.pagou }}</span>
                  </div>
                  <div v-else>
                    <strong>Situação:</strong> <span id="vermelho"> {{ faturas.pagou }}</span>
                  </div><br>
                  <strong>Valor</strong> <h3>R$ {{ faturas.valor }}</h3>
                </b-card-text>

                <router-link to="/">
                  <b-button variant="outline-primary" class="mr-2 ml-1 mt-3">Voltar inicio</b-button>
                </router-link>
                <router-link v-bind:to="`/fatura/${faturas._id}`">
                  <b-button variant="outline-info" class="mr-2 ml-1 mt-3">Voltar para fatura</b-button>
                </router-link>

              </b-col>

            </b-row>
          </b-card>
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

  created(){
    this.listar()
  },

  methods: {
    listar() {
      Fatura.listarUmaFatura(this.id).then(resposta => {
        this.faturas = resposta.data
        this.formFatura = { 
          nomeEmpresa: this.faturas.nomeEmpresa,
          iDusuario: this.faturas.iDusuario,
          valor: this.faturas.valor,
          pagou: this.faturas.pagou
        }
      })
    },

    atualizar() {
      Fatura.atualizar(this.id, this.formFatura).then(() => {
        this.formFatura = {}
        alert('fatura atualizada')
        this.listar()
      })
    },

  }
}
</script>

<style scoped>
  #img-arrumar {
    width: 100%;
    margin-top: 0px;
  }
  .card-title {
      margin-bottom: 0.75rem;
      text-align: center;
  }
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
