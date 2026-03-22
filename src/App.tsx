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
  Shield,
  Gift,
  Sparkles,
  Flag,
  Calendar,
  Phone
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type Tab = 'inicio' | 'checkin' | 'casa' | 'regras' | 'guia' | 'emergencia' | 'feedback';

const ADDRESS = "Rua 1, Quadra 9, Lote 22, Casa 2, Jardim Santo Antônio, CEP 74.853-130, Goiânia-GO";
const WHATSAPP_NUMBER = "5562991514568";

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
            <div className="py-6 md:py-10">
              <h1 className="text-3xl md:text-5xl font-bold text-stone-800">Seja Bem-vindo!</h1>
              <p className="text-stone-500 text-sm md:text-lg mt-2">Minha casa em Goiânia - Guia Digital</p>
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

              <section className="bg-amber-50 p-6 rounded-2xl border border-amber-100 md:col-span-2 shadow-sm">
                <h2 className="text-xl font-semibold text-amber-800 flex items-center gap-2 mb-4">
                  <Gift className="text-amber-600" size={24} />
                  Bônus de Boas-vindas
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-white p-2 rounded-lg shadow-xs">
                      <Refrigerator className="text-amber-600" size={18} />
                    </div>
                    <p className="text-amber-900/80 text-sm">Budweiser e águas com gás na geladeira.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-white p-2 rounded-lg shadow-xs">
                      <Layout className="text-amber-600" size={18} />
                    </div>
                    <p className="text-amber-900/80 text-sm">Bombons na estação de trabalho da sala.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-white p-2 rounded-lg shadow-xs">
                      <Coffee className="text-amber-600" size={18} />
                    </div>
                    <p className="text-amber-900/80 text-sm">Cápsulas da cafeteira na cozinha (em cima do filtro).</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-white p-2 rounded-lg shadow-xs">
                      <Utensils className="text-amber-600" size={18} />
                    </div>
                    <p className="text-amber-900/80 text-sm">Carvão no armário da varanda (porta próxima à churrasqueira) - pode usar à vontade!</p>
                  </div>
                </div>
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
                    Senha: <strong>2003</strong> <br />
                    <span className="text-xs mt-2 block">Dentro do box estão as 3 chaves (das duas portas da sala e do portão social) e também o controle remoto do portão da garagem.</span>
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
              <p className="text-brand-dark text-sm leading-relaxed mb-3">
                Este imóvel é de uso pessoal e foi preparado com muito carinho para receber você. 
                Por isso, pedimos que cuide da casa, móveis e utensílios como se fossem seus. 
                Cada detalhe foi pensado para garantir conforto e praticidade — contamos com sua 
                colaboração para manter tudo bem conservado para nós também. Muito obrigado pela compreensão!
              </p>
              <p className="text-brand-dark font-semibold text-sm flex items-center gap-2">
                <Shield size={16} className="text-brand" />
                Em toda a casa temos alguns objetos pessoais, peço a gentileza de não mexer.
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
                  <li className="text-red-500 italic font-medium">• 1 Climatizador (estragado)</li>
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
                  <p>• 1 Cama de casal e 1 cama de solteiro</p>
                  <p>• Extra: 3 colchões de solteiro</p>
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
                  <li className="text-amber-600 font-medium">• Carvão disponível no armário (porta próxima à churrasqueira)</li>
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
              { name: 'Território La Pizza', desc: 'Excelente opção de pizzas na região.', maps: 'https://maps.app.goo.gl/rJHSW1FqUHz9jH7y8' },
              { name: 'Semeando Verdade Panificadora', desc: 'Café e lanches o dia todo, o melhor da região.', maps: 'https://maps.app.goo.gl/taJ5mcYVtjdg1dz38' },
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
              { name: 'Feira da Lua', desc: 'Tradicional feira aos sábados com artesanato e comida.', maps: 'https://maps.app.goo.gl/cP3tBtftiVahZMFeA' },
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
            {/* MOTO GP HIGHLIGHT */}
            <section className="bg-stone-900 p-6 rounded-2xl border border-stone-800 shadow-xl overflow-hidden relative group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Flag size={120} className="text-white" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider animate-pulse">
                    Evento em Destaque
                  </span>
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <Flag className="text-red-500" size={20} />
                    MOTO GP GOIÂNIA
                  </h2>
                </div>
                <p className="text-stone-400 text-sm mb-6 max-w-xl">
                  Acompanhe todas as informações oficiais, alterações no trânsito e programação completa do evento através dos canais da Prefeitura.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a 
                    href="https://www.goiania.go.gov.br/wp-content/uploads/2026/03/plano_transito_unificado.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[200px] bg-white hover:bg-stone-100 text-stone-900 px-4 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all active:scale-95"
                  >
                    <FileText size={18} /> Plano de Trânsito (PDF)
                  </a>
                  <a 
                    href="https://www.goiania.go.gov.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[200px] bg-stone-800 hover:bg-stone-700 text-white px-4 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 border border-stone-700 transition-all active:scale-95"
                  >
                    <ExternalLink size={18} /> Site da Prefeitura
                  </a>
                </div>
              </div>
            </section>

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
        const emergencyGroups = [
          {
            title: 'Segurança Pública',
            icon: <Shield className="text-red-600" size={18} />,
            items: [
              { label: 'Polícia Militar', number: '190', desc: 'Ocorrências policiais em andamento.', color: 'bg-red-50 text-red-700 border-red-100' },
              { label: 'Corpo de Bombeiros', number: '193', desc: 'Incêndios e resgates.', color: 'bg-orange-50 text-orange-700 border-orange-100' },
              { label: 'Guarda Municipal', number: '153', desc: 'Segurança patrimonial e apoio.', color: 'bg-blue-50 text-blue-700 border-blue-100' },
              { label: 'Polícia Civil', number: '197', desc: 'Denúncias e investigações.', color: 'bg-stone-50 text-stone-700 border-stone-200' },
            ]
          },
          {
            title: 'Saúde e Urgência',
            icon: <Stethoscope className="text-emerald-600" size={18} />,
            items: [
              { label: 'SAMU', number: '192', desc: 'Urgências médicas e ambulância.', color: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
              { label: 'Hospital HUGO', number: '62 3201-4455', desc: 'Hospital Estadual de Urgências.', color: 'bg-stone-50 text-stone-700 border-stone-200' },
            ]
          },
          {
            title: 'Delegacias e Apoio',
            icon: <Scale className="text-stone-600" size={18} />,
            items: [
              { label: 'DEAM (Mulher)', number: '62 3201-2801', desc: 'Atendimento à mulher.', color: 'bg-pink-50 text-pink-700 border-pink-100' },
              { label: 'DEAI (Idoso)', number: '62 3201-1501', desc: 'Delegacia do Idoso.', color: 'bg-indigo-50 text-indigo-700 border-indigo-100' },
              { label: 'Ministério Público', number: '62 3243-8000', desc: 'Atendimento ao cidadão.', color: 'bg-stone-50 text-stone-700 border-stone-200' },
            ]
          }
        ];

        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8 pb-10"
          >
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold text-stone-800">Contatos de Emergência</h1>
              <p className="text-stone-500 text-sm italic">Toque no card para realizar uma chamada imediata.</p>
            </div>
            
            <div className="space-y-8">
              {emergencyGroups.map((group, gIdx) => (
                <div key={gIdx} className="space-y-4">
                  <div className="flex items-center gap-2 px-1">
                    {group.icon}
                    <h2 className="text-xs font-bold text-stone-400 uppercase tracking-widest">{group.title}</h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {group.items.map((item, idx) => (
                      <a 
                        key={idx} 
                        href={`tel:${item.number.replace(/\s/g, '').replace(/-/g, '')}`}
                        className={`group relative p-5 rounded-2xl border transition-all hover:shadow-md active:scale-[0.98] flex flex-col justify-between overflow-hidden ${item.color}`}
                      >
                        <div className="relative z-10">
                          <div className="flex justify-between items-start mb-1">
                            <span className="text-[10px] font-bold uppercase tracking-wider opacity-70">{item.label}</span>
                            <Phone size={14} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <div className="text-2xl font-black tracking-tighter mb-1">
                            {item.number}
                          </div>
                          <p className="text-[10px] opacity-80 leading-tight pr-8">{item.desc}</p>
                        </div>
                        {/* Decorative background number */}
                        <div className="absolute -bottom-2 -right-2 text-6xl font-black opacity-[0.03] select-none pointer-events-none group-hover:opacity-[0.07] transition-opacity">
                          {item.number.split(' ')[0]}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-brand p-6 rounded-3xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <MessageSquare size={120} />
              </div>
              <div className="space-y-1 text-center md:text-left relative z-10">
                <h3 className="text-xl font-bold">Problemas com a Estadia?</h3>
                <p className="text-brand-light text-sm">Suporte direto com o anfitrião via WhatsApp.</p>
              </div>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 flex items-center gap-3 bg-white text-brand px-8 py-4 rounded-2xl font-bold hover:bg-brand-light transition-all shadow-xl active:scale-95"
              >
                <MessageSquare size={20} /> Falar com Wellington
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
              <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center shadow-lg shadow-brand-light overflow-hidden relative">
                <Home className="text-white" size={24} />
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

            <footer className="mt-16 pt-8 border-t border-stone-200">
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
            </footer>
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
