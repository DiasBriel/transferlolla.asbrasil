export default function Points() {
  const pontos = [
    {
      titulo: "Paulista",
      endereco: "Alameda Santos, 2233 – Jardim Paulista",
      imagem: "/paulista.jpg",
    },
    {
      titulo: "República",
      endereco: "Av. Ipiranga, 757 – Centro Histórico de São Paulo",
      imagem: "/republica.jpg",
    },
    {
      titulo: "Congonhas",
      endereco: "Rua Baronesa de Bela Vista, 801 – Vila Congonhas",
      imagem: "/congonhas.jpg",
    },
    {
      titulo: "Tatuapé",
      endereco: "Rua Domingos Agostini, 143 – Cidade Mãe do Céu",
      imagem: "/tatuape.jpg",
    },
    {
      titulo: "ABC",
      endereco: "Praça Samuel Sabatini, 230 – Centro, São Bernardo do Campo",
      imagem: "/abc.jpg",
    },
  ];
  return (
    <section className="bg-accent-blue text-white py-10">
      <h2 className="text-3xl font-bold text-center mb-8">
        Pontos de embarque
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {pontos.map((ponto, index) => (
          <div
            key={ponto.endereco}
            className="bg-white rounded-lg shadow-lg p-5 w-64 text-center"
          >
            <img
              src={ponto.imagem}
              alt={ponto.titulo}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{ponto.titulo}</h3>
            <p className="text-sm">{ponto.endereco}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
