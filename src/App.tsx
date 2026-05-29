import { useState } from 'react'


import menuButton from './assets/menu.png'
import hand from './assets/hand.png'
import ProjectCards from './components/ProjectCards'
import VideoBg from './components/VideoBg'


// imagens e videos
import RoomsCheckManagerImg from './assets/Rooms Check Manager.png'
import videoBg from './assets/videos/background3.mp4'


function App() {

  const [isLoading, setIsLoading] = useState(true);
  return (
    <section className=' bg-black/60 sm:bg-black/80'>

      {/* Tela de Loading */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transition-opacity duration-500">
          {/* Spinner de carregamento em Tailwind */}
          <div className="w-12 h-12 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
          <p className="text-white mt-4 font-medium tracking-widest text-sm animate-pulse">
            CARREGANDO EXPERIÊNCIA...
          </p>
        </div>
      )}

      {/* Vídeo de backgorund */}
      <VideoBg videoUrl={videoBg} onVideoLoaded={() => setIsLoading(false)}/>

      <section className="absolute top-0 left-0 right-0 z-10 w-screen max-w-[1200px] mx-auto px-5">
        <main className="flex flex-col ">

          <nav className="flex justify-between items-center py-4">
            <h1 className="text-xl font-bold md:text-5xl "><span>Douglas Teixeira</span></h1>
            <button className="border-none bg-none p-0 cursor-pointer" onClick={() => alert('funcionando')}>
              <img src={menuButton} alt="Menu" className="bg-black border-none block " />
            </button>
          </nav>

          <header className="flex items-center justify-between h-[85vh] gap-8">
            <div className="flex flex-col max-w-xl ">
              <h1 className="text-4xl font-extrabold mb-2 sm:text-8xl lg:text-7xl"><span>Desenvolvedor FullStack</span></h1>
              <p className="text-gray-600 dark:text-gray-400 text-lg sm:text-3xl">
                Desenvolvedor de Software e Analista De Sistemas com mais de 3 anos de experiência no mercado
              </p>
              <a href="" className="inline-block mt-4 px-4 py-2 bg-white text-black border border-gray-300 rounded-lg text-center font-medium hover:bg-gray-100 transition-colors self-start">
                Orçamentos
              </a>
            </div>

            <div>
              <img
                className="hidden lg:block rounded-full h-[500px] w-[500px] object-cover animate-shake-image"
                src="https://avatars.githubusercontent.com/u/80359142?v=4"
                alt="Douglas Teixeira"
              />
            </div>
          </header>

          <img src={hand} alt="Mão acenando" className="w-8 animate-shakehand" />
        </main>

        
      </section>
      <section className="py-12 mt-8 bg-black">
        <div className='relative z-10 w-full max-w-[1200px] mx-auto px-5'>
          <h1 className="text-3xl font-bold mb-4 text-center">Sobre Mim</h1>
          <div className="text-gray-700 dark:text-gray-300 leading-relaxed sm:text-center">
            <p>Desenvolvendo sites e sistemas a mais de 3 anos, com foco em aplicações Web com alta escalabilidade. Atualmente atuando no desenvolvimento do <span>RoomsCheck</span>, software com alta aceitação na região litorânea do estado pernmabucano, além de atuar como Analista de TI na maior empresa de entretenimento e hotelaria do Brasil, fornecendo escalabilidade confiabilidade e agilidade na Conectividade do Empreendimento </p>
          </div>
        </div>

        </section>
        <section className='py-12 pt-8 bg-black '>
          <div className='relative z-10 w-full max-w-[1200px] mx-auto px-5'>
            <h1 className='text-3xl font-bold mb-4 text-center'>Projetos</h1>
            <div className='flex'>
              <ProjectCards title='RoomsCheck Managger' description='CRM para gerenciamento de hotéis e automação de vendas' imagesrc={RoomsCheckManagerImg} projectAdress='https://preview--guestroom-guardian.lovable.app' technologys='React,Typescript,tailwind,AI,postgres,Java' />
            </div>
          </div>
          
        </section>
    </section>

  )
}

export default App