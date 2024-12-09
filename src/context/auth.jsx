import { createContext, useContext, useState, useEffect } from "react";
import http from "../http";
import { ArmazenadorToken } from "../utils/ArmazenadorToken";

const SessaoUsuarioContext = createContext({
  usuarioEstaLogado: false,
  login: (email, senha) => Promise.resolve(),
  logout: () => {},
  perfil: null,
  erro: null,
  carregando: false,
});

export const useSessaoUsuarioContext = () => useContext(SessaoUsuarioContext);

export const SessaoUsuarioProvider = ({ children }) => {
  const [usuarioEstaLogado, setUsuarioEstaLogado] = useState(false);
  const [perfil, setPerfil] = useState(null);
  const [erro, setErro] = useState(null);
  const [carregando, setCarregando] = useState(false);

  // Inicializa o estado verificando se os tokens já existem
  useEffect(() => {
    const token = ArmazenadorToken.obterAccessToken();
    if (token) {
      setUsuarioEstaLogado(true);
      carregarPerfil(); // Carrega o perfil do usuário, se necessário
    }
  }, []);

  // Função de login
  const login = async (email, senha) => {
    setCarregando(true);
    setErro(null);
    try {
      const resposta = await http.post("auth/login", { email, senha });
      ArmazenadorToken.definirTokens(
        resposta.data.access_token,
        resposta.data.refresh_token
      );
      setUsuarioEstaLogado(true);
      carregarPerfil(); // Opcional: carrega o perfil do usuário após o login
    } catch (erro) {
      setErro("Credenciais inválidas ou erro no servidor.");
      console.error(erro);
    } finally {
      setCarregando(false);
    }
  };

  // Função de logout
  const logout = () => {
    ArmazenadorToken.removerTokens();
    setUsuarioEstaLogado(false);
    setPerfil(null);
  };

  // Função para carregar informações do perfil (se necessário)
  const carregarPerfil = async () => {
    try {
      const resposta = await http.get("auth/perfil");
      setPerfil(resposta.data);
    } catch (erro) {
      console.error("Erro ao carregar perfil:", erro);
    }
  };

  const value = {
    usuarioEstaLogado,
    login,
    logout,
    perfil,
    erro,
    carregando,
  };

  return (
    <SessaoUsuarioContext.Provider value={value}>
      {children}
    </SessaoUsuarioContext.Provider>
  );
};
