import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFieldMask";
import {
  Button,
  Typography,
  Container,
  CircularProgress,
} from "@material-ui/core";
import {
  FormElementsContainer,
  ProfissionaisPaper,
  ProfissionaisContainer,
} from "ui/styles/pages/index.style";
import useIndex from "data/hooks/pages/useIndex";

export default function Home() {
  const {
    cep,
    setCep,
    cepValido,
    buscarProfissionais,
    erro,
    diaristas,
    buscaFeita,
    carregando,
    diaristasRestantes,
  } = useIndex();

  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu enedereço e veja todos os profissionais da sua localidade"
        }
      />
      <Container>
        <FormElementsContainer>
          <TextFieldMask
            mask="99.999-999"
            label="Digite seu CEP"
            fullWidth
            variant="outlined"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          />
          {erro && <Typography color="error">{erro}</Typography>}
          <Button
            variant="contained"
            color="secondary"
            sx={{ width: "220px" }}
            disabled={!cepValido || carregando}
            onClick={(e) => buscarProfissionais(cep)}
          >
            {carregando ? <CircularProgress size={20} /> : "Buscar"}
          </Button>
        </FormElementsContainer>
        {buscaFeita &&
          (diaristas.length > 0 ? (
            <ProfissionaisPaper>
              <ProfissionaisContainer>
                {diaristas.map((diarista, index) => {
                  return (
                    <UserInformation
                      key={index}
                      name={diarista.nome_completo}
                      picture={diarista.foto_usuario}
                      rating={diarista.reputacao}
                      description={diarista.cidade}
                    />
                  );
                })}
              </ProfissionaisContainer>
              <Container sx={{ textAlign: "center" }}>
                {diaristasRestantes > 0 && (
                  <Typography sx={{ mt: 5 }}>
                    ... e mais {diaristasRestantes}{" "}
                    {diaristasRestantes > 1
                      ? "profissionais atendem"
                      : "profissional atende"}{" "}
                    ao seu endereço.
                  </Typography>
                )}
                <Button variant="contained" color="secondary" sx={{ mt: 5 }}>
                  Contratar um profissional
                </Button>
              </Container>
            </ProfissionaisPaper>
          ) : (
            <Typography align="center" color="textPrimary">
              Ainda não temos nenhuma diarista disponível em sua região.
            </Typography>
          ))}
      </Container>
    </div>
  );
}
