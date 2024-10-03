import ColecaoCliente from "@/backend/db/ColecaoCliente";
import Cliente from "@/core/Cliente";
import ClienteRepositorio from "@/core/ClienteRepositorio";
import { useEffect, useState } from "react";
import useTabelaOuForm from "./useTabelaOuForm";

export default function useClientes() {
    const repo: ClienteRepositorio = new ColecaoCliente();

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio);
    const [clientes, setClientes] = useState<Cliente[]>([]);

    const {
        tabelaVisivel,
        formularioVisivel,
        exibirTabela,
        exibirFormulario,
     } = useTabelaOuForm();

    useEffect(obterTodos, [])

    function obterTodos() {
        repo.obterTodos().then(clientes => {
            setClientes(clientes);
            exibirTabela();
        });
    }

    async function salvarCliente(cliente: Cliente) {
        await repo.salvar(cliente);
        obterTodos();
    }

    function novoCliente() {
        setCliente(Cliente.vazio)
        exibirFormulario();
    }

    function selecionarCliente(cliente: Cliente) {
        setCliente(cliente);
        exibirFormulario();
    }

    async function excluirCliente(cliente: Cliente) {
        await repo.excluir(cliente);
        obterTodos();
    }

    return{
        cliente,
        clientes,
        salvarCliente,
        novoCliente,
        selecionarCliente,
        excluirCliente,
        tabelaVisivel,
        exibirTabela,
    }
}