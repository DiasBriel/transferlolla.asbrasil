import { Anton } from "next/font/google";
import { forwardRef } from "react";

const anton = Anton({ subsets: ['latin'], weight: "400", variable: "--font-anton" })


const Faq = forwardRef<HTMLElement>((props, ref) =>{

  const perguntas = [
    {
      pergunta:
        "Posso comprar somente um trecho: ida ou volta para o Lollapalooza?",
      resposta:
        "Sim! Os ingressos são vendidos separadamente para ida e volta. Você pode escolher utilizar apenas um dos trechos, conforme sua necessidade.",
    },
    {
      pergunta: "Como funciona os embarques de IDA para o Lollapalooza?",
      resposta: `Os embarques de IDA das rotas seguem o horário escolhido, respeitando o trajeto com tempo máximo de espera de 15 minutos. O veículo não poderá aguardar por atrasos maiores que 15 minutos. Por este motivo, pedimos que cheguem antecipadamente ao seu horário e local de embarque. Caso contrário, será considerado uma falta e o participante não terá direito ao reembolso, uma vez que o veículo deixou o local sem comercializar o espaço reservado pelo cliente. Os embarques de IDA podem ter uma variação do horário de partida de até 30 minutos.`,
    },
    {
      pergunta: "Como funciona os embarques de VOLTA do Lollapalooza?",
      resposta: `A previsão do último horário de embarque de VOLTA é de até 1h após o término do show do palco principal. Todos os embarques serão encerrados e os veículos liberados mediante a capacidade máxima dos mesmos. O local de embarque de VOLTA estará sinalizado e será o mesmo local de desembarque no evento no trajeto de IDA. Caso haja alguma mudança por motivos de força maior, a coordenação irá avisar através do canal no Telegram.`,
    },
    {
      pergunta:
        "Será criado algum grupo para as pessoas que compraram o transfer para o Lollapalooza?",
      resposta: `Os participantes têm a possibilidade de entrar em nosso canal de alertas no Telegram que será atualizado 24h antes do evento começar. Lá receberão informações do local de embarque e desembarque, além de informes constantes dos coordenadores que estarão nos pontos. Para que não haja desencontro é fundamental, quando adicionados ao canal, que fiquem atentos às informações de lá. Até porque, este será o nosso canal de comunicação oficial com 24h de antecedência ao evento.`,
    },
    {
      pergunta: "Como vou achar meu ônibus na volta do Lollapalooza?",
      resposta: `Todos os veículos vão estar identificados com adesivos no para-brisa dianteiro. Em caso de atrasos na rota, serão notificados no Telegram, bem como a chegada e saída de cada ponto de embarque.`,
    },
    {
      pergunta:
        "Quais as formas de pagamento aceitas para o Transfer do Lollapalooza? Quais bandeiras de cartão?",
      resposta: `Boleto bancário, Pix e cartões de crédito (Visa, Mastercard, Elo, Diners, American Express, Discover, Hipercard e JCB).`,
    },
    {
      pergunta:
        "Posso imprimir meu Ingresso do Transporte para o Lollapalooza?",
      resposta: `Sim. Pode imprimir através do site Ingresse ou apresentar o QR Code na tela de seu aparelho celular na hora do embarque.`,
    },
    {
      pergunta:
        "É permitido deixar pertences dentro do ônibus enquanto estou no Evento do Lollapalooza?",
      resposta: `Não. Os ônibus realizam múltiplas viagens. Portanto, fique atento aos seus pertences. Não nos responsabilizamos por itens perdidos no interior do veículo.`,
    },
    {
      pergunta:
        "Uma pessoa pode comprar o Ingresso de Transporte para o Lollapalooza para outra?",
      resposta: `Sim. Basta que a pessoa que for embarcar esteja com o bilhete em mãos para ser validado.`,
    },
    {
      pergunta: "Meu bilhete vale para qualquer dia de Evento do Lollapalooza?",
      resposta: `Não. Os bilhetes são válidos para dias específicos do Evento. Atente-se na hora de realizar sua compra para selecionar o dia e horário exato de sua viagem.`,
    },
    {
      pergunta:
        "Posso embarcar em algum ponto dentro do itinerário de ida para o Lollapalooza?",
      resposta: `Não. O trajeto de ida partindo do Meeting Point escolhido é direto, sem paradas em pontos ou estações até o Local do Evento.`,
    },
    {
      pergunta:
        "Posso descer em qualquer lugar dentro do itinerário do retorno do Lollapalooza?",
      resposta: `Não. Os ônibus não estão autorizados a efetuar paradas durante o percurso.`,
    },
    {
      pergunta:
        "Existe algum tipo de gratuidade para o Transporte pro Lollapalooza?",
      resposta: `Não, o Transfer não é considerado um serviço de transporte público. Portanto, não é passível a regras de gratuidade obrigatória.`,
    },
    {
      pergunta:
        "Como recebo o Voucher para o embarque no Transfer do Lollapalooza?",
      resposta: `Após a compra você receberá um voucher em seu e-mail. Verifique também a caixa de spam.`,
    },
    {
      pergunta: "Como é feito o embarque para o Lollapalooza?",
      resposta: `O embarque é feito por ordem de chegada. Você precisará apresentar o seu voucher (digital ou impresso). Usaremos pulseiras de identificação para facilitar o embarque de retorno.`,
    },
    {
      pergunta:
        "Os veículos possuem assentos marcados para ir pro Lollapalooza?",
      resposta: `Não. Os assentos são ocupados por ordem de chegada. Não é permitido viajar em pé no veículo.`,
    },
    {
      pergunta:
        "Comprei mais de um ingresso. Preciso transferir os demais para outras pessoas para o Lollapalooza?",
      resposta: `Somente se o titular da compra não estiver presente no momento do embarque. Caso contrário, não há necessidade. Basta o titular apresentar todos os QR-codes da compra no momento do embarque.`,
    },
    {
      pergunta: "Qual atendimento para clientes PCD no Lollapalooza?",
      resposta: `Caso o cliente seja PCD ou com mobilidade reduzida, fica sob a responsabilidade do mesmo entrar em contato conosco com 72 horas de antecedência para que possamos prestar o suporte adequado.`,
    },
  ];
  return (
    <section ref={ref} className="bg-grey text-black py-10 px-5">
      <h2 className={`${anton.className} text-3xl text-primary text-center mb-8`}>FAQ</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {perguntas.map((item) => (
          <div key={item.pergunta}>
            <h3 className="text-xl font-semibold mb-2">{item.pergunta}</h3>
            <p className="text-base leading-relaxed whitespace-pre-line">
              {item.resposta}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
})

export default Faq;
