import React, { useState } from "react";
import ChapterCard from "./ChapterCard";

const chapters = [
  { id: 1, title: "Aprendendo a tomar decisões", teacherPdf: "/assets/pdfs/Educador_Capitulo_01_3a.pdf", studentPdf: "/assets/pdfs/Estudante_Capitulo_01_3a.pdf" },
  { id: 2, title: "Vale a pena uma pizza por esse preço?", teacherPdf: "/assets/pdfs/Educador_Capitulo_02_3a.pdf", studentPdf: "/assets/pdfs/Estudante_Capitulo_02_3a.pdf" },
  { id: 3, title: "Quanto devo cobrar por uma pizza?", teacherPdf: "/assets/pdfs/Educador_Capitulo_03_3a.pdf", studentPdf: "/assets/pdfs/Estudante_Capitulo_03_3a.pdf" },
  { id: 4, title: "O preço da fatia de pizza com que todo mundo concorda", teacherPdf: "/assets/pdfs/Educador_Capitulo_04_3a.pdf", studentPdf: "/assets/pdfs/Estudante_Capitulo_04_3a.pdf" },

  { id: 5, title: " O que faz o preço da pizza mudar?", teacherPdf: "/assets/pdfs/Educador_Capitulo_05_3a.pdf", studentPdf: "/assets/pdfs/Estudante_Capitulo_05_3a.pdf" },
  { id: 6, title: "Por que alguns países são tão ricos e outros tão pobres?", teacherPdf: "/assets/pdfs/Educador_Capitulo_06_3a.pdf", studentPdf: "/assets/pdfs/Estudante_Capitulo_06_3a.pdf" },
];

const ChapterList = () => {
  const [openPdf, setOpenPdf] = useState({ id: null, type: null });

  const togglePdf = (id, type) => {
    if (openPdf.id === id && openPdf.type === type) {
      setOpenPdf({ id: null, type: null });
    } else {
      setOpenPdf({ id, type });
    }
  };

  const downloadPdf = (path) => {
    const link = document.createElement("a");
    link.href = path;
    link.download = path.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-6" id="chapter-list">
      <h1 className="text-4xl font-semibold text-center mb-4 bg-gradient-to-br from-[#18a4ac] to-[#21BDC6]  text-transparent bg-clip-text">
        Biblioteca de Capítulos
      </h1>
      <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto pb-4">
        Explore os capítulos abaixo e visualize / baixe os conteúdos do Caderno do Educador ou do Livro do Estudante.
      </p>

      {chapters.map((chapter) => (
        <ChapterCard
          key={chapter.id}
          chapter={chapter}
          openPdf={openPdf}
          togglePdf={togglePdf}
          downloadPdf={downloadPdf}
        />
      ))}
    </div>
  );
};

export default ChapterList;
