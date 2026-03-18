/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Key, 
  Info, 
  FileText, 
  MapPin, 
  PhoneCall, 
  MessageSquare, 
  Coffee, 
  Tv, 
  Wifi, 
  ShieldAlert, 
  Star,
  ExternalLink,
  Map as MapIcon,
  ShoppingBag,
  Utensils,
  PlusCircle,
  Refrigerator,
  WashingMachine,
  Layout,
  Stethoscope,
  Building2,
  Scale,
  Shield
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type Tab = 'inicio' | 'checkin' | 'casa' | 'regras' | 'guia' | 'emergencia' | 'feedback';

const ADDRESS = "Rua 1, Quadra 9, Lote 22, Casa 2, Jardim Santo Antônio, CEP 74.853-130, Goiânia-GO";
const WHATSAPP_NUMBER = "5562985451980"; // Added country code 55

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('inicio');
  const [guiaFilter, setGuiaFilter] = useState<string>('Todos');

  // Scroll to top when tab changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case 'inicio':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="py-6 md:py-10 flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-3xl shadow-xl flex items-center justify-center overflow-hidden border border-stone-100">
                <img 
                  src="https://storage.googleapis.com/static.antigravity.dev/user-uploads/67d9884860434430156/67d9884860434430156_2.png" 
                  alt="Logo Aluga Goiás" 
                  className="w-20 h-20 md:w-28 md:h-28 object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-3xl md:text-5xl font-bold text-stone-800">Seja Bem-vindo!</h1>
                <p className="text-stone-500 text-sm md:text-lg mt-2">Minha casa em Goiânia - Guia Digital</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <section className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 flex flex-col">
                <h2 className="text-xl font-semibold text-stone-800 flex items-center gap-2 mb-4">
                  <MapPin className="text-brand" size={20} />
                  Localização
                </h2>
                <p className="text-stone-600 leading-relaxed flex-1">
                  {ADDRESS}
                </p>
                <a 
                  href="https://maps.app.goo.gl/mG3GttPnMXGVxE329"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-brand font-medium hover:text-brand-dark transition-colors"
                >
                  Abrir no Google Maps <ExternalLink size={16} />
                </a>
              </section>

              <section className="bg-brand-light p-6 rounded-2xl border border-brand-light flex flex-col justify-center">
                <h2 className="text-xl font-semibold text-brand-dark mb-2">Olá, sou seu anfitrião!</h2>
                <p className="text-brand-dark/80 leading-relaxed">
                  É um prazer receber você. Preparamos este guia para que sua estadia seja a melhor possível. 
                  Sinta-se em casa e qualquer dúvida, estou à disposição via WhatsApp.
                </p>
              </section>
            </div>
          </motion.div>
        );

      case 'checkin':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h1 className="text-2xl font-bold text-stone-800">Instruções de Acesso</h1>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-brand-light p-3 rounded-xl">
                  <Key className="text-brand" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-800">Como entrar</h3>
                  <p className="text-stone-600 text-sm mt-1">
                    O acesso é feito via <strong>Box no portão social</strong>. <br />
                    Senha: <strong>1903</strong> <br />
                    <span className="text-xs mt-2 block">Dentro do box estão as chaves do portão social, da porta da garagem e o controle remoto do portão eletrônico.</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Wifi className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-800">Wi-Fi</h3>
                  <p className="text-stone-600 text-sm mt-1">
                    Redes: <strong>Fonseca (2G e 5G)</strong><br />
                    Senha: <strong>15121998</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200">
              <h3 className="font-semibold text-stone-800 mb-2">Horários</h3>
              <ul className="space-y-2 text-stone-600 text-sm">
                <li className="flex justify-between">
                  <span>Check-in:</span>
                  <span className="font-medium">A partir das 14:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Check-out:</span>
                  <span className="font-medium">Até as 11:00</span>
                </li>
              </ul>
            </div>
          </motion.div>
        );

      case 'casa':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h1 className="text-2xl font-bold text-stone-800">A Casa</h1>
            
            <div className="bg-brand-light p-6 rounded-2xl border border-brand-light shadow-sm">
              <p className="text-brand-dark text-sm leading-relaxed">
                Este imóvel é de uso pessoal e foi preparado com muito carinho para receber você. 
                Por isso, pedimos que cuide da casa, móveis e utensílios como se fossem seus. 
                Cada detalhe foi pensado para garantir conforto e praticidade — contamos com sua 
                colaboração para manter tudo bem conservado para nós também. Muito obrigado pela compreensão!
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* SALA */}
              <section className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                <h2 className="text-lg font-semibold text-stone-800 flex items-center gap-2 mb-4">
                  <Tv className="text-blue-600" size={20} />
                  Sala de Estar
                </h2>
                <ul className="text-stone-600 text-sm space-y-2">
                  <li>• 1 Sofá de três lugares</li>
                  <li>• 1 Smart TV 43" ROKU</li>
                  <li>• 1 Kit Sound Bar TOMATE</li>
                  <li>• 1 Bike para exercícios</li>
                  <li>• 1 Estação de trabalho com Cadeira</li>
                  <li className="pt-2 text-stone-500 italic">
                    Os controles da TV, Sound Bar e ventilador estão na mesa de centro.
                  </li>
                  <li className="text-stone-500 italic">
                    O ventilador da sala liga com controle remoto.
                  </li>
                </ul>
              </section>

              {/* HALL */}
              <section className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                <h2 className="text-lg font-semibold text-stone-800 flex items-center gap-2 mb-4">
                  <Layout className="text-stone-600" size={20} />
                  Hall
                </h2>
                <ul className="text-stone-600 text-sm space-y-2">
                  <li>• 1 Frigobar</li>
                  <li>• 1 Estação de trabalho com cadeira</li>
                </ul>
              </section>

              {/* COZINHA */}
              <section className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 md:col-span-2">
                <h2 className="text-lg font-semibold text-stone-800 flex items-center gap-2 mb-4">
                  <Coffee className="text-orange-600" size={20} />
                  Cozinha
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-stone-600 text-sm">
                  <ul className="space-y-2">
                    <li>• Fogão cooktop 5 bocas</li>
                    <li>• Filtro água natural e gelada</li>
                    <li>• Chaleira Elétrica</li>
                    <li>• Cafeteira 3 Corações</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>• Liquidificador</li>
                    <li>• Air Fryer</li>
                    <li>• Geladeira Duplex</li>
                    <li>• Forno Elétrico</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>• Microondas</li>
                    <li>• Talheres, Pratos e Panelas</li>
                    <li>• Condimentos e temperos</li>
                  </ul>
                </div>
                <div className="mt-4 p-4 bg-orange-50 rounded-xl text-xs text-orange-800">
                  <p className="font-semibold mb-1">Dica Cafeteira:</p>
                  <p>1. Verifique a água no reservatório. 2. Ligue na tomada (220v). 3. Insira a cápsula e feche a alavanca. 4. Escolha o botão pela cor da cápsula.</p>
                </div>
              </section>

              {/* ÁREA DE SERVIÇO */}
              <section className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                <h2 className="text-lg font-semibold text-stone-800 flex items-center gap-2 mb-4">
                  <WashingMachine className="text-brand" size={20} />
                  Área de Serviço
                </h2>
                <ul className="text-stone-600 text-sm space-y-2">
                  <li>• 1 Máquina de lavar roupas LAVA E SECA</li>
                  <li>• 1 Máquina de lavar LOUÇAS</li>
                  <li>• 1 Tanque de duas bacias</li>
                  <li className="pt-2 text-red-500 italic font-medium">
                    Atenção: Há uma máquina de lavar roupas estragada neste ambiente.
                  </li>
                </ul>
              </section>

              {/* QUARTO 1 */}
              <section className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                <h2 className="text-lg font-semibold text-stone-800 flex items-center gap-2 mb-4">
                  <Info className="text-brand" size={20} />
                  Quarto 1
                </h2>
                <div className="text-stone-600 text-sm space-y-2">
                  <p>• 1 Cama solteirão e um colchão</p>
                  <p>• 1 Estação de trabalho com uma cadeira (estragada)</p>
                  <p className="pt-2 text-stone-500 italic">
                    Controles do ar, iluminação e ventilador (mesmo controle) ao lado da porta ao entrar.
                  </p>
                </div>
              </section>

              {/* QUARTO 2 */}
              <section className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                <h2 className="text-lg font-semibold text-stone-800 flex items-center gap-2 mb-4">
                  <Info className="text-brand" size={20} />
                  Quarto 2 (Suíte)
                </h2>
                <div className="text-stone-600 text-sm space-y-2">
                  <p>• 1 Cama Queen</p>
                  <p>• 1 TV 32" LCD + Fire Stick</p>
                  <p className="pt-2 text-stone-500 italic">
                    Controle da iluminação e ventilador ao lado da porta.
                  </p>
                  <p className="text-stone-500 italic">
                    Controles da TV, Fire Stick e Ar Condicionado no criado mudo próximo ao ar.
                  </p>
                </div>
              </section>

              {/* QUARTO 3 */}
              <section className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                <h2 className="text-lg font-semibold text-stone-800 flex items-center gap-2 mb-4">
                  <Info className="text-brand" size={20} />
                  Quarto 3
                </h2>
                <div className="text-stone-600 text-sm space-y-2">
                  <p>• 2 Camas de solteiro</p>
                  <p className="pt-2 text-stone-500 italic">
                    Controle da iluminação e ventilador ao lado da porta.
                  </p>
                  <p className="text-stone-500 italic">
                    Controle do ar condicionado no criado mudo entre as camas.
                  </p>
                </div>
              </section>

              {/* VARANDA */}
              <section className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                <h2 className="text-lg font-semibold text-stone-800 flex items-center gap-2 mb-4">
                  <Utensils className="text-stone-600" size={20} />
                  Varanda Gourmet
                </h2>
                <ul className="text-stone-600 text-sm space-y-2">
                  <li>• Mesa de madeira maciça com 8 cadeiras</li>
                  <li>• Churrasqueira a carvão</li>
                  <li>• 1 Freezer</li>
                  <li>• Bancada com fogão cooktop 5 bocas e pia</li>
                  <li className="pt-2 text-red-500 italic font-medium">
                    Atenção: Há uma máquina de lavar roupas estragada neste ambiente.
                  </li>
                </ul>
              </section>
            </div>
          </motion.div>
        );

      case 'regras':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h1 className="text-2xl font-bold text-stone-800">Regras da Casa</h1>
            
            <div className="bg-red-50 p-6 rounded-2xl border border-red-100 shadow-sm">
              <h2 className="text-red-800 font-bold flex items-center gap-2 mb-2">
                <ShieldAlert size={20} /> ATENÇÃO!!
              </h2>
              <p className="text-red-700 text-sm leading-relaxed">
                Para tornar a sua estadia o mais agradável possível, atentem-se às regras. 
                O descumprimento pode acarretar em multas ou cancelamento da estadia.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <section className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                <h3 className="font-bold text-stone-800 mb-4 flex items-center gap-2">
                  <Info className="text-brand" size={18} /> Capacidade e Ocupação
                </h3>
                <ul className="text-sm text-stone-600 space-y-3">
                  <li>• Capacidade máxima total: <strong>9 hóspedes</strong>.</li>
                  <li>• Capacidade base incluída: <strong>6 pessoas</strong>.</li>
                  <li>• Hóspedes extras (além de 6): Taxa de <strong>R$ 50,00</strong> por pessoa/dia.</li>
                  <li>• <strong>Não são permitidas visitas</strong> durante a sua estadia.</li>
                  <li>• <strong>Não são permitidos eventos</strong> ou festas.</li>
                </ul>
              </section>

              <section className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                <h3 className="font-bold text-stone-800 mb-4 flex items-center gap-2">
                  <ShieldAlert className="text-orange-600" size={18} /> Limpeza e Conservação
                </h3>
                <ul className="text-sm text-stone-600 space-y-3">
                  <li>• <strong>TOALHAS:</strong> Danificadas, manchadas ou extraviadas serão cobradas no check-out.</li>
                  <li>• <strong>VASILHAS:</strong> Não deixe vasilhas sujas (sujeito a multa de <strong>R$ 100,00</strong>).</li>
                  <li>• <strong>LIXO:</strong> Recolha o lixo. O caminhão passa <strong>2ª, 4ª e 6ª feira</strong> logo cedo. Use a lixeira da calçada.</li>
                  <li>• <strong>ROUPAS:</strong> Troca de enxoval ou limpeza extra: <strong>R$ 230,00</strong> (solicitar com antecedência).</li>
                  <li>• <strong>MÁQUINA:</strong> Evite uso exagerado. Apenas a função <strong>Lava e Seca</strong> está disponível.</li>
                </ul>
              </section>

              <section className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                <h3 className="font-bold text-stone-800 mb-4 flex items-center gap-2">
                  <ShieldAlert className="text-blue-600" size={18} /> Convivência e Uso
                </h3>
                <ul className="text-sm text-stone-600 space-y-3">
                  <li>• <strong>SILÊNCIO:</strong> Não perturbe os vizinhos. Som alto é proibido em qualquer horário.</li>
                  <li>• <strong>FUMO:</strong> Favor fumar apenas na <strong>área externa</strong>. Não jogue bitucas no chão.</li>
                  <li>• <strong>CRIANÇAS:</strong> Devem estar sempre supervisionadas por adultos.</li>
                  <li>• <strong>ENERGIA:</strong> Desligue ventiladores e ar-condicionado ao sair do ambiente.</li>
                  <li>• <strong>ORGANIZAÇÃO:</strong> Entregue móveis e utensílios nos locais adequados.</li>
                </ul>
              </section>

              <section className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                <h3 className="font-bold text-stone-800 mb-4 flex items-center gap-2">
                  <ShieldAlert className="text-stone-600" size={18} /> Segurança e Outros
                </h3>
                <ul className="text-sm text-stone-600 space-y-3">
                  <li>• <strong>CÂMERAS:</strong> Possuímos monitoramento externo (Poste, Garagem e Sacada do Q1).</li>
                  <li>• <strong>CHURRASQUEIRA:</strong> Localizada na varanda para seu uso.</li>
                  <li>• <strong>SUPORTE:</strong> Qualquer coisa que precisarem, estamos à disposição via WhatsApp.</li>
                </ul>
              </section>
            </div>
          </motion.div>
        );

      case 'guia':
        const locations = [
          {
            category: 'Essenciais',
            icon: <ShoppingBag className="text-brand" size={18} />,
            items: [
              { name: 'Supermercado Brasil', desc: 'Praticidade para o dia a dia.', maps: 'https://maps.app.goo.gl/RvGq4P2qjA2R2bBj8' },
              { name: 'Banco do Brasil', desc: 'Agência e caixas eletrônicos.', maps: 'https://maps.app.goo.gl/Hgv1Ec5dU4euFuts7' },
              { name: 'Drogasil', desc: 'Farmácia completa e próxima.', maps: 'https://maps.app.goo.gl/jGo42Zo3LzmSpeMy6' },
              { name: 'Auto posto Bessa', desc: 'Tem pão francês quentinho quase sempre.', maps: 'https://maps.app.goo.gl/Fgg2V4JZgHwJdz3W6' },
            ]
          },
          {
            category: 'Gastronomia',
            icon: <Utensils className="text-orange-600" size={18} />,
            items: [
              { name: 'Restaurante Zero Grau', desc: 'Almoço completo com churrasco, super recomendo!', maps: 'https://maps.app.goo.gl/soATgrDNk2etpgyCA' },
              { name: 'Costelão Gaúcho', desc: 'Muito bom também, super recomendo!', maps: 'https://maps.app.goo.gl/PNhScwMMvafN2Kr18' },
              { name: 'Carne de Sol 1008', desc: 'Recomendo demais, pratos típicos fartos.', maps: 'https://maps.app.goo.gl/PmxSLQpqrD1qWogg7' },
              { name: 'Bar do Bill', desc: 'Simples, mas à noite tem um peixe bem gostoso.', maps: 'https://maps.app.goo.gl/R46rck5eDgFFteC69' },
              { name: 'Pamonha Goiana', desc: 'O clássico de Goiás que não pode faltar.', maps: 'https://maps.app.goo.gl/5FQ7fSrULA4zwFdE7' },
            ]
          },
          {
            category: 'Lazer e Compras',
            icon: <MapIcon className="text-blue-600" size={18} />,
            items: [
              { name: 'Flamboyant Shopping', desc: 'O maior e mais completo da cidade.', maps: 'https://maps.app.goo.gl/UUksbzipNx6kDgEf6' },
              { name: 'Sam\'s Club', desc: 'Compras em atacado e importados.', maps: 'https://maps.app.goo.gl/FszfPFry8o2KVdRY8' },
              { name: 'Carrefour', desc: 'Hipermercado completo.', maps: 'https://maps.app.goo.gl/Sf8AB4BsVqabH5RU7' },
              { name: 'Parque Flamboyant', desc: 'Lindo para caminhar e ver o pôr do sol.', maps: 'https://maps.app.goo.gl/SQoCikX7CPUhTpaP7' },
              { name: 'Parque Areião', desc: 'Ótimo para exercícios e contato com a natureza.', maps: 'https://maps.app.goo.gl/7ycWzKqAJVNxqFyQ6' },
              { name: 'Jardim Botânico', desc: 'Paz e tranquilidade em Goiânia.', maps: 'https://maps.app.goo.gl/FfsScvDAN8nQZsEN8' },
              { name: 'Centro Cultural Oscar Niemeyer', desc: 'Arquitetura icônica e eventos.', maps: 'https://maps.app.goo.gl/7epJkSaCRAjcF55M8' },
              { name: 'Autódromo de Goiânia', desc: 'Palco de grandes eventos automobilísticos.', maps: 'https://maps.app.goo.gl/FRD3L44RZsRD4ZdC6' },
            ]
          }
        ];

        const categories = ['Todos', ...locations.map(l => l.category)];
        const filteredLocations = guiaFilter === 'Todos' 
          ? locations 
          : locations.filter(l => l.category === guiaFilter);

        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex flex-col gap-1">
                <h1 className="text-2xl font-bold text-stone-800">Guia Local</h1>
                <p className="text-stone-500 text-xs italic">Navegue via Google Maps ou Waze.</p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setGuiaFilter(cat)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      guiaFilter === cat 
                        ? 'bg-brand text-white shadow-md shadow-brand-light' 
                        : 'bg-white text-stone-600 border border-stone-200 hover:border-brand'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="space-y-8">
              {filteredLocations.map((section, idx) => (
                <section key={idx} className="space-y-3">
                  <h2 className="text-sm font-bold text-stone-400 uppercase tracking-wider flex items-center gap-2 px-1">
                    {section.icon}
                    {section.category}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {section.items.map((place, pIdx) => (
                      <div key={pIdx} className="bg-white p-4 rounded-xl shadow-sm border border-stone-100 flex flex-col justify-between hover:border-brand transition-all group">
                        <div className="space-y-1">
                          <h3 className="font-bold text-stone-800 text-sm group-hover:text-brand-dark transition-colors">{place.name}</h3>
                          <p className="text-[11px] text-stone-500 leading-tight line-clamp-2">{place.desc}</p>
                        </div>
                        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-stone-50">
                          <a 
                            href={place.maps} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 bg-stone-50 hover:bg-brand-light text-stone-500 hover:text-brand-dark rounded-lg text-[10px] font-bold transition-all border border-stone-100 hover:border-brand-light"
                          >
                            <MapIcon size={12} /> Maps
                          </a>
                          <a 
                            href={`https://waze.com/ul?q=${encodeURIComponent(place.name + ' Goiânia')}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 bg-stone-50 hover:bg-blue-50 text-stone-500 hover:text-blue-700 rounded-lg text-[10px] font-bold transition-all border border-stone-100 hover:border-blue-100"
                          >
                            <ExternalLink size={12} /> Waze
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </motion.div>
        );

      case 'emergencia':
        const emergencyNumbers = [
          { label: 'POLÍCIA MILITAR DO ESTADO DE GOIÁS', number: '190', icon: <Shield className="text-stone-700" size={20} /> },
          { label: 'SERVIÇO DE ATENDIMENTO MÓVEL DE URGÊNCIA – SAMU', number: '192', icon: <Stethoscope className="text-stone-700" size={20} /> },
          { label: 'CORPO DE BOMBEIROS', number: '193', icon: <Building2 className="text-stone-700" size={20} /> },
          { label: 'POLÍCIA FEDERAL', number: '194', icon: <Shield className="text-stone-700" size={20} /> },
          { label: 'POLÍCIA CIVIL', number: '197', icon: <Shield className="text-stone-700" size={20} /> },
          { label: 'GUARDA MUNICIPAL', number: '153', icon: <Shield className="text-stone-700" size={20} /> },
          { label: 'HOSPITAL ESTADUAL DE URGÊNCIAS DE GOIÁS (HUGO)', number: '62 3201-4455', icon: <Stethoscope className="text-stone-700" size={20} /> },
          { label: 'DEAM – DELEGACIA ESPECIALIZADA NO ATENDIMENTO À MULHER', number: '62 3201-2801', icon: <Shield className="text-stone-700" size={20} /> },
          { label: 'DEAI – DELEGACIA DO IDOSO', number: '62 3201-1501', icon: <Shield className="text-stone-700" size={20} /> },
          { label: 'MINISTÉRIO PÚBLICO DO ESTADO DE GOIÁS', number: '62 3243-8000', icon: <Scale className="text-stone-700" size={20} /> },
          { label: 'MINISTÉRIO PÚBLICO FEDERAL', number: '62 3243-5400', icon: <Scale className="text-stone-700" size={20} /> },
        ];

        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold text-stone-800">Contatos de Emergência</h1>
              <p className="text-stone-500 text-sm italic">Clique nos números para realizar uma chamada imediata.</p>
            </div>
            
            <div className="bg-white rounded-3xl shadow-sm border border-stone-100 overflow-hidden divide-y divide-stone-50">
              {emergencyNumbers.map((item, idx) => (
                <a 
                  key={idx} 
                  href={`tel:${item.number.replace(/\s/g, '')}`}
                  className="flex items-center gap-5 p-5 hover:bg-stone-50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center shrink-0 group-hover:bg-yellow-200 transition-colors">
                    {item.icon}
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">{item.label}</span>
                    <span className="text-2xl font-black text-stone-700 group-hover:text-stone-900 transition-colors tracking-tight">
                      {item.number}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-brand p-6 rounded-3xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 text-white">
              <div className="space-y-1 text-center md:text-left">
                <h3 className="text-xl font-bold">Algum problema no Ap?</h3>
                <p className="text-brand-light text-sm">Estamos prontos para ajudar a qualquer hora.</p>
              </div>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white text-brand px-6 py-3 rounded-2xl font-bold hover:bg-brand-light transition-all shadow-md"
              >
                <MessageSquare size={20} /> Suporte via WhatsApp
              </a>
            </div>
          </motion.div>
        );

      case 'feedback':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h1 className="text-2xl font-bold text-stone-800">Sua Opinião</h1>
            <p className="text-stone-600">
              Como foi sua estadia? Sua avaliação nos ajuda a melhorar e oferecer uma experiência ainda melhor para os próximos hóspedes.
            </p>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center space-y-6">
              <div className="flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="text-stone-200 hover:text-yellow-400 cursor-pointer transition-colors" size={32} />
                ))}
              </div>
              <textarea 
                placeholder="Deixe um comentário..."
                className="w-full p-4 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:ring-2 focus:ring-brand outline-none h-32"
              ></textarea>
              <button className="w-full bg-brand text-white font-semibold py-4 rounded-xl shadow-lg shadow-brand-light hover:bg-brand-dark transition-colors">
                Enviar Avaliação
              </button>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo Section */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-md border border-stone-100 overflow-hidden">
                <img 
                  src="https://storage.googleapis.com/static.antigravity.dev/user-uploads/67d9884860434430156/67d9884860434430156_2.png" 
                  alt="Logo" 
                  className="w-8 h-8 object-contain"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="font-bold text-stone-800 leading-tight">Minha Casa</h1>
                <p className="text-[10px] text-stone-400 uppercase tracking-widest font-semibold">Guia Digital</p>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex items-center gap-1 md:gap-4 overflow-x-auto no-scrollbar py-2">
              <TopNavLink 
                active={activeTab === 'inicio'} 
                onClick={() => setActiveTab('inicio')} 
                icon={<Home size={18} />} 
                label="Início" 
              />
              <TopNavLink 
                active={activeTab === 'checkin'} 
                onClick={() => setActiveTab('checkin')} 
                icon={<Key size={18} />} 
                label="Check-in" 
              />
              <TopNavLink 
                active={activeTab === 'casa'} 
                onClick={() => setActiveTab('casa')} 
                icon={<Info size={18} />} 
                label="A Casa" 
              />
              <TopNavLink 
                active={activeTab === 'regras'} 
                onClick={() => setActiveTab('regras')} 
                icon={<FileText size={18} />} 
                label="Regras" 
              />
              <TopNavLink 
                active={activeTab === 'guia'} 
                onClick={() => setActiveTab('guia')} 
                icon={<MapPin size={18} />} 
                label="Guia" 
              />
              <TopNavLink 
                active={activeTab === 'emergencia'} 
                onClick={() => setActiveTab('emergencia')} 
                icon={<ShieldAlert size={18} />} 
                label="SOS" 
              />
              <TopNavLink 
                active={activeTab === 'feedback'} 
                onClick={() => setActiveTab('feedback')} 
                icon={<Star size={18} />} 
                label="Feedback" 
              />
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex flex-col min-h-screen">
        <main className="flex-1 max-w-5xl w-full mx-auto px-4 md:px-8 pt-6 md:pt-10 pb-20 md:pb-12">
          <AnimatePresence mode="wait">
            {renderContent()}
          </AnimatePresence>

            <div className="flex flex-col items-center mt-12 pt-8 border-t border-stone-200">
              <img 
                src="https://storage.googleapis.com/static.antigravity.dev/user-uploads/67d9884860434430156/67d9884860434430156_2.png" 
                alt="Logo Aluga Goiás" 
                className="w-12 h-12 object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 mb-4"
                referrerPolicy="no-referrer"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-stone-500 w-full">
                <div className="space-y-2">
                  <p className="font-bold text-stone-700 uppercase tracking-wider">Informações do Anfitrião</p>
                  <div className="space-y-1">
                    <p>WELLINGTON RODOVALHO FONSECA</p>
                    <p>CPF: 269.462.701-34</p>
                    <p>CAEPF: 269.462.701/001-49</p>
                    <p>CNAE: 6821-8/02 - Corretagem no aluguel de imóveis</p>
                    <p>CRECI: CRECI-GO 42695 | CNAI: 54826</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="font-bold text-stone-700 uppercase tracking-wider">Pagamento e Site</p>
                  <div className="space-y-1">
                    <p>Chave PIX: <span className="font-medium text-brand">reservas@alugagoias.com.br</span></p>
                    <p>Site: <a href="http://www.alugagoias.com.br" target="_blank" rel="noopener noreferrer" className="text-brand underline hover:text-brand-dark">www.alugagoias.com.br</a></p>
                  </div>
                </div>
              </div>
              <p className="text-[10px] text-stone-400 text-center mt-8">© 2024 Aluga Goiás. Todos os direitos reservados.</p>
            </div>
        </main>
      </div>

      {/* Floating WhatsApp Button (Adaptive) */}
      <a 
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Estou no guia digital e preciso de ajuda.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-4 md:right-8 z-50 bg-brand text-white px-5 py-3.5 rounded-full shadow-2xl flex items-center gap-2 hover:scale-105 transition-transform active:scale-95 group"
      >
        <MessageSquare size={22} fill="white" />
        <span className="font-bold text-sm md:text-base">Fale com o Anfitrião</span>
      </a>
    </div>
  );
}

function TopNavLink({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: React.ReactNode, label: string }) {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col md:flex-row items-center gap-1 md:gap-2 px-3 py-2 rounded-xl transition-all whitespace-nowrap ${
        active 
          ? 'bg-brand-light text-brand-dark font-bold shadow-sm' 
          : 'text-stone-500 hover:bg-stone-50 hover:text-stone-700'
      }`}
    >
      <div className={`${active ? 'text-brand' : 'text-stone-400'}`}>
        {icon}
      </div>
      <span className="text-[10px] md:text-sm font-semibold">{label}</span>
      {active && (
        <motion.div 
          layoutId="top-indicator"
          className="hidden md:block w-1.5 h-1.5 bg-brand rounded-full"
        />
      )}
    </button>
  );
}
