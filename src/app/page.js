import { redirect } from 'next/navigation'

export default function redirecionar() {
  return (
    <main className='max-w-screen-lg mx-auto text-center'>
      <section className='container mx-auto my-8'>
        <p className='sec-text'>Gerencie seu estoque da melhor maneira</p>
      </section>

      <article>
        <div className='flex flex-wrap justify-center mx-auto my-8 text-justify container-mvsao'>
          <div className='max-w-lg mvsao lg:mx-8'>
            <p className='mt-4'>
              Nossa missão é ajudar pequenas e médias empresas a gerenciar seus
              estoques de maneira mais eficiente e eficaz, permitindo que elas
              possam se concentrar em expandir seus negócios e atender às
              necessidades de seus clientes. Entendemos que o gerenciamento de
              estoque pode ser um processo complexo e desafiador, especialmente
              para aqueles que estão iniciando um negócio, e é por isso que
              estamos comprometidos em fornecer soluções simples, intuitivas e
              acessíveis para todos.
            </p>
          </div>

          <div className='max-w-lg mvsao lg:mx-8'>
            <p className='mt-4'>
              Nossa visão é ser a principal referência em software de controle
              de estoque para pequenas e médias empresas em todo o mundo.
              Queremos ser reconhecidos pela qualidade de nossos produtos, pela
              eficiência de nossos serviços e pela empatia com que tratamos
              nossos clientes. Além disso, queremos ser uma empresa que inspira
              mudanças positivas no mundo dos negócios, fornecendo soluções
              inovadoras que ajudam nossos usuários a serem mais eficientes e
              eficazes em seus negócios. Queremos ser uma força positiva para o
              crescimento e a prosperidade das empresas em todo o mundo.
            </p>
          </div>
        </div>
      </article>
    </main>
  )
}
