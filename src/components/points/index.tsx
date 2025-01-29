import { Anton } from "next/font/google";
import { forwardRef } from "react";
import { MdArrowDropDown } from "react-icons/md"; 

const anton = Anton({ subsets: ['latin'], weight: "400", variable: "--font-anton" })

const Points = forwardRef<HTMLElement>((props, ref) =>{
  const locais = [
    {
      titulo: "Centro Histórico | Hotel Ibis Styles",
      endereco: "Av. Sen. Queirós - Centro Histórico de São Paulo, São Paulo",
      horarioIda: "10h - 12h - 14h - 16h",
      horarioVolta: "22h - 23h - 00h",
    },
    {
      titulo: "Consolação | Hotel Meliã Paulista",
      endereco: "Av. Paulista, 2181 - Consolação, São Paulo",
      horarioIda: "10h - 12h - 14h - 16h",
      horarioVolta: "22h - 23h - 00h",
    },
    {
      titulo: "Bela Vista | Shopping Pátio Paulista",
      endereco: "R. Treze de Maio, 1947 - Bela Vista, São Paulo",
      horarioIda: "9h50 - 11h50 - 13h50 - 15h50",
      horarioVolta: "22h - 23h - 00h",
    },
    {
      titulo: "Jardim Paulista | Hotel Unique",
      endereco:
        "Av. Brigadeiro Luís Antônio, 4700 - Jardim Paulista, São Paulo",
      horarioIda: "10h - 12h - 14h - 16h",
      horarioVolta: "22h - 23h - 00h",
    },
    {
      titulo: "Vila Congonhas | Hotel Ibis Congonhas",
      endereco: "R. Baronesa de Bela Vista, 801 - Vila Congonhas, São Paulo",
      horarioIda: "10h - 12h - 14h - 16h",
      horarioVolta: "22h - 23h - 00h",
    },
    {
      titulo: "Morumbi | Hotel Ibis Morumbi",
      endereco: "Av. Roque Petroni Júnior, 800 - Torre I - Brooklin, São Paulo",
      horarioIda: "10h - 12h - 14h - 16h",
      horarioVolta: "22h - 23h - 00h",
    },
    {
      titulo: "Pinheiros | Hotel Ibis Styles Faria Lima",
      endereco: "R. Tavares Cabral, 61 - Pinheiros, São Paulo",
      horarioIda: "10h - 12h - 14h - 16h",
      horarioVolta: "22h - 23h - 00h",
    },
    {
      titulo: "SBC | Hotel Ibis São Bernardo do Campo",
      endereco: "Praça Samuel Sabatini - São Bernardo do Campo",
      horarioIda: "10h",
      horarioVolta: "00h",
    },
    {
      titulo: "Tatuapé | Hotel Ibis Tatuapé",
      endereco: "R. Filipe Camarão, 547 - Tatuapé, São Paulo",
      horarioIda: "10h",
      horarioVolta: "00h",
    },
    {
      titulo: "Guarulhos | Hotel Ibis Guarulhos",
      endereco: "R. Gen. Osório, 19 - Centro, Guarulhos",
      horarioIda: "10h",
      horarioVolta: "00h",
    },
    {
      titulo: "Interlagos | Hotel Ibis Interlagos",
      endereco: "Av. Interlagos, 2215 - Vila Constancia, São Paulo",
      horarioIda: "10h - 12h - 14h - 15h - 16h - 17h",
      horarioVolta: "22h - 23h - 00h",
    },
    {
      titulo: "Campinas | Hotel Nacional Inn Trevo",
      endereco: "Av. Benedito de Campos, 35 - Jardim do Trevo, Campinas",
      horarioIda: "8h30",
      horarioVolta: "00h",
    },
    {
      titulo: "Valinhos | Posto Saci",
      endereco: "LOC, SP-330, SN - KM 84 - Macuco, Valinhos - SP",
      horarioIda: "8h45",
      horarioVolta: "00h",
    },
    {
      titulo: "Vinhedo | Hotel Intercity",
      endereco: "Av. Indústrias, 855 - Distrito Industrial Benedito Storani",
      horarioIda: "8h55",
      horarioVolta: "00h",
    },
    {
      titulo: "Louveira | Mc Donalds",
      endereco: "Av. José Nicolau Estabile, 759 - Jardim Lago Azul",
      horarioIda: "9h05",
      horarioVolta: "00h",
    },
    {
      titulo: "Jundiaí | Hotel Ibis Jundiaí Shopping",
      endereco: "Av. 9 de Julho, 2921 - Anhangabaú, Jundiaí",
      horarioIda: "9h30",
      horarioVolta: "00h",
    },
  ];

  return (
    <section ref={ref} className=" text-white py-10">
      <h2 className={`${anton.className} text-3xl lg:text-4xl text-primary text-center mb-8`}>
        Pontos de embarque
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mx-2 lg:mx-12">
        {locais.map((local) => (
          <details  key={local.titulo} className="collapse bg-transparent border border-white">
            <summary  className="relative collapse-title text-base lg:text-sm font-medium">
             {local.titulo}
            <MdArrowDropDown size={25} className="absolute right-3 top-4" />
            </summary>
            <div className="collapse-content">
              <p className="font-semibold mb-2">{local.endereco}</p>
              <p><span className="font-semibold">Ida:</span> {local.horarioIda}</p>
              <p><span className="font-semibold">Volta:</span> {local.horarioVolta}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
})

export default Points;
