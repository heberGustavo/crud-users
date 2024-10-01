import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";

export default function Home() {

  const clientes = [
    new Cliente('Ana', 22, '1'),
    new Cliente('Maria', 32, '2'),
    new Cliente('Joaquim', 50, '3'),
    new Cliente('Antonio', 49, '4'),
  ]

  return (
    <main className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        <Tabela clientes={clientes} />
      </Layout>
    </main>
  )
}
