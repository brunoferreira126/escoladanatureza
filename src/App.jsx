import "./App.css";
import logo from "./assets/logo.png";
import poster from "./assets/poster.png";

function App() {
  const formulario =
    "https://forms.gle/NNuqGhTsS2mhc9ja6";

  const whatsappEscola =
    "https://wa.me/558598513856";

  const whatsappSuporte =
    "https://wa.me/5585981906528";

  return (
    <div className="container">
      <div className="card">

        <img
          src={logo}
          alt="Escola da Natureza"
          className="logo"
        />

        <div className="badge">
          🌿 EVENTO GRATUITO
        </div>

        <h1>
          I Seminário de Ecoturismo,
          Ecopsicologia e Saúde Emocional
        </h1>

        <div className="evento">
          <p> 06 de Junho</p>
          <p> 09h às 11h</p>
          <p> Escola da Natureza - Pindoretama</p>
        </div>

        <div className="vagas">
          ⚠️ Vagas Limitadas
        </div>

        <div className="como-funciona">
          <h2> COMO FAZER SUA INSCRIÇÃO </h2>

          <div className="passo">
            1️⃣ Clique no botão verde abaixo
          </div>

          <div className="passo">
            2️⃣ Preencha seus dados
          </div>

          <div className="passo">
            3️⃣ Pronto! Sua vaga estará garantida
          </div>
        </div>

        <div className="seta">
          ⬇️⬇️⬇️
        </div>

        <a
          href={formulario}
          target="_blank"
          rel="noreferrer"
          className="btn-inscricao"
        >
          ✅ FAZER MINHA INSCRIÇÃO GRATUITA
        </a>

        <p className="obs">
          As inscrições são gratuitas.
          Não deixe para a última hora.
        </p>

        <div className="botoes">

          <a
            href={whatsappEscola}
            target="_blank"
            rel="noreferrer"
            className="btn-whatsapp"
          >
             WhatsApp Escola da Natureza
          </a>

          <a
            href={whatsappSuporte}
            target="_blank"
            rel="noreferrer"
            className="btn-suporte"
          >
             Dúvidas sobre a inscrição
          </a>

        </div>

        <div className="palestrantes">

          <h2>Palestrantes</h2>

          <div className="speaker">
            🎤 Alberto Augusto
            <span>
              Presidente do Sindicato Estadual dos Guias de Turismo do Ceará
            </span>
          </div>

          <div className="speaker">
            🎤 Raison Pinheiro
            <span>
              Presidente do Instituto da Natureza
            </span>
          </div>

        </div>

        <img
          src={poster}
          alt="Poster"
          className="poster"
        />

      </div>
    </div>
  );
}

export default App;