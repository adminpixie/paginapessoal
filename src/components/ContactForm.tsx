"use client";

import { useState } from "react";

const fieldClass =
  "w-full border-b border-cream/35 bg-transparent py-3 text-cream placeholder:text-cream/45 transition-colors focus:border-mustard focus:outline-none";

export function ContactForm() {
  const [firstName, setFirstName] = useState<string | null>(null);

  // Página de demonstração: nada é enviado a lugar nenhum.
  function handleSubmit(formData: FormData) {
    const name = String(formData.get("nome") ?? "").trim();
    setFirstName(name.split(/\s+/)[0] ?? "");
  }

  if (firstName !== null) {
    return (
      <div
        role="status"
        className="flex h-full min-h-72 flex-col justify-center rounded-2xl border border-cream/25 p-8"
      >
        <p className="font-display text-3xl leading-tight">
          Obrigada{firstName ? `, ${firstName}` : ""}!
        </p>
        <p className="mt-3 text-cream/75">
          Esta é uma página de demonstração com dados fictícios — então sua
          mensagem não foi enviada de verdade. Mas a intenção foi anotada.
        </p>
        <button
          type="button"
          onClick={() => setFirstName(null)}
          className="mt-6 self-start border-b border-cream/50 pb-0.5 text-sm transition-colors hover:border-mustard hover:text-mustard"
        >
          Escrever outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form action={handleSubmit} className="flex flex-col gap-5">
      <label className="block">
        <span className="font-mono text-xs uppercase tracking-[0.16em] text-cream/65">
          Nome
        </span>
        <input
          name="nome"
          type="text"
          required
          autoComplete="name"
          placeholder="Como posso te chamar?"
          className={fieldClass}
        />
      </label>

      <label className="block">
        <span className="font-mono text-xs uppercase tracking-[0.16em] text-cream/65">
          E-mail
        </span>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="voce@empresa.com"
          className={fieldClass}
        />
      </label>

      <label className="block">
        <span className="font-mono text-xs uppercase tracking-[0.16em] text-cream/65">
          Projeto
        </span>
        <textarea
          name="mensagem"
          required
          rows={4}
          placeholder="Conte um pouco sobre o que está complicado."
          className={`${fieldClass} resize-none`}
        />
      </label>

      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center gap-2 self-start rounded-full bg-mustard px-6 py-3 font-medium text-night transition-transform hover:-translate-y-0.5 active:translate-y-0"
      >
        Enviar mensagem
        <span aria-hidden="true">→</span>
      </button>
    </form>
  );
}
