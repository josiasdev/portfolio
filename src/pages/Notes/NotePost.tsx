import { useParams, Link } from "react-router-dom";
import { lazy, Suspense, useMemo } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";
import { Helmet } from "react-helmet-async";

// Carrega os módulos lazy
const modules = import.meta.glob('../../content/notes/*.mdx');
const eagerModules = import.meta.glob('../../content/notes/*.mdx', { eager: true });

const NotePost = () => {
  useSmoothScroll();
  const { slug } = useParams();

  const MDXComponent = useMemo(() => {
    const loader = modules[`../../content/notes/${slug}.mdx`];
    if (!loader) return null;
    return lazy(loader as any);
  }, [slug]);

  const frontmatter = useMemo(() => {
    const mod: any = eagerModules[`../../content/notes/${slug}.mdx`];
    return mod?.frontmatter;
  }, [slug]);

  if (!MDXComponent || !frontmatter) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Nota não encontrada</h1>
        <Link to="/notes" className="text-primary hover:underline">Voltar para notas</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Helmet>
        <title>{frontmatter.title} | Josias Batista</title>
        <meta name="description" content={frontmatter.description} />
      </Helmet>
      
      <Header />
      <main className="flex-1 pt-32 pb-24">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link 
            to="/notes" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para notas
          </Link>

          <header className="mb-12 border-b border-border/40 pb-8">
            <h1 className="text-3xl md:text-5xl font-bold font-serif mb-6 leading-tight">
              {frontmatter.title}
            </h1>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
                <Calendar className="w-4 h-4" />
                {new Date(frontmatter.date).toLocaleDateString('pt-BR')}
              </div>
              <div className="flex gap-2">
                {frontmatter.tags?.map((tag: string) => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-serif prose-a:text-primary hover:prose-a:text-primary/80 prose-pre:bg-zinc-950 prose-pre:border prose-pre:border-zinc-800">
            <Suspense fallback={<div className="py-20 flex justify-center"><Spinner /></div>}>
              <MDXComponent />
            </Suspense>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default NotePost;
