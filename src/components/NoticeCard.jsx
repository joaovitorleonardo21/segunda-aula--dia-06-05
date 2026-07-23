import { useState } from "react";
import "./NoticeCard.css";

function NoticeCard({ notice, onToggleFeatured, onDeleteNotice }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <article className={`notice-card ${notice.featured ? "featured" : ""}`}>
      <p>{notice.category}</p>
      <h3>{notice.title}</h3>
      <p>{notice.description}</p>

      <div className="notice-meta">
        <span>Por: {notice.author}</span>
        {" - "}
        <span>Data: {notice.date}</span>
      </div>

      {showDetails && (
        <p>
          {notice.id === 1
            ? "A Secitex (Semana de Ciência, Tecnologia e Extensão do IFRN) é uma iniciativa voltada à divulgação da produção científica e tecnológica, proporcionando um ambiente de troca de conhecimentos entre estudantes, servidores e a comunidade, por meio de exposições, oficinas, apresentações de trabalhos e manifestações culturais.."
            : "O laboratório de manutenção do Instituto Federal do Rio Grande do Norte (IFRN) – Campus Macau é um ambiente destinado ao desenvolvimento de atividades técnicas e educacionais, oferecendo suporte à conservação e ao funcionamento dos equipamentos da instituição, além de contribuir para a formação prática dos estudantes.."}
        </p>
      )}

      <div className="notice-actions">
        <button onClick={() => onToggleFeatured(notice.id)}>
          {notice.featured ? "Remover destaque" : "Destacar"}
        </button>

        <button
          className="details"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "Ocultar detalhes" : "Exibir detalhes"}
        </button>

        <button onClick={() => onDeleteNotice(notice.id)}>
          Excluir
        </button>
      </div>
    </article>
  );
}

export default NoticeCard;