import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-5 pt-6 pb-10 sm:px-8">
      <div className="flex flex-col gap-3 border-t border-line pt-8 text-sm text-muted md:flex-row md:items-center md:justify-between md:gap-8">
        <p>© 2026 {profile.name}. Feito com Next.js, café e teimosia.</p>
        <p>
          Pessoa, empresas, números e depoimentos desta página são fictícios.
        </p>
        <a
          href="#topo"
          className="whitespace-nowrap transition-colors hover:text-ink"
        >
          Voltar ao topo ↑
        </a>
      </div>
    </footer>
  );
}
