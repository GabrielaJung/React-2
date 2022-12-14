import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias";

import "./assets/App.css";
import './assets/index.css';

import Categorias from "./dados/Categorias.js";
import ArrayDeNotas from "./dados/ArrayDeNotas.js";

class App extends Component {

  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
/*
    this.state = {
      notas: [],
      categorias: [],
    };
*/
  }
/*
criarNota(titulo, texto, categoria) {
    const novaNota = { titulo, texto, categoria };
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas: novoArrayNotas
    }
    this.setState(novoEstado)
  }

adicionarCategoria(nomeCategoria) {
    const novoArrayCategorias = [...this.state.categorias, nomeCategoria]
    const novoEstado = { ...this.state, categorias: novoArrayCategorias }
    this.setState(novoEstado);

  }

  deletarNota(index) {
    let arrayNotas = this.state.notas
    arrayNotas.splice(index, 1);
    this.setState({ notas: arrayNotas })
    console.log("deletar")
  }
*/
  render() {
    //mudar todos os que possuiam .state para o nome da class equivalente
    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.categorias}
          criarNota={this.notas.adicionarNota.bind(this.notas)} />

        <main className="conteudo-principal">

          <ListaDeCategorias
            adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
            categorias={this.categorias}
          />

          <ListaDeNotas
            apagarNota={this.notas.apagarNota.bind(this.notas)}
            notas={this.notas} />

        </main>

      </section>
    );
  }
}

//new ListaDeNotas({notas:this.notas})
export default App;