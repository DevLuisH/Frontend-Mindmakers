import React from 'react';
import './main.css';

const MainContent: React.FC = () => (
  <main className="main-content">
    {/*SECTION 1 TOPO*/}
    <section className="section">
      <h2 className="titulosection1">
        STOP SEARCHING <br /> START GROWING
      </h2>
      <p className="conteudosection1">Transforme suas relações comerciais com a <br /> plataforma CRM mais completa do mercado.<br /> Potencialize a eficiência, otimize o engajamento do<br /> cliente e impulsione o crescimento sustentável do<br /> seu negócio.</p>
      <nav className="Atendente">
        <ul>
          <li><a href="Atendente">Falar com Atendente</a></li>
        </ul>
      </nav>
      <nav className="Trial">
        <ul>
          <li><a href="Trial">Usar Versão Trial</a></li>
        </ul>
      </nav>
      <img src="/src/Img/section.img/productssales.png" alt="Produtos página" className="produtos"/>
    </section>
    {/*SECTION 2 MEIO*/}
    <section className="section">
      <h2 className="titulosection2">A Salesforce possui<br /> produtos e serviços<br /> que ajuda 98% dos<br /> clientes a alcançar<br /> ou superar suas<br /> metas de ROI.</h2>
      <p className="conteudosection2">A magia dos dados ao alcance de todas as<br /> equipes. Com o Data Cloud, nossa<br /> plataforma de dados do Customer 360,<br /> você reúne as equipes de marketing,<br /> vendas, comércio, serviços e TI, todas em<br /> torno do cliente. Conecte todos aos dados<br /> em tempo real e facilite a colaboração entre<br /> equipes, entregando experiências que vão<br /> encantar os clientes.<br /><br />Com nosso CRM, seus representantes<br /> fecham vendas mais rápido, o marketing<br /> bate suas metas, o atendimento ao cliente<br /> gera mais satisfação e a fidelidade é<br /> alavancada. Assim, sua empresa cresce e<br /> se desenvolve em parceria com a<br /> Salesforce.</p>
    </section>
    {/*SECTION 3 MEIO*/}
    <section className="section">
      <h2 className="tiulosection3">Pacotes flexíveis e personalizáveis<br />de acordo com sua necessidade</h2>
      <p className="conteudosection3">Na Salesforce, colocamos nossos clientes no centro de tudo o que fazemos,<br /> antecipando suas necessidades e priorizando suas decisões. Nossa abordagem<br /> flexível adapta-se às demandas em constante evolução do seu empreendimento,<br /> oferecendo ferramentas e soluções recomendadas pelos melhores especialistas do<br /> mercado.<br /><br />Não se preocupe em relação ao futuro. Se decidir integrar novos produtos ou<br /> soluções ao seu pacote, estaremos aqui para atendê-lo e evoluir junto com o<br /> crescimento do seu empreendimento. Afinal, a expansão dos nossos clientes é o<br /> impulso do nosso próprio crescimento. Conecte-se conosco para uma jornada de<br /> inovação e sucesso duradouros. </p>
      <img src="/src/Img/section.img/conteudosection3.png" alt="Pacotes" className="imagemsection3"/>
    </section>
    {/*SECTION 4 MEIO*/}
    <section className="section">
      <h2 className="tiulosection4">Não entende ou não sabe qual atual<br /> necessidade do seu empreendimento ?</h2>
      <p className="conteudosection4">Na Salesforce, entendemos que muitos dos nossos clientes podem não ter total<br /> clareza sobre suas maiores necessidades ou a melhor forma de resolver seus<br /> desafios. É por isso que oferecemos um processo inovador.<br /><br /> Nosso formulário capta insights e compreende as dores específicas do seu<br /> empreendimento ou cliente. Com base nesses dados, desenvolvemos uma<br /> categoria de pacote exclusivamente projetada para atender às demandas únicas do<br /> seu cenário atual.<br /><br /> Solicitamos informações essenciais do seu empreendimento para afinar e<br /> personalizar o pacote. Assim que tivermos uma compreensão completa, nossos<br /> especialistas entrarão em contato para explicar cada ponto definido e apresentar<br /> soluções específicas alinhadas com as suas exigências e necessidades. Na<br /> Salesforce, estamos comprometidos em oferecer soluções sob medida para<br /> impulsionar o seu sucesso.</p>
      <img src="src/Img/section.img/conteudosection4.png" alt="Empreendimento" className="imagemsection4"/>
    </section>
    {/*SECTION 5 MEIO*/}
    <section className="section">
      <h2 className="titulosection">Parcerias Estratégicas</h2>
      <p className="conteudosection">Aproveite o poder das parcerias estratégicas. Saiba como colaborar com outras empresas pode abrir novas oportunidades de crescimento e desenvolvimento.</p>
    </section>
    {/*SECTION 6 BAIXO*/}
    <section className="section">
      <h2 className="titulosection">Sucesso do Cliente</h2>
      <p className="conteudosection">Entenda a importância do sucesso do cliente para o seu negócio. Descubra estratégias para aumentar a satisfação e a fidelidade do cliente, gerando resultados positivos.</p>
    </section>
  </main>
);

export default MainContent;
