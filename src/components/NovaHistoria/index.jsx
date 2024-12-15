import { EditorContainer, HistoryContainer } from "../../styles/elementos";
import React, { useState, useCallback } from "react";
import { Slate, Editable, withReact, ReactEditor } from "slate-react";
import { createEditor, Editor } from "slate";
import {
  Button,
  StyledEditable,
  DivBotao,
  DivGeral,
  TituloInput,
  DivTitulo,
  ButtonN,
  ButtonI,
  ButtonS,
  DivPre,
  ButtonVoltaPre,
  DivInputImg,
  Linha,
} from "./styles";
import { HistoriaContainer, Titulo } from "../../Pages/History/styles";

const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "A line of text in a paragraph." }],
  },
];

const CodeElement = (
  props // Renderiza elementos do tipo "code" com tags pre e code
) => (
  <pre {...props.attributes}>
    <code>{props.children}</code>
  </pre>
);

const DefaultElement = (props) => <p {...props.attributes}>{props.children}</p>; // Renderiza elementos padrão como parágrafos

const Leaf = (
  props // Renderiza folhas (caracteres) do editor
) => (
  <span
    {...props.attributes}
    style={{
      fontWeight: props.leaf.bold ? "bold" : "normal",
      fontStyle: props.leaf.italic ? "italic" : "normal",
      textDecoration: props.leaf.underline ? "underline" : "none",
      color: props.leaf.color || "#000", // Cor do texto
    }}
  >
    {props.children}
  </span>
);

export default () => {
  // Função principal do componente
  const [editor] = useState(() => withReact(createEditor())); // Cria um editor Slate com React
  const [isPreview, setIsPreview] = useState(false); // Define o estado da visualização (inicialmente oculta)
  const [TextoHistoria, setTextoHistoria] = useState(initialValue); // Define o estado do conteúdo da visualização
  const [titulo, setTitulo] = useState('');
  
  const tituloChange = (event) => {
    setTitulo(event.target.value); // Atualiza o estado com o novo valor
  };

  const renderElement = useCallback((props) => {
    // Função para renderizar elementos do editor
    switch (props.element.type) {
      case "code":
        return <CodeElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  // Função para renderizar folhas (caracteres) do editor
  const renderLeaf = useCallback((props) => {return <Leaf {...props} />}, []);

  // Funções para aplicar/remover estilos
  const toggleMark = (format) => {
    // Função para aplicar/remover formatações (negrito, itálico, sublinhado)
    const isActive = Editor.marks(editor)?.[format] || false; // Verifica se a formatação está ativa

    if (isActive) {
      Editor.removeMark(editor, format); // Remove a formatação
    } else {
      Editor.addMark(editor, format, true); // Aplica a formatação
    }
  };

  const applyColor = (color) => {
    // Função para aplicar cor ao texto
    ReactEditor.focus(editor); // Foca o editor
    Editor.addMark(editor, "color", color); // Aplica a cor
  };

  const handlePreview = () => {
    const newValue = JSON.parse(JSON.stringify(editor.children)); // clona os dados para evitar referências indevidas
    // Função para visualizar o conteúdo do editor
   
    setTextoHistoria(newValue); // Copia o conteúdo do editor para o estado de visualização
    
    setIsPreview(true); // Exibe a visualização
  };

  const handleBackToEdit = () => {
    setIsPreview(false); // Retorna para o modo de edição
  };

  




  const PreviewComponent = ({ historia, onBack }) => {
    // Renderiza o texto formatado preservando espaços e formatação
    const renderFormattedText = () => {
      return historia.map((node, index) => (
        <div style={{        
          marginTop: '0',
          padding: '0',
          fontSize: '21px',
          lineHeight: '1.8',
          margin: '0',
          whiteSpace: "pre-wrap",   
        }}
        
        key={index}>
          {node.children.map((leaf, idx) => (
            <span            
              key={idx}
              style={{
                fontWeight: leaf.bold ? "bold" : "normal",
                fontStyle: leaf.italic ? "italic" : "normal",
                textDecoration: leaf.underline ? "underline" : "none",
                color: leaf.color || "#000", // aplica a cor apenas ao texto formatado
                whiteSpace: "pre-wrap", // preserva os espaços e quebras de linha
                margin: '0',
                padding: '0',
                wordWrap: 'break-word',
              }}
            >{`${leaf.text}`}</span>
          ))}
        {`   `}</div> // nao sei, mas deu certo ha
      ));
    };
  
    return (
      <>
        <DivPre>
          <h3>Pré-visualização</h3>
          <ButtonVoltaPre onClick={onBack}>Voltar para edição</ButtonVoltaPre>
        </DivPre>
  
        <HistoryContainer>
          <Titulo>{titulo}</Titulo>
          <HistoriaContainer>
            {renderFormattedText()}
          </HistoriaContainer>
        </HistoryContainer>
      </>
    );
  };
  
  

  // Verifica se está no modo de pré-visualização
  if (isPreview) {
    return (
      <PreviewComponent
        historia={TextoHistoria}
        onBack={handleBackToEdit} // Desativa o modo de pré-visualização
      />
    );
  }

  // Renderiza a interface de edição quando não está em pré-visualização
  return (
    <>
      <DivTitulo>        
        <h4>Título</h4>
        <TituloInput type="text" value={titulo} onChange={tituloChange} />
        
        <p>É continuação de outra história?</p>
        <select style={{ maxHeight: '20px', overflowY: 'auto', textOverflow: 'ellipsis', width: '16%' }} onChange={(e) => fontFamilyChange(e.target.value)}>
                  <option value="'ATypewriterForMe', sans-serif">Não</option>
                  <option value="'Raleway', sans-serif">História 01</option>
                  <option value="'Raleway', sans-serif">História 02</option>
                  <option value="'Raleway', sans-serif">História 03</option>
                  <option value="'Raleway', sans-serif">História 012121212121212121212124756747657567567567567575675675670</option>
        </select>
      </DivTitulo>
      <Linha></Linha>
      <DivInputImg>
        <label htmlFor="imageUpload">Imagem para capa</label>
        <input type="file" id="imageUpload" accept="image/*" />
      </DivInputImg>

      <EditorContainer>
        <DivGeral>
          <DivBotao>
            <ButtonN onClick={() => toggleMark("bold")}>Negrito</ButtonN>
            <ButtonI onClick={() => toggleMark("italic")}>Itálico</ButtonI>
            <ButtonS onClick={() => toggleMark("underline")}>
              Sublinhado
            </ButtonS>
            <Button onClick={handlePreview}>Pré-visualizar</Button>
            <input
              type="color"
              onChange={(e) => applyColor(e.target.value)}
              onMouseDown={(e) => e.preventDefault()} // impede desfoco
              style={{ marginLeft: "8px" }}
            />
          </DivBotao>

          <Slate editor={editor} initialValue={TextoHistoria} onChange={(newValue) => setTextoHistoria(newValue)}>
            <StyledEditable
              renderElement={renderElement}
              renderLeaf={renderLeaf}
              onKeyDown={(event) => {
                if (!event.ctrlKey) return;

                switch (event.key) {
                  case "b":
                    event.preventDefault();
                    toggleMark("bold");
                    break;
                  case "i":
                    event.preventDefault();
                    toggleMark("italic");
                    break;
                  case "u":
                    event.preventDefault();
                    toggleMark("underline");
                    break;
                  default:
                    break;
                }
              }}
            />
          </Slate>
        </DivGeral>
      </EditorContainer>
    </>
  );
};