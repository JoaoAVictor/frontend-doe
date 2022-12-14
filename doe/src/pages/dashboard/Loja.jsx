import React from "react";
import CardCupom from "../../components/Cards/CardCupom";
import ContainerV2 from "../../components/ContainerV2";

function Loja() {
  return (
    <ContainerV2 padding="5rem 0px 1rem 0px" gap="2rem">
      <CardCupom
        title="Meia entrada cinema"
        description=" Como usar: Será enviado um código para seu e-mail para ativar no
            aplicativo Cinemark. No dia, de sua escolha, basta apresentar o
            ticket gerado no app, e curtir o filme escolhido ! IMPORTANTE! Será
            necessário a apresentação de documento de identificação."
        moneyUser={200}
        moneyAdquirir="199"
      />
    </ContainerV2>
  );
}

export default Loja;
