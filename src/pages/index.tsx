import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";

import { useState } from "react";

export default function Home() {
  const clientes = [
    new Cliente("Ana", 22, "1"),
    new Cliente("Maria", 32, "2"),
    new Cliente("Joaquim", 50, "3"),
    new Cliente("Antonio", 49, "4"),
  ];

  const [visivel, setVisivel] = useState<"tabela" | "form">("tabela");
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio);

  function salvarCliente(cliente: Cliente) {
    console.log(cliente);
    setVisivel("tabela");
  }

  function novoCliente() {
    setCliente(Cliente.vazio)
    setVisivel("form");
  }


  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente);
    setVisivel("form");
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(cliente.idade);
  }

  return (
    <main
      className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}
    >
      <Layout titulo="Cadastro Simples">
        {visivel === "tabela" ? (
          <>
            <div className="flex justify-end">
              <Botao
                cor="green"
                className="mb-4"
                onClick={novoCliente}
              >
                Novo Cliente
              </Botao>
            </div>

            <Tabela
              clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            />
          </>
        ) : (
          <>
            <Formulario
              cliente={cliente}
              cancelado={() => setVisivel("tabela")}
              clienteMudou={salvarCliente}
            />
          </>
        )}
      </Layout>
    </main>
  );
}
