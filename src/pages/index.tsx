import Layout from "@/components/Layout";

export default function Home() {
  return (
    <main className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        Conteudo
      </Layout>
    </main>
  )
}
