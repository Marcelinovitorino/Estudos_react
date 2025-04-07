const Array = () => {
  const Filmes = [
    { nome: "O Homen que mudou o jogo" },
    { nome: "A rede social" },
    { nome: "MacDonalds" },
    { nome: "Em busca da felecidade" },
  ];
  return (
    <>
      <ul>
        {Filmes.map((filme, index) => (
          <li key={index}>{filme.nome}</li>
        ))}
      </ul>
    </>
  );
};

export default Array;
