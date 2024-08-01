import introducao from './assets/engenheiro-de-software.jpg';
import oportunidades from './assets/soft.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href='#topo'>Engenheiro de Software</a>
      <ol className='nav-list'>
        <li><a href="#introducao">Introdução</a></li>
        <li><a href="#Habilidades">Habilidades</a></li>
        <li><a href="#Oportunidades">Oportunidades de Carreira</a></li>
        <li><a href="#Ferramentas">Ferramentas</a></li>
      </ol>
      </header>
      <section class="introducao" id='#introducao'>
        <article class="text-introduction">
          <h1>Introdução sobre a Profissão de Engenheiro de Software</h1>
          <p>A profissão de engenheiro de software é essencial no mundo moderno, pois envolve o desenvolvimento, manutenção e aprimoramento de sistemas de software que impulsionam praticamente todos os aspectos da vida cotidiana e dos negócios. Engenheiros de software são responsáveis por criar aplicações, sistemas e plataformas que podem variar desde simples aplicativos móveis até complexos sistemas corporativos e redes de grande escala.
          Esses profissionais trabalham em uma ampla gama de setores, incluindo tecnologia, finanças, saúde, e-commerce e muito mais. A demanda por engenheiros de software tem crescido exponencialmente devido à transformação digital que afeta todos os setores da economia.</p>
        </article>
        <article class='img-introducao'>
        <img src={introducao} width="100%"/>
        </article>
      </section>
      <section className='habilidades' id='habilidades'>
        <h1>Habilidades Necessarias</h1>
        <div className='center'>
        <ol className='nav-list2'>
          <li>
            Desenvolvedor de Software: Cria e mantém aplicativos e sistemas em várias plataformas.
          </li>
          <li>
            Engenheiro de Sistemas: Projetos e integra sistemas complexos.
          </li>
          <li>
            Engenheiro de DevOps: Automatiza processos e integra práticas de CI/CD para melhorar eficiência.
          </li>
          <li>
          Engenheiro de Segurança de Software: Protege sistemas e dados contra ameaças.
          </li>
          <li>
          Engenheiro de Dados: Desenvolve sistemas para análise e processamento de grandes volumes de dados.
          </li>
          <li>
          Consultor de Tecnologia: Oferece conselhos técnicos e soluções personalizadas para empresas.
          </li>
        </ol>
        </div>
      </section>
      <section className='oportunidades' id='oportunidades'>
      <article class='img-oportunidades'>
        <img src={oportunidades} width="100%"/>
        </article>
        <article className='text-oportunidades'>
          <h1>Oportunidades de Carreiras</h1>
          <ol>
            <li>Desenvolvedor de Software</li>
            <li>Engenheiro de Sistemas</li>
            <li>Engenheiro de DevOps</li>
            <li>Engenheiro de Segurança de Software</li>
            <li>Engenheiro de Dados</li>
            <li>Consultor de Tecnologia</li>
          </ol>
        </article>
      </section>
      <section className='ferramentas' id='ferramentas'>
        <article>
          <h1>Ferramentas</h1>
          <div className='center2'>
          <ol className='nav-list3'>
            <li>IDEs: Visual Studio Code, IntelliJ IDEA, Eclipse.</li>
            <li>Controle de Versão: Git (GitHub, GitLab).</li>
            <li>Gerenciamento de Dependências: npm, Maven, Gradle.</li>
            <li>CI/CD: Jenkins, GitHub Actions.</li>
            <li>Contêineres: Docker, Kubernetes.</li>
            <li>Testes: JUnit, pytest, Selenium.
            </li>
            <li>Design: Figma, Sketch.</li>
          </ol>
          </div>
        </article>
      </section>
    </div>
  );
}

export default App;
