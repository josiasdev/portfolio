import { useEffect, useState } from "react";
import { Github, Star, GitFork, BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type GitHubData = {
  public_repos: number;
  followers: number;
  following: number;
  total_stars: number;
  top_languages: { name: string; percentage: number; color: string }[];
};

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f7df1e',
  Java: '#b07219',
  Python: '#3572A5',
  Rust: '#dea584',
  HTML: '#e34c26',
  CSS: '#563d7c',
  'C#': '#239120',
  Go: '#00ADD8',
  Kotlin: '#A97BFF',
};

const GitHubStats = () => {
  const { t } = useLanguage();
  const [data, setData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user profile
        const profileRes = await fetch('https://api.github.com/users/josiasdev');
        const profile = await profileRes.json();

        // Fetch all repos to calculate stars and languages
        const reposRes = await fetch('https://api.github.com/users/josiasdev/repos?per_page=100&sort=updated');
        const repos = await reposRes.json();

        if (!Array.isArray(repos)) throw new Error('Rate limit');

        const total_stars = repos.reduce((sum: number, r: { stargazers_count: number }) => sum + r.stargazers_count, 0);

        // Aggregate language bytes from each repo's language field
        const langCount: Record<string, number> = {};
        repos.forEach((repo: { language: string | null }) => {
          if (repo.language) {
            langCount[repo.language] = (langCount[repo.language] || 0) + 1;
          }
        });

        const totalLangRepos = Object.values(langCount).reduce((a, b) => a + b, 0);
        const top_languages = Object.entries(langCount)
          .sort(([, a], [, b]) => b - a)
          .slice(0, 5)
          .map(([name, count]) => ({
            name,
            percentage: Math.round((count / totalLangRepos) * 100),
            color: LANGUAGE_COLORS[name] || '#6e7681',
          }));

        setData({
          public_repos: profile.public_repos,
          followers: profile.followers,
          following: profile.following,
          total_stars,
          top_languages,
        });
      } catch {
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (!loading && !data) return null;

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col items-center gap-2 mb-10 animate-fade-in">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-card/50 border border-border/40 backdrop-blur-sm">
              <Github className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-2xl font-bold font-serif">{t('github.title')}</h3>
          </div>
          <p className="text-sm text-muted-foreground">{t('github.subtitle')}</p>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-pulse">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-24 rounded-3xl bg-card/30 border border-border/40" />
            ))}
          </div>
        ) : data ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in">
            {/* Stats pills */}
            <div className="lg:col-span-1 grid grid-cols-2 sm:grid-cols-2 gap-4">
              {[
                { label: t('github.repos'), value: data.public_repos, icon: BookOpen },
                { label: t('github.stars'), value: data.total_stars, icon: Star },
                { label: t('github.followers'), value: data.followers, icon: Github },
                { label: t('github.following'), value: data.following, icon: GitFork },
              ].map(({ label, value, icon: Icon }) => (
                <div
                  key={label}
                  className="flex flex-col items-center justify-center gap-1 p-5 rounded-3xl border border-border/40 bg-card/30 dark:bg-card/10 hover:bg-card/60 dark:hover:bg-card/20 hover:border-primary/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 group"
                >
                  <Icon className="h-4 w-4 text-primary mb-1 group-hover:scale-110 transition-transform" />
                  <span className="text-2xl font-bold tabular-nums">{value}</span>
                  <span className="text-[11px] text-muted-foreground font-medium text-center">{label}</span>
                </div>
              ))}
            </div>

            {/* Top Languages */}
            <div className="lg:col-span-2 p-6 md:p-8 rounded-3xl border border-border/40 bg-card/30 dark:bg-card/10 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-5">{t('github.languages')}</p>
              <div className="space-y-4">
                {data.top_languages.map(({ name, percentage, color }) => (
                  <div key={name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }} />
                        <span className="font-medium">{name}</span>
                      </div>
                      <span className="text-muted-foreground tabular-nums">{percentage}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-secondary/50 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{ width: `${percentage}%`, backgroundColor: color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="https://github.com/josiasdev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                <Github className="h-3.5 w-3.5" />
                {t('github.viewProfile')}
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default GitHubStats;
