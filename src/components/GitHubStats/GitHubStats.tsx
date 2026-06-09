import { useEffect, useState } from "react";
import { Github, Star, GitFork, BookOpen, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type GitHubData = {
  public_repos: number;
  followers: number;
  following: number;
  total_stars: number;
  top_languages: { name: string; percentage: number; color: string }[];
};

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript:  '#3178c6',
  JavaScript:  '#f7df1e',
  Java:        '#b07219',
  Python:      '#3572A5',
  Rust:        '#dea584',
  HTML:        '#e34c26',
  CSS:         '#563d7c',
  'C#':        '#239120',
  Go:          '#00ADD8',
  Kotlin:      '#A97BFF',
};

// Static fallback data — always shown while API loads or if it fails
const FALLBACK: GitHubData = {
  public_repos: 75,
  followers: 34,
  following: 116,
  total_stars: 12,
  top_languages: [
    { name: 'TypeScript', percentage: 22, color: '#3178c6' },
    { name: 'Java',       percentage: 17, color: '#b07219' },
    { name: 'JavaScript', percentage: 16, color: '#f7df1e' },
    { name: 'Python',     percentage: 11, color: '#3572A5' },
    { name: 'HTML',       percentage: 8,  color: '#e34c26' },
  ],
};

const GitHubStats = () => {
  const { t } = useLanguage();
  const [data, setData] = useState<GitHubData>(FALLBACK);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = import.meta.env.VITE_GITHUB_TOKEN;
        const headers = token ? { Authorization: `Bearer ${token}` } : undefined;

        const [profileRes, reposRes] = await Promise.all([
          fetch('https://api.github.com/users/josiasdev', { headers }),
          fetch('https://api.github.com/users/josiasdev/repos?per_page=100&sort=updated', { headers }),
        ]);

        if (!profileRes.ok) return; // silently keep fallback

        const profile = await profileRes.json();
        const repos = await reposRes.json();

        if (!Array.isArray(repos)) return;

        const total_stars = repos.reduce(
          (sum: number, r: { stargazers_count: number }) => sum + r.stargazers_count,
          0
        );

        const langCount: Record<string, number> = {};
        repos.forEach((repo: { language: string | null }) => {
          if (repo.language) langCount[repo.language] = (langCount[repo.language] || 0) + 1;
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
          followers:    profile.followers,
          following:    profile.following,
          total_stars,
          top_languages,
        });
        setLive(true);
      } catch {
        // Keep fallback silently
      }
    };

    fetchData();
  }, []);

  const stats = [
    { label: t('github.repos'),     value: data.public_repos, icon: BookOpen },
    { label: t('github.stars'),     value: data.total_stars,  icon: Star     },
    { label: t('github.followers'), value: data.followers,    icon: Github   },
    { label: t('github.following'), value: data.following,    icon: GitFork  },
  ];

  return (
    <section id="github-stats" className="py-16 relative overflow-hidden bg-muted/10">
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-primary/10 border border-primary/20">
              <Github className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold font-serif">{t('github.title')}</h2>
              <p className="text-xs text-muted-foreground">
                {live ? t('github.subtitle') : t('github.fallback')}
              </p>
            </div>
          </div>
          <a
            href="https://github.com/josiasdev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:text-primary/80 transition-colors self-start sm:self-auto border border-primary/20 bg-primary/5 hover:bg-primary/10 px-4 py-2 rounded-full"
          >
            <Github className="h-3.5 w-3.5" />
            {t('github.viewProfile')}
            <ExternalLink className="h-3 w-3 opacity-60" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Stat counters */}
          <div className="lg:col-span-1 grid grid-cols-2 gap-4">
            {stats.map(({ label, value, icon: Icon }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center gap-2 p-5 rounded-3xl border border-border/40 bg-card/30 dark:bg-card/10 hover:bg-card/60 dark:hover:bg-card/20 hover:border-primary/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="p-2 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <span className="text-2xl font-bold tabular-nums">{value}</span>
                <span className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wide text-center">{label}</span>
              </div>
            ))}
          </div>

          {/* Top Languages */}
          <div className="lg:col-span-2 p-6 md:p-8 rounded-3xl border border-border/40 bg-card/30 dark:bg-card/10 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-6">
              {t('github.languages')}
            </p>
            <div className="space-y-5">
              {data.top_languages.map(({ name, percentage, color }) => (
                <div key={name} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2.5">
                      <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
                      <span className="font-semibold">{name}</span>
                    </div>
                    <span className="text-muted-foreground tabular-nums text-xs font-medium">{percentage}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary/60 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{ width: `${percentage}%`, backgroundColor: color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
