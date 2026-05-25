import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Mail, Phone, Send, Loader2, Linkedin, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'josiasmartins098@gmail.com',
      href: 'mailto:josiasmartins098@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'josias-batista',
      href: 'https://linkedin.com/in/josias-batista',
    },
    {
      icon: Phone,
      label: t('contact.phone'),
      value: '+55 (85) 98231-7976',
      href: 'tel:+5585982317976',
    },
  ];

  const contactFormSchema = z.object({
    name: z.string().min(2, { message: t('contact.form.error.min', { count: 2 }) }),
    email: z.string().email({ message: t('contact.form.error.email') }),
    subject: z.string().min(1, { message: t('contact.form.error.subject') }),
    message: z.string().min(10, { message: t('contact.form.error.message', { count: 10 }) }),
  });

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    context: { t },
  });

  async function onSubmit(data: z.infer<typeof contactFormSchema>) {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error(t('contact.form.error.submit'));

      toast.success(t('contact.form.success'));
      form.reset();
    } catch (error) {
      console.error('Failed to send message:', error);
      toast.error(error instanceof Error ? error.message : t('contact.form.error.submit'));
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/3 left-0 w-72 h-72 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-serif">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Entre em contato direto</h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target={item.label === 'LinkedIn' ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-5 rounded-2xl border border-border/40 bg-card/30 hover:bg-card/60 dark:bg-card/10 dark:hover:bg-card/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-xl bg-background/50 border border-border/50 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors duration-300">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-0.5">
                        {item.label}
                      </p>
                      <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <Card className="p-6 md:p-8 rounded-3xl bg-card/40 dark:bg-card/20 backdrop-blur-md border-border/40 animate-fade-in shadow-xl hover:border-border/80 transition-colors">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground/80">{t('contact.form.name')}</FormLabel>
                          <FormControl>
                            <Input placeholder={t('contact.form.name.placeholder')} className="bg-background/50" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground/80">{t('contact.form.email')}</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder={t('contact.form.email.placeholder')} className="bg-background/50" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/80">{t('contact.form.subject')}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-background/50">
                              <SelectValue placeholder={t('contact.form.subject.placeholder')} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="general">{t('contact.form.subject.general')}</SelectItem>
                            <SelectItem value="project">{t('contact.form.subject.project')}</SelectItem>
                            <SelectItem value="feedback">{t('contact.form.subject.feedback')}</SelectItem>
                            <SelectItem value="other">{t('contact.form.subject.other')}</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/80">{t('contact.form.message')}</FormLabel>
                        <FormControl>
                          <Textarea placeholder={t('contact.form.message.placeholder')} className="resize-none bg-background/50 min-h-[120px]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full h-12 text-sm font-bold tracking-wide" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    ) : (
                      <Send className="mr-2 h-5 w-5" />
                    )}
                    {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
                  </Button>
                </form>
              </Form>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;