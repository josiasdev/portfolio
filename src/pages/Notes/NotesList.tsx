import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Link } from "react-router-dom";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { FileText, Calendar, Tag } from "lucide-react";

// @ts-ignore
const modules = import.meta.glob('../../content/notes/*.mdx', { eager: true });

const notes = Object.entries(modules).map(([path, module]: [string, any]) => {
  const slug = path.split('/').pop()?.replace('.mdx', '');
  return {
    slug,
    ...module.frontmatter,
  };
}).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const NotesList = () => {
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-1 pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 flex items-center gap-3">
              <FileText className="w-10 h-10 text-primary" />
              Engineering Notes
            </h1>
            <p className="text-muted-foreground text-lg">
              Um espaço para registrar meus estudos, desafios arquiteturais e soluções técnicas em Back-end e Web3.
            </p>
          </div>

          <div className="grid gap-6">
            {notes.map((note) => (
              <Link 
                key={note.slug} 
                to={`/notes/${note.slug}`}
                className="group p-6 rounded-2xl border border-border/40 bg-card/30 hover:bg-card/60 hover:border-primary/40 backdrop-blur-sm transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="space-y-3">
                    <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {note.title}
                    </h2>
                    <p className="text-muted-foreground line-clamp-2">
                      {note.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      {note.tags?.map((tag: string) => (
                        <span key={tag} className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono shrink-0 pt-1 md:pt-0">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(note.date).toLocaleDateString('pt-BR')}
                  </div>
                </div>
              </Link>
            ))}
            {notes.length === 0 && (
              <p className="text-muted-foreground italic">Nenhuma nota publicada ainda.</p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotesList;
