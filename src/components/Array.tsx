const Array = () => {
  const Filmes = [
    "O Homen que mudou o jogo",
    "A rede social",
    "MacDonalds",
    "Em busca da felecidade",
  ];
  return (
    <>
     <ul>
        {Filmes.map((filme,index)=>(
            <li key={filme}>{filme}</li>
        ))}
     </ul>
    </>
  );
};

export default Array;
