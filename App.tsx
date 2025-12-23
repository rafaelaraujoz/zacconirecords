
import React, { useState, useEffect } from 'react';
import { 
  Mic2, TrendingUp, Share2, ChevronRight, Play, Check, Instagram, Youtube, 
  MessageCircle, Mail, MapPin, Clock, Menu as MenuIcon, X, Music4, Video, 
  ShieldCheck, Star, Award, ArrowRight, Music2, Users, ChevronDown, Zap, 
  Disc, Headphones, Target, BarChart3, Radio, Layers, Fingerprint, ChevronLeft,
  Quote, Compass, Eye, Heart, Rocket, Calendar, ExternalLink, Shield
} from 'lucide-react';

// --- Global Assets/Components ---

const LogoLira = ({ className = "w-12 h-12" }: { className?: string }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
      <path d="M50 5C45 5 42 8 42 12V25C35 27 28 32 24 40C20 50 20 62 25 72C28 78 35 82 42 84V90H35V95H65V90H58V84C65 82 72 78 75 72C80 62 80 50 76 40C72 32 65 27 58 25V12C58 8 55 5 50 5ZM50 15C52 15 53 16 53 18V24H47V18C47 16 48 15 50 15ZM42 32V78C35 76 30 70 28 62C26 55 26 48 30 40C33 35 37 32 42 32ZM58 32C63 32 67 35 70 40C74 48 74 55 72 62C70 70 65 76 58 78V32ZM50 35C52 35 53 36 53 38V75C53 77 52 78 50 78C48 78 47 77 47 75V38C47 36 48 35 50 35Z" />
    </svg>
  </div>
);

const Button = ({ children, variant = 'primary', className = '', ...props }: any) => {
  const variants: any = {
    primary: 'bg-[#F2621D] text-white hover:bg-[#ff7b3d] shadow-[0_0_20px_rgba(242,98,29,0.3)] border border-[#F2621D]',
    outline: 'border-2 border-white/10 text-white hover:bg-white/5 hover:border-[#F2621D]/50',
    secondary: 'bg-white text-black hover:bg-gray-100 font-black'
  };
  return (
    <button 
      className={`px-8 py-4 rounded-xl font-black text-[10px] uppercase tracking-[0.25em] transition-all active:scale-95 flex items-center justify-center gap-3 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const SectionHeading = ({ title, subtitle, centered = false }: { title: string, subtitle?: string, centered?: boolean }) => (
  <div className={`mb-20 ${centered ? 'text-center' : ''}`}>
    <div className={`flex items-center gap-4 mb-6 ${centered ? 'justify-center' : ''}`}>
      <div className="h-[1px] w-12 bg-[#F2621D]/50"></div>
      <h3 className="text-[#F2621D] font-black uppercase tracking-[0.6em] text-[9px] drop-shadow-[0_0_8px_rgba(242,98,29,0.5)]">{subtitle}</h3>
    </div>
    <h2 className="text-4xl md:text-8xl font-black text-white leading-[0.95] tracking-tighter uppercase mb-8">
      {title.split(' ').map((word, i) => (
        <span key={i} className={i % 2 !== 0 ? 'text-transparent stroke-text' : ''}>{word} </span>
      ))}
    </h2>
  </div>
);

// --- Page: O Estúdio ---

const EstudioPage = () => {
  const timeline = [
    { year: "2020", title: "Agosto - O Sonho Ganha Forma", desc: "Nasce a ideia da Zacconi Records. A missão é clara: oferecer estrutura profissional e acolhedora para artistas independentes desenvolverem seus projetos com liberdade criativa." },
    { year: "2021", title: "Fevereiro - Primeiro Espaço", desc: "Mesmo em meio a desafios globais, o estúdio abre as portas em uma versão inicial. Maio marca a expansão para mixagem, masterização remota e assessoria artística." },
    { year: "2022", title: "Janeiro - Nasce o Selo Zacconi", desc: "Lançamento oficial do selo musical da casa, com distribuição digital, suporte artístico e campanhas de lançamento. Primeiros artistas ganham visibilidade." },
    { year: "2023", title: "Janeiro - Primeiros Festivais", desc: "O estúdio se transforma em espaço de fomento cultural, com a criação de festivais autorais para promover a cena independente." },
    { year: "2024", title: "Junho - Alcance Nacional", desc: "Nova estrutura física e investimento em equipamentos de ponta. Produções passam a ser reconhecidas em editais e mídias especializadas." },
    { year: "2025", title: "Maio - Inovação Digital", desc: "Lançamento oficial do novo site, crescimento da loja de infoprodutos e novas iniciativas de apoio financeiro a artistas independentes." }
  ];

  return (
    <div className="animate-in fade-in duration-1000 overflow-hidden">
      {/* Hero Estudio */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=90&w=1600" 
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 scale-105" 
          alt="Zacconi Studio"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-[#1E1F1F] z-10"></div>
        <div className="relative z-20 text-center px-6 max-w-6xl">
          <SectionHeading centered subtitle="Elite Industrial" title="Onde Sonhos Viram Som" />
          <p className="text-white/60 text-xl md:text-3xl font-medium italic leading-relaxed max-w-4xl mx-auto">
            "Na Zacconi Records, fazemos mais do que produzir música e cultura: criamos experiências que emocionam e conectam histórias."
          </p>
          <div className="mt-16 flex flex-wrap justify-center gap-12">
            <div className="flex flex-col items-center">
              <span className="text-6xl font-black text-white leading-none">220<span className="text-[#F2621D]">+</span></span>
              <span className="text-[#F2621D]/50 text-[10px] font-black uppercase tracking-[0.5em] mt-4">Projetos Atendidos</span>
            </div>
            <div className="w-[1px] bg-white/10 hidden md:block"></div>
            <div className="flex flex-col items-center">
              <span className="text-6xl font-black text-white leading-none">5.0</span>
              <div className="flex gap-1 text-[#F2621D] mt-4">
                {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" />)}
              </div>
              <span className="text-[#F2621D]/50 text-[10px] font-black uppercase tracking-[0.5em] mt-2">Satisfação Total</span>
            </div>
          </div>
        </div>
      </section>

      {/* Intro & Lideranças - THE CORE SECTION */}
      <section className="py-40 bg-[#1E1F1F] px-6 relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="Estratégia & Arte" title="Liderança Zacconi" />
          
          <div className="grid gap-40">
            {/* Rodrigo Zacconi */}
            <div className="flex flex-col lg:flex-row gap-24 items-center group">
              <div className="w-full lg:w-[45%] shrink-0 relative">
                <div className="absolute -inset-6 border border-[#F2621D]/20 rounded-[80px] translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-700"></div>
                <div className="relative rounded-[60px] overflow-hidden border border-white/10 shadow-2xl bg-black aspect-[4/5]">
                  <img 
                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=90&w=1200" 
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2s]" 
                    alt="Rodrigo Zacconi" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-10 -right-10 bg-[#F2621D] p-10 rounded-[40px] shadow-2xl z-30 hidden md:block border-8 border-[#1E1F1F]">
                  <Award size={48} className="text-white mb-4" />
                  <p className="text-white font-black text-xs uppercase tracking-widest leading-none">Especialista</p>
                  <p className="text-white/80 text-[10px] font-bold uppercase tracking-widest mt-1">Los Angeles / USA</p>
                </div>
              </div>
              <div className="flex-1 space-y-10">
                <div className="inline-block px-4 py-2 bg-white/5 rounded-full border border-white/10 text-[#F2621D] text-[10px] font-black uppercase tracking-[0.3em]">CEO & Founder</div>
                <h3 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">Rodrigo <br/><span className="text-transparent stroke-text">Zacconi</span></h3>
                <p className="text-gray-400 text-xl leading-relaxed font-medium">
                  Carioca e multi-instrumentista, Rodrigo Bolognini Zacconi é o dirigente por trás da excelência da produtora. Com formação sólida em Administração e Música, pós-graduado pela UERJ, ele une a precisão da gestão à alma artística.
                </p>
                <div className="space-y-6 text-gray-500">
                  <p className="leading-relaxed">Sua experiência internacional em Los Angeles, com quatro períodos de atuação em estúdios americanos, trouxe o padrão High-End de mixagem e masterização para a Baixada Fluminense. Trabalhou com workshops de nomes como Toby Wright (Alice in Chains, Kiss) e foi Controller de grandes equipamentos culturais do RJ.</p>
                </div>
                <div className="flex gap-4">
                   <Button variant="outline" className="!px-10"><Instagram size={18} className="mr-2" /> Instagram</Button>
                </div>
              </div>
            </div>

            {/* Rafael Araujo */}
            <div className="flex flex-col lg:flex-row-reverse gap-24 items-center group">
              <div className="w-full lg:w-[45%] shrink-0 relative">
                <div className="absolute -inset-6 border border-[#F2621D]/20 rounded-[80px] -translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-700"></div>
                <div className="relative rounded-[60px] overflow-hidden border border-white/10 shadow-2xl bg-black aspect-[4/5]">
                  <img 
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=90&w=1200" 
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2s]" 
                    alt="Rafael Araujo" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                </div>
                <div className="absolute -bottom-10 -left-10 bg-[#2A2B2B] p-10 rounded-[40px] shadow-2xl z-30 hidden md:block border-8 border-[#1E1F1F]">
                  <Target size={48} className="text-[#F2621D] mb-4" />
                  <p className="text-white font-black text-xs uppercase tracking-widest leading-none">Estratégia</p>
                  <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mt-1">Growth & Lançamentos</p>
                </div>
              </div>
              <div className="flex-1 space-y-10 lg:text-right">
                <div className="inline-block px-4 py-2 bg-white/5 rounded-full border border-white/10 text-[#F2621D] text-[10px] font-black uppercase tracking-[0.3em]">CMO / Marketing</div>
                <h3 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">Rafael <br/><span className="text-transparent stroke-text">Araujo</span></h3>
                <p className="text-gray-400 text-xl leading-relaxed font-medium">
                  Carioca da gema, Rafael transita entre o palco e o planejamento estratégico com naturalidade. Formado em Música pelo Conservatório Brasileiro e em Marketing pela FACHA.
                </p>
                <div className="space-y-6 text-gray-500">
                  <p className="leading-relaxed">Como cantor e professor de canto, entende a realidade do artista de forma íntima. Na Zacconi Records, ele lidera o crescimento dos talentos da casa, conectando posicionamento, narrativa e performance digital para garantir lançamentos que realmente batem números.</p>
                </div>
                <div className="flex gap-4 justify-end lg:justify-start">
                   <Button variant="outline" className="!px-10 lg:ml-auto"><Instagram size={18} className="mr-2" /> Instagram</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DNA - Bento Style */}
      <section className="py-40 bg-[#252626] px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="Propósito" title="Nosso DNA" />
          <div className="grid md:grid-cols-12 gap-8 auto-rows-[300px]">
            <div className="md:col-span-8 bg-[#1E1F1F] rounded-[60px] p-16 border border-white/5 relative group overflow-hidden">
               <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 text-[#F2621D]"><Compass size={160} /></div>
               <h4 className="text-4xl font-black text-white uppercase mb-8 flex items-center gap-4">
                 <div className="w-12 h-12 bg-[#F2621D]/10 rounded-2xl flex items-center justify-center text-[#F2621D]"><Compass size={24} /></div>
                 Missão
               </h4>
               <p className="text-gray-400 text-xl leading-relaxed max-w-xl">
                 Produzir e promover cultura através de gestão cultural, serviços musicais e audiovisuais com excelência, conectando talentos e histórias por meio de projetos que transformam ideias em obras concretas.
               </p>
            </div>
            <div className="md:col-span-4 bg-[#F2621D] rounded-[60px] p-12 relative overflow-hidden group">
               <div className="absolute bottom-0 right-0 p-8 opacity-20"><Eye size={120} /></div>
               <h4 className="text-2xl font-black text-white uppercase mb-6 flex items-center gap-4">Visão</h4>
               <p className="text-white/90 text-lg leading-relaxed font-bold">
                 Ser referência mundial em gestão cultural e produção, reconhecida pela inovação técnica e artística no mercado brasileiro.
               </p>
            </div>
            <div className="md:col-span-12 bg-[#2A2B2B] rounded-[60px] p-16 border border-white/5 grid md:grid-cols-3 gap-12">
               <div>
                  <h5 className="text-[#F2621D] font-black text-xs uppercase tracking-[0.4em] mb-8">Nossos Valores</h5>
                  <ul className="space-y-4">
                     {['Qualidade High-End', 'Inovação Constante', 'Ética Radical'].map(v => (
                       <li key={v} className="flex items-center gap-4 text-white font-black uppercase text-sm tracking-widest"><Check size={18} className="text-[#F2621D]" /> {v}</li>
                     ))}
                  </ul>
               </div>
               <div className="md:col-span-2 text-gray-500 text-lg leading-relaxed italic">
                 "Trabalhamos com amor pelo que fazemos e buscamos sempre provocar aquele brilho no olhar de quem é surpreendido positivamente com o resultado do nosso trabalho."
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Excelência Reconhecida - 2026 UI */}
      <section className="py-40 bg-[#1E1F1F] px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#F2621D]/5 rounded-full blur-[120px]"></div>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
             <SectionHeading subtitle="Google Legacy" title="Excelência que ecoa." />
             <div className="bg-[#2A2B2B] p-10 rounded-[40px] border border-white/5 shadow-2xl flex items-center gap-8 mb-20 animate-pulse">
                <div className="flex flex-col">
                   <span className="text-5xl font-black text-white">5.0</span>
                   <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest mt-2">Rating Real</span>
                </div>
                <div className="flex gap-1 text-[#F2621D]">
                   {[1,2,3,4,5].map(s => <Star key={s} size={24} fill="currentColor" />)}
                </div>
             </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "A estrutura do estúdio é de outro planeta. O som sai limpo, pesado e com uma definição que eu só vi em estúdios gringos.", author: "Marcus V.", type: "Músico Profissional" },
              { text: "A competência dos profissionais da Zacconi é o diferencial. Eles não só gravam, eles entram no seu projeto de corpo e alma.", author: "Julia S.", type: "Cantora Gospel" },
              { text: "Resultado final impecável. O atendimento do Rodrigo e do Rafael te deixa super seguro sobre cada etapa do lançamento.", author: "Felipe G.", type: "Produtor" }
            ].map((review, i) => (
              <div key={i} className="bg-[#2A2B2B] p-12 rounded-[50px] border border-white/5 hover:border-[#F2621D]/40 transition-all group shadow-xl">
                 <Quote className="text-[#F2621D] mb-8 group-hover:scale-110 transition-transform" size={40} />
                 <p className="text-white/80 text-xl font-medium leading-relaxed italic mb-12">"{review.text}"</p>
                 <div className="flex items-center gap-4 pt-8 border-t border-white/5">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-[#F2621D] font-black">{review.author[0]}</div>
                    <div>
                       <h5 className="text-white font-black text-xs uppercase tracking-widest">{review.author}</h5>
                       <p className="text-gray-500 text-[9px] font-bold uppercase tracking-widest mt-1">{review.type}</p>
                    </div>
                 </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
             <a href="https://www.google.com.br/search?q=Zacconi+Records" target="_blank" className="text-[#F2621D] font-black uppercase text-[10px] tracking-[0.4em] flex items-center justify-center gap-4 hover:gap-6 transition-all">
               Ver todos os 200+ comentários no Google <ExternalLink size={14} />
             </a>
          </div>
        </div>
      </section>

      {/* Timeline - RE-DESIGNED 2026 */}
      <section className="py-40 bg-[#1E1F1F] px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeading subtitle="Legado" title="Nossa Evolução" />
          <div className="relative space-y-24">
            {/* Connecting Line */}
            <div className="absolute left-[34px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#F2621D] via-white/10 to-white/5"></div>
            
            {timeline.map((item, i) => (
              <div key={i} className="relative flex gap-12 group">
                 <div className="relative z-10">
                   <div className="w-16 h-16 bg-[#2A2B2B] rounded-2xl border border-white/10 flex items-center justify-center text-white font-black text-xl group-hover:bg-[#F2621D] group-hover:scale-110 transition-all duration-500 shadow-2xl">
                     {item.year.slice(2)}
                   </div>
                 </div>
                 <div className="pt-2 pb-8 border-b border-white/5 group-last:border-0 w-full">
                    <h4 className="text-white font-black text-2xl uppercase tracking-tighter mb-4 group-hover:text-[#F2621D] transition-colors">{item.title}</h4>
                    <p className="text-gray-500 text-lg leading-relaxed font-medium">{item.desc}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-6">
        <div className="max-w-6xl mx-auto relative group">
           <div className="absolute inset-0 bg-gradient-to-br from-[#F2621D] to-[#8C031C] rounded-[80px] blur-[100px] opacity-20 group-hover:opacity-40 transition-all"></div>
           <div className="relative bg-[#2A2B2B] rounded-[80px] p-24 md:p-40 text-center border border-white/5 overflow-hidden">
              <div className="absolute -top-20 -right-20 p-40 opacity-5 rotate-12"><Disc size={400} className="animate-spin-slow" /></div>
              <h2 className="text-5xl md:text-8xl font-black text-white mb-10 leading-none uppercase tracking-tighter">Sua Obra de Arte <br/> <span className="text-[#F2621D]">Começa Agora.</span></h2>
              <p className="text-gray-400 text-xl mb-16 max-w-2xl mx-auto font-medium leading-relaxed italic">
                Não importa o tamanho da sua ideia, estamos aqui para torná-la um sucesso com amor, excelência e criatividade.
              </p>
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                 <Button variant="primary" onClick={() => window.open('https://wa.me/5521982653370', '_blank')} className="!py-8 !px-20 !text-sm">Iniciar meu Projeto</Button>
                 <Button variant="outline" className="!py-8 !px-20 !text-sm" onClick={() => window.location.reload()}>Falar com a Equipe</Button>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

// --- Home Components ---

const HeroSlider = ({ setPage }: any) => {
  const [current, setCurrent] = useState(0);
  const slides = [
    {
      title: "Produção Musical",
      subtitle: "Qualidade Master Global",
      desc: "Do arranjo à masterização cristalina. Equipamento topo de linha e expertise internacional em cada track.",
      img: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=90&w=1600",
      icon: <Mic2 size={48} />
    },
    {
      title: "Marketing Artístico",
      subtitle: "Performance e Resultados",
      desc: "Tráfego pago inteligente e estratégia de carreira para você bater milhões de plays nas plataformas.",
      img: "https://images.unsplash.com/photo-1514525253344-f814d0743b1a?auto=format&fit=crop&q=90&w=1600",
      icon: <TrendingUp size={48} />
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrent(c => (c + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      {slides.map((slide, i) => (
        <div key={i} className={`absolute inset-0 transition-all duration-[1.5s] ease-in-out ${i === current ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-10"></div>
          <img src={slide.img} className="w-full h-full object-cover grayscale-[0.3] opacity-50" alt={slide.title} />
          <div className="absolute inset-0 flex items-center z-20 px-6 md:px-24">
            <div className="max-w-4xl">
              <div className="text-[#F2621D] mb-8 animate-in slide-in-from-left-8 duration-700">{slide.icon}</div>
              <h4 className="text-[#F2621D] font-black uppercase tracking-[0.5em] text-xs mb-4 animate-in slide-in-from-left-8 delay-100 duration-700">{slide.subtitle}</h4>
              <h2 className="text-6xl md:text-[100px] font-black text-white leading-[0.85] tracking-tighter uppercase mb-10 animate-in slide-in-from-left-8 delay-200 duration-700">
                {slide.title.split(' ').map((w, idx) => (
                  <span key={idx} className={idx % 2 !== 0 ? 'text-transparent stroke-text' : ''}>{w} </span>
                ))}
              </h2>
              <p className="text-gray-300 text-lg md:text-xl max-w-xl leading-relaxed mb-12 animate-in slide-in-from-left-8 delay-300 duration-700">{slide.desc}</p>
              <div className="flex gap-6 animate-in slide-in-from-left-8 delay-400 duration-700">
                <Button onClick={() => window.open('https://wa.me/5521982653370', '_blank')} className="!py-6 !px-12">Chamar no Whats</Button>
                <Button variant="outline" onClick={() => setPage('servicos')} className="!py-6 !px-12">Ver Serviços</Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const HomePage = ({ setPage }: any) => {
  const artists = [
    { name: "Anderson Resende", type: "Pop/MPB", image: "https://zacconirecords.com.br/wp-content/uploads/2025/04/Anderson-Resende-foto-1.webp" },
    { name: "André Migliori", type: "Rock/Blues", image: "https://zacconirecords.com.br/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-15.23.43.jpeg" },
    { name: "Aquele Biel", type: "Trap/Urban", image: "https://zacconirecords.com.br/wp-content/uploads/2025/05/SAVE_20250428_1253408359574199816586869.jpg" },
    { name: "Blues Deluxe", type: "Blues", image: "https://zacconirecords.com.br/wp-content/uploads/2025/01/bluesdeluxe_perfil.png" },
    { name: "Caju MC", type: "Rap", image: "https://zacconirecords.com.br/wp-content/uploads/2025/01/cajuMC_perfil.png" },
    { name: "Versonica", type: "Pop", image: "https://zacconirecords.com.br/wp-content/uploads/2025/05/IMG-20250428-WA00266074957105282833963.jpg" },
  ];

  return (
    <div className="animate-in fade-in duration-1000">
      <HeroSlider setPage={setPage} />
      <section className="py-40 bg-[#1E1F1F] px-6 text-center">
         <SectionHeading centered subtitle="Intro" title="O Maior Hub Cultural da Baixada" />
         <div className="max-w-4xl mx-auto space-y-12">
            <p className="text-gray-400 text-2xl font-medium leading-relaxed italic">
              "Na Zacconi Records, unimos a alma do artista com a precisão da tecnologia. Transformamos potencial em resultados reais no mercado."
            </p>
            <Button onClick={() => setPage('estudio')} className="!px-16">Explorar o Estúdio</Button>
         </div>
      </section>
      
      {/* Mini Roster */}
      <section className="py-20 bg-[#252626] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {artists.map((artist, i) => (
              <div key={i} className="group relative aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer border border-white/5 shadow-2xl transition-all duration-700 hover:-translate-y-2">
                <img src={artist.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt={artist.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 w-full p-4 text-center transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h4 className="text-white font-black text-[8px] uppercase tracking-widest">{artist.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// --- App Navigation ---

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (id: string) => {
    setCurrentPage(id);
    setMobileMenu(false);
    setActiveMenu(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { 
      id: 'quem-somos', 
      label: 'Quem Somos', 
      sub: [
        { id: 'estudio', label: 'O Estúdio' },
        { id: 'time', label: 'Nosso Time' },
        { id: 'avaliacoes', label: 'Somos 5 Estrelas' }
      ] 
    },
    { 
      id: 'servicos', 
      label: 'Serviços', 
      sub: [
        { id: 'musica', label: 'Produção Musical', icon: <Mic2 size={12} /> },
        { id: 'marketing', label: 'Marketing Musical', icon: <TrendingUp size={12} /> },
        { id: 'voz', label: 'Voz & Performance', icon: <Users size={12} /> },
        { id: 'video', label: 'Audiovisual', icon: <Video size={12} /> }
      ] 
    },
    { id: 'artistas', label: 'Artistas' },
    { id: 'contato', label: 'Contato' }
  ];

  return (
    <div className="min-h-screen bg-[#1E1F1F] text-white selection:bg-[#F2621D] font-sans antialiased">
      <header className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-700 px-6 md:px-12 ${
        scrolled ? 'bg-[#1E1F1F]/95 backdrop-blur-2xl py-4 border-b border-white/5 shadow-2xl' : 'bg-transparent py-10'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div onClick={() => handleNav('home')} className="flex items-center gap-4 group cursor-pointer">
             <LogoLira className="w-14 h-14 md:w-16 md:h-16 group-hover:rotate-12 duration-500" />
             <div className="flex flex-col">
                <span className="text-white font-black tracking-[0.4em] uppercase text-xl leading-none">Zacconi</span>
                <span className="text-[#F2621D] text-[10px] font-bold tracking-[0.2em] uppercase">Records</span>
             </div>
          </div>
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <div key={item.id} className="relative group" onMouseEnter={() => item.sub && setActiveMenu(item.id)} onMouseLeave={() => setActiveMenu(null)}>
                <button onClick={() => !item.sub && handleNav(item.id)} className={`text-[9px] font-black uppercase tracking-[0.3em] transition-all hover:text-[#F2621D] py-6 ${currentPage === item.id || (item.sub?.some(s => s.id === currentPage)) ? 'text-[#F2621D]' : 'text-gray-300/60'}`}>
                  {item.label}
                </button>
                {item.sub && (
                  <div className={`absolute top-full left-1/2 -translate-x-1/2 w-64 bg-[#2A2B2B]/95 backdrop-blur-3xl border border-white/5 rounded-[30px] mt-1 shadow-2xl transition-all duration-500 origin-top ${activeMenu === item.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                    <div className="p-4">
                      {item.sub.map(s => (
                        <button key={s.id} onClick={() => handleNav(s.id)} className="w-full text-left px-6 py-4 flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-[#F2621D] border-b border-white/5 last:border-0">
                          {s.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-8">
             <Instagram size={20} className="text-gray-500 hover:text-[#F2621D] cursor-pointer" />
             <Button onClick={() => handleNav('contato')} className="!py-3 !px-8">Orçamento</Button>
          </div>
          <button className="lg:hidden text-[#F2621D]" onClick={() => setMobileMenu(true)}><MenuIcon size={32} /></button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[2000] bg-[#1E1F1F] flex flex-col p-10 transition-transform duration-700 lg:hidden ${mobileMenu ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center mb-16">
          <LogoLira className="w-12 h-12" />
          <button onClick={() => setMobileMenu(false)} className="text-[#F2621D] p-3 bg-white/5 rounded-2xl"><X size={28} /></button>
        </div>
        <div className="flex flex-col gap-10">
          {navItems.map((item) => (
            <div key={item.id}>
              <button
                onClick={() => !item.sub && handleNav(item.id)}
                className="text-4xl font-black uppercase tracking-tighter flex items-center justify-between w-full text-white/90"
              >
                {item.label} {item.sub && <ChevronRight className="text-[#F2621D]" size={28} />}
              </button>
              {item.sub && (
                <div className="mt-6 ml-4 flex flex-col gap-6 border-l border-white/10 pl-8">
                  {item.sub.map(s => (
                    <button key={s.id} onClick={() => handleNav(s.id)} className="text-gray-500 uppercase text-sm font-black tracking-[0.2em] hover:text-[#F2621D] text-left">{s.label}</button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <main>
        {currentPage === 'home' && <HomePage setPage={handleNav} />}
        {currentPage === 'estudio' && <EstudioPage />}
        {currentPage !== 'home' && currentPage !== 'estudio' && (
          <div className="pt-60 pb-40 text-center min-h-screen">
             <SectionHeading centered subtitle="Records" title={navItems.find(i => i.id === currentPage)?.label || "Explorar"} />
             <p className="text-gray-500 text-lg italic mb-12">"Aguarde, estamos processando a melhor experiência digital para você."</p>
             <Button variant="outline" className="mx-auto" onClick={() => handleNav('home')}>Voltar para Home</Button>
          </div>
        )}
      </main>

      <footer className="bg-black pt-40 pb-16 px-6 border-t border-white/5 text-center md:text-left">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-20 mb-20">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-10 justify-center md:justify-start">
               <LogoLira className="w-16 h-16" />
               <div className="flex flex-col items-start">
                  <span className="text-white font-black tracking-[0.4em] uppercase text-2xl leading-none">Zacconi</span>
                  <span className="text-[#F2621D] text-xs font-bold tracking-[0.2em] uppercase">Records</span>
               </div>
            </div>
            <p className="text-gray-500 text-xl italic font-medium max-w-md mx-auto md:mx-0">"Onde o talento brasileiro encontra a engenharia de som mundial."</p>
          </div>
          <div>
             <h4 className="text-white font-black mb-10 text-[10px] uppercase tracking-[0.4em]">Local</h4>
             <ul className="space-y-6 text-gray-500 text-sm font-medium">
               <li className="flex gap-4 items-start justify-center md:justify-start"><MapPin size={20} className="text-[#F2621D] shrink-0" /> <span>São João de Meriti - RJ</span></li>
               <li className="flex gap-4 items-center justify-center md:justify-start"><MessageCircle size={20} className="text-[#F2621D] shrink-0" /> <span>+55 21 98265.3370</span></li>
             </ul>
          </div>
          <div>
             <h4 className="text-white font-black mb-10 text-[10px] uppercase tracking-[0.4em]">Plataforma</h4>
             <ul className="space-y-4 text-gray-500 text-[10px] font-black uppercase tracking-widest">
               <li className="hover:text-white cursor-pointer" onClick={() => handleNav('estudio')}>Experience</li>
               <li className="hover:text-white cursor-pointer" onClick={() => handleNav('artistas')}>Roster</li>
               <li className="hover:text-white cursor-pointer" onClick={() => handleNav('contato')}>Booking</li>
             </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 text-[9px] text-gray-800 font-black uppercase tracking-widest flex justify-between">
           <p>Zacconi Records © 2025.</p>
           <div className="flex gap-8">
              <span>Privacy</span>
              <span>Terms</span>
           </div>
        </div>
      </footer>

      <div className="fixed bottom-10 right-10 z-[3000]">
        <button onClick={() => window.open('https://wa.me/5521982653370', '_blank')} className="bg-[#25D366] text-white p-6 rounded-[30px] shadow-2xl hover:scale-110 active:scale-95 transition-all">
          <MessageCircle size={32} />
        </button>
      </div>

      <style>{`
        .stroke-text { -webkit-text-stroke: 1px rgba(255,255,255,0.15); }
        .animate-spin-slow { animation: spin 30s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
};

export default App;
