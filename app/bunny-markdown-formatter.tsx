"use client";

import { useState } from "react";

export default function BunnyMarkdownFormatter() {
  const [url, setUrl] = useState("");
  const [alt, setAlt] = useState("");
  const [title, setTitle] = useState("");
  const [markdown, setMarkdown] = useState("");
  const [copied, setCopied] = useState(false);

  const handleFormat = () => {
    if (!url) return;
    setMarkdown(`![${alt || "Texto alternativo"}](${url} \"${title || "Título de la imagen"}\")`);
    setCopied(false);
  };

  const handleCopy = () => {
    if (markdown) {
      navigator.clipboard.writeText(markdown);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: 32,
        background: "#222",
        borderRadius: 16,
        color: "#fff",
        boxShadow: "0 4px 32px #0006",
        width: "95%"
      }}
    >
      <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 24, textAlign: "center" }}>
        Formateador de URL de Bunny.net a Markdown
      </h2>
      <input
        type="text"
        placeholder="Pega aquí la URL de Bunny.net"
        value={url}
        onChange={e => setUrl(e.target.value)}
        style={{ width: "100%", padding: 12, borderRadius: 8, border: "none", marginBottom: 16, fontSize: 18 }}
      />
      <input
        type="text"
        placeholder="Texto alternativo (opcional)"
        value={alt}
        onChange={e => setAlt(e.target.value)}
        style={{ width: "100%", padding: 12, borderRadius: 8, border: "none", marginBottom: 16, fontSize: 18 }}
      />
      <input
        type="text"
        placeholder="Título de la imagen (opcional)"
        value={title}
        onChange={e => setTitle(e.target.value)}
        style={{ width: "100%", padding: 12, borderRadius: 8, border: "none", marginBottom: 16, fontSize: 18 }}
      />
      <button
        onClick={handleFormat}
        style={{ width: "100%", padding: 14, borderRadius: 8, background: "#fff", color: "#222", fontWeight: 700, marginBottom: 20, cursor: "pointer", fontSize: 18 }}
        disabled={!url}
      >
        Generar Markdown
      </button>
      {markdown && (
        <div style={{ marginTop: 24 }}>
          <textarea
            value={markdown}
            readOnly
            style={{ width: "100%", minHeight: 80, borderRadius: 8, padding: 12, background: "#111", color: "#fff", border: "none", marginBottom: 12, fontSize: 18 }}
          />
          <button
            onClick={handleCopy}
            style={{ width: "100%", padding: 14, borderRadius: 8, background: copied ? "#4ade80" : "#fff", color: copied ? "#222" : "#222", fontWeight: 700, cursor: "pointer", fontSize: 18 }}
          >
            {copied ? "¡Copiado!" : "Copiar Markdown"}
          </button>
        </div>
      )}
    </div>
  );
}
