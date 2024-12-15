import { EditorContainer, FormateContainer } from "../../styles/elementos";
import React, { useState, useCallback } from "react";
import { Slate, Editable, withReact, ReactEditor } from "slate-react";
import { createEditor, Editor } from "slate";
import { Button, StyledEditable, DivBotao, DivGeral, Titulo, DivTitulo, ButtonN, ButtonI, ButtonS } from "./styles";

const initialValue = [ // Define o valor inicial do editor (um parágrafo com texto)
  {
    type: "paragraph",
    children: [{ text: "A line of text in a paragraph." }],
  },
];

const CodeElement = (props) => ( // Renderiza elementos do tipo "code" com tags pre e code
  <pre {...props.attributes}>
    <code>{props.children}</code>
  </pre>
);

const DefaultElement = (props) => <p {...props.attributes}>{props.children}</p>; // Renderiza elementos padrão como parágrafos

const Leaf = (props) => ( // Renderiza folhas (caracteres) do editor
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

const PreviewComponent = ({ content, onBack }) => ( // Componente para visualizar o conteúdo do editor
  <div style={{ padding: "16px", border: "1px solid #ccc", borderRadius: "4px" }}>
    <h3>Pré-visualização</h3>
    <div style={{ whiteSpace: "pre-wrap", overflowWrap: "break-word" }}>
      {content.map((node, index) => (
        <p key={index}>
          {node.children.map((leaf) => leaf.text).join("")}
        </p>
      ))}
    </div>
    <Button onClick={onBack}>Voltar para edição</Button>
  </div>
);

export default () => { // Função principal do componente
  const [editor] = useState(() => withReact(createEditor())); // Cria um editor Slate com React
  const [isPreview, setIsPreview] = useState(false); // Define o estado da visualização (inicialmente oculta)
  const [previewContent, setPreviewContent] = useState(initialValue); // Define o estado do conteúdo da visualização

  const renderElement = useCallback((props) => { // Função para renderizar elementos do editor
    switch (props.element.type) {
      case "code":
        return <CodeElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  const renderLeaf = useCallback((props) => { // Função para renderizar folhas (caracteres) do editor
    return <Leaf {...props} />;
  }, []);

  // Funções para aplicar/remover estilos
  const toggleMark = (format) => { // Função para aplicar/remover formatações (negrito, itálico, sublinhado)
    const isActive = Editor.marks(editor)?.[format] || false; // Verifica se a formatação está ativa

    if (isActive) {
      Editor.removeMark(editor, format); // Remove a formatação
    } else {
      Editor.addMark(editor, format, true); // Aplica a formatação
    }
  };

  const applyColor = (color) => { // Função para aplicar cor ao texto
    ReactEditor.focus(editor); // Foca o editor
    Editor.addMark(editor, "color", color); // Aplica a cor
  };

  const handlePreview = () => { // Função para visualizar o conteúdo do editor
    setPreviewContent([...editor.children]); // Copia o conteúdo do editor para o estado de visualização
    setIsPreview(true); // Exibe a visualização
  };

 
  return (
    <>
      <DivTitulo>
        <h4>Título</h4>
        <Titulo />
        <label htmlFor="imageUpload">Selecionar Imagem</label>
        <input type="file" id="imageUpload" accept="image/*" />
      </DivTitulo>

      <EditorContainer>
        <DivGeral>
          {isPreview ? (
            <PreviewComponent
              content={previewContent}
              onBack={() => setIsPreview(false)}
            />
          ) : (
            <>
              {/* Botões para aplicar estilos */}
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
                  onMouseDown={(e) => e.preventDefault()} // Impede desfoco
                  style={{ marginLeft: "8px" }}
                />
              </DivBotao>

              {/* Editor */}
              <Slate editor={editor} initialValue={initialValue}>
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
            </>
          )}
        </DivGeral>
      </EditorContainer>
    </>
  );
};
