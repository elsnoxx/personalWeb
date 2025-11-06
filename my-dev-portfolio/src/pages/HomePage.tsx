import Me from "../components/me";

import meImg from "../assets/img/me.jpeg";


export default function HomePage() {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center md:items-start md:space-x-6 p-4">
        {/* Levý sloupec */}
        <div className="flex-2 mb-6 md:mb-0 ">
          <img src={meImg} alt="Moje foto" className="w-full max-w-sm rounded-lg shadow-lg" />
        </div>

        {/* Pravý sloupec */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">Vítejte na mé osobní stránce</h1>
          <p className="text-gray-700 text-lg">
            Jsem IT konzultant a vývojář se zaměřením na průmyslové systémy, .NET a React aplikace.
          </p>
        </div>
      </section>


      <section className="p-4 bg-gray-100">
        <Me />
      </section>
    </>
  );
}
