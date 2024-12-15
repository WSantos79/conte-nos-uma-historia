import { EditorContainer, FormateContainer } from "../../styles/elementos";
import React, { useState, useCallback } from "react";
import { Slate, Editable, withReact } from "slate-react";
import { createEditor, Editor } from "slate";
import { Button, StyledEditable, DivBotao, DivGeral, DivSlate, Titulo, DivTitulo, ButtonN, ButtonI, ButtonS } from "./styles";

const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "A line of text in a paragraph." }],
  },
];

const CodeElement = (props) => (
  <pre {...props.attributes}>
    <code>{props.children}</code>
  </pre>
);

const DefaultElement = (props) => <p {...props.attributes}>{props.children}</p>;

const Leaf = (props) => (
  <span
    {...props.attributes}
    style={{
      fontWeight: props.leaf.bold ? "bold" : "normal",
      fontStyle: props.leaf.italic ? "italic" : "normal",
      textDecoration: props.leaf.underline ? "underline" : "none",
    }}
  >
    {props.children}
  </span>
);

export default () => {
  const [editor] = useState(() => withReact(createEditor()));
  const [isPreview, setIsPreview] = useState(false);

  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case "code":
        return <CodeElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  const renderLeaf = useCallback((props) => {
    return <Leaf {...props} />;
  }, []);

  // Funções para aplicar/remover estilos
  const toggleMark = (format) => {
    const isActive = Editor.marks(editor)?.[format] || false;

    if (isActive) {
      Editor.removeMark(editor, format);
    } else {
      Editor.addMark(editor, format, true);
    }
  };

  return (
    <>
    <DivTitulo>
        <h4>Título</h4>
        <Titulo></Titulo>
        <label for="imageUpload">Selecionar Imagem</label>
        <input type="file" id="imageUpload" accept="image/*"/>

    </DivTitulo>
      <EditorContainer>
        <DivGeral>
          {/* Botões para aplicar estilos */}
          <DivBotao>
            <ButtonN onClick={() => toggleMark("bold")}>Negrito</ButtonN>
            <ButtonI onClick={() => toggleMark("italic")}>Itálico</ButtonI>
            <ButtonS onClick={() => toggleMark("underline")}>Sublinhado</ButtonS>
            <Button onClick={() => setIsPreview(!isPreview)}>
              {isPreview ? "Voltar para edição" : "Pré-visualizar"}
            </Button>
          </DivBotao>

          {/* Editor */}
          <Slate editor={editor} initialValue={initialValue}>
            {isPreview ? (
              <DivSlate>
                {initialValue.map((node, index) => (
                  <p key={index}>{Editor.string(editor, node)}</p>
                ))}
              </DivSlate>
            ) : (
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
            )}
          </Slate>
        </DivGeral>
      </EditorContainer>
    </>
  );
};
