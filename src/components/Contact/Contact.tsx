import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Mail, Phone, Send, Loader2, Linkedin, ArrowUpRight } from 'lucide-react';
import { toast } from 'sonner';
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
  const { t, language } = useLanguage();
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
        body: JSON.stringify({ ...data, language }),
      });

      if (!response.ok) {
        let errorMsg = t('contact.form.error.submit');
        try {
          const errData = await response.json();
          if (errData.details) errorMsg = `${errData.error}: ${errData.details}`;
          else if (errData.error) errorMsg = errData.error;
        } catch (_) {
          // Fallback to default message if JSON parsing fails
        }
        throw new Error(errorMsg);
      }

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
    <section id="contact" className="scroll-mt-16 space-y-6">
      <div className="flex items-center gap-3">
        <h2 className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
          09. {t('contact.title')}
        </h2>
        <div className="h-px bg-border flex-1 max-w-xs" />
      </div>

      <p className="text-xs text-muted-foreground leading-relaxed">
        {t('contact.description')}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Contact Links */}
        <div className="lg:col-span-5 space-y-3">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target={item.label === 'LinkedIn' ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="group p-4 rounded border border-border/60 bg-card/30 hover:border-primary/50 transition-colors flex items-center justify-between"
            >
              <div className="flex items-center space-x-3">
                <item.icon className="h-4 w-4 text-primary flex-shrink-0" />
                <div>
                  <p className="text-[10px] font-mono text-muted-foreground uppercase">
                    {item.label}
                  </p>
                  <p className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors">
                    {item.value}
                  </p>
                </div>
              </div>
              <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 p-5 rounded border border-border/60 bg-card/30 space-y-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 text-xs font-sans">
              <div className="grid grid-cols-1 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-mono text-muted-foreground">{t('contact.form.name')}</FormLabel>
                      <FormControl>
                        <Input placeholder={t('contact.form.name.placeholder')} className="h-10 text-xs bg-background/50 rounded" {...field} />
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
                      <FormLabel className="text-xs font-mono text-muted-foreground">{t('contact.form.email')}</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder={t('contact.form.email.placeholder')} className="h-10 text-xs bg-background/50 rounded" {...field} />
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
                    <FormLabel className="text-xs font-mono text-muted-foreground">{t('contact.form.subject')}</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-9 text-xs bg-background/50 rounded">
                          <SelectValue placeholder={t('contact.form.subject.placeholder')} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="general" className="text-xs">{t('contact.form.subject.general')}</SelectItem>
                        <SelectItem value="project" className="text-xs">{t('contact.form.subject.project')}</SelectItem>
                        <SelectItem value="feedback" className="text-xs">{t('contact.form.subject.feedback')}</SelectItem>
                        <SelectItem value="other" className="text-xs">{t('contact.form.subject.other')}</SelectItem>
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
                    <FormLabel className="text-xs font-mono text-muted-foreground">{t('contact.form.message')}</FormLabel>
                    <FormControl>
                      <Textarea placeholder={t('contact.form.message.placeholder')} className="resize-none bg-background/50 min-h-[90px] text-xs rounded" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full h-9 text-xs font-mono font-semibold bg-primary text-primary-foreground hover:bg-primary/90 rounded" disabled={isSubmitting}>
                {isSubmitting ? (
                  <Loader2 className="mr-2 h-3.5 w-3.5 animate-spin" />
                ) : (
                  <Send className="mr-2 h-3.5 w-3.5" />
                )}
                {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Contact;