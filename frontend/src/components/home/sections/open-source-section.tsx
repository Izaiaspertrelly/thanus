import { SectionHeader } from "@/components/home/section-header";
import { siteConfig } from "@/lib/home";
import { Github } from "lucide-react";
import Link from "next/link";

export function OpenSourceSection() {
  return (
    <section
      id="open-source"
      className="flex flex-col items-center justify-center w-full relative pb-18"
    >
      <div className="w-full max-w-6xl mx-auto px-6">
        <SectionHeader>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">
            100% Código Aberto
          </h2>
          <p className="text-muted-foreground text-center text-balance font-medium">
            AgentZERO é totalmente de código aberto. Junte-se à nossa comunidade e ajude a moldar o futuro da IA.
          </p>
        </SectionHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-12">
          <div className="rounded-xl bg-[#F3F4F6] dark:bg-[#F9FAFB]/[0.02] border border-border p-6">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2 text-primary font-medium">
                <Github className="h-5 w-5" />
                <span>inventuai/AgentZERO</span>
              </div>
              <div className="relative">
                <h3 className="text-2xl font-semibold tracking-tight">
                  O Agente de IA Generalista
                </h3>
                <p className="text-muted-foreground mt-2">
                  Explore, contribua ou faça um fork do nosso repositório. AgentZERO é construído com transparência e colaboração em seu núcleo.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-secondary/10 border-secondary/20 text-secondary">
                  TypeScript
                </span>
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-secondary/10 border-secondary/20 text-secondary">
                  Python
                </span>
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-secondary/10 border-secondary/20 text-secondary">
                  Apache 2.0 License
                </span>
              </div>
              <Link 
                href="https://github.com/AgentZero-ai/AgentZERO"
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex h-10 items-center justify-center gap-2 text-sm font-medium tracking-wide rounded-full text-primary-foreground dark:text-black px-6 shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)] bg-primary dark:bg-white hover:bg-primary/90 dark:hover:bg-white/90 transition-all duration-200 w-fit"
              >
                <span>Ver no GitHub</span>
                <span className="inline-flex items-center justify-center size-5 rounded-full bg-white/20 dark:bg-black/10 group-hover:bg-white/30 dark:group-hover:bg-black/20 transition-colors duration-200">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary-foreground dark:text-black">
                    <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
          
          <div className="rounded-xl bg-[#F3F4F6] dark:bg-[#F9FAFB]/[0.02] border border-border p-6">
            <div className="flex flex-col gap-6">
              <h3 className="text-xl md:text-2xl font-medium tracking-tight">
                Transparência & Confiança
              </h3>
              <p className="text-muted-foreground">
                Acreditamos que a IA deve ser aberta e acessível a todos. Nossa abordagem de código aberto garante responsabilidade, inovação e colaboração comunitária.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-secondary/10 p-2 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-secondary">
                      <path d="M9.75 12.75L11.25 14.25L14.25 9.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C16.0041 4.75 19.25 7.99594 19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Transparência</h4>
                    <p className="text-muted-foreground text-sm">Código-fonte totalmente auditável</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-secondary/10 p-2 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-secondary">
                      <path d="M9.75 12.75L11.25 14.25L14.25 9.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C16.0041 4.75 19.25 7.99594 19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Comunidade</h4>
                    <p className="text-muted-foreground text-sm">Junte-se aos nossos desenvolvedores</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-secondary/10 p-2 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-secondary">
                      <path d="M9.75 12.75L11.25 14.25L14.25 9.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C16.0041 4.75 19.25 7.99594 19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Apache 2.0</h4>
                    <p className="text-muted-foreground text-sm">Livre para usar e modificar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
