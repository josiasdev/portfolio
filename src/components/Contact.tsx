import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Mail, Phone, Send, Loader2 } from 'lucide-react';
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

export function Contact() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'francisco.batista67@alu.ufc.br',
      href: 'mailto:francisco.batista67@alu.ufc.br',
    },
    {
      icon: Phone,
      label: t('contact.phone'),
      value: '+55 (85) 98231-7976',
      href: 'tel:+5585982317976',
    },
  ];

  const contactFormSchema = z.object({
    name: z
      .string()
      .min(2, { message: t('contact.form.error.min', { count: 2 }) }),
    email: z
      .string()
      .email({ message: t('contact.form.error.email') }),
    subject: z
      .string()
      .min(1, { message: t('contact.form.error.subject') }),
    message: z
      .string()
      .min(10, { message: t('contact.form.error.message', { count: 10 }) }),
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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(t('contact.form.error.submit'));
      }

      toast.success(t('contact.form.success'));
      form.reset();
    } catch (error) {
      console.error('Failed to send message:', error);
      toast.error(
        error instanceof Error ? error.message : t('contact.form.error.submit')
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold">
              {t('contact.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('contact.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16 pt-8">
            <Card className="p-6 md:p-8 bg-card/80 dark:bg-card/95 backdrop-blur-sm border-border/60 dark:border-border/40 animate-fade-in">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('contact.form.name')}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t('contact.form.name.placeholder')}
                            {...field}
                          />
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
                        <FormLabel>{t('contact.form.email')}</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder={t('contact.form.email.placeholder')}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('contact.form.subject')}</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue
                                placeholder={t(
                                  'contact.form.subject.placeholder'
                                )}
                              />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="general">
                              {t('contact.form.subject.general')}
                            </SelectItem>
                            <SelectItem value="project">
                              {t('contact.form.subject.project')}
                            </SelectItem>
                            <SelectItem value="feedback">
                              {t('contact.form.subject.feedback')}
                            </SelectItem>
                            <SelectItem value="other">
                              {t('contact.form.subject.other')}
                            </SelectItem>
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
                        <FormLabel>{t('contact.form.message')}</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={t('contact.form.message.placeholder')}
                            className="resize-none"
                            rows={5}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="mr-2 h-4 w-4" />
                    )}
                    {isSubmitting
                      ? t('contact.form.submitting')
                      : t('contact.form.submit')}
                  </Button>
                </form>
              </Form>
            </Card>

           
            <div className="space-y-4 md:pt-4">
              {contactInfo.map((item, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-subtle transition-all hover:-translate-y-1 animate-scale-in border-border/60 dark:border-border/40 bg-card/80 dark:bg-card/95 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <a
                    href={item.href}
                    className="flex items-center space-x-4 group"
                  >
                    <div className="p-3 rounded-lg bg-gradient-primary w-fit group-hover:scale-110 transition-transform">
                      <item.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-1">
                        {item.label}
                      </p>
                      <p className="font-medium text-sm group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
