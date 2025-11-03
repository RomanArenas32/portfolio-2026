"use client"

import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';

export function AboutSection() {
  const t = useTranslations('about');

  const stats = [
    { value: '6+', label: t('yearsExperience') },
    { value: '15+', label: t('projectsCompleted') },
    { value: '30+', label: t('technologiesMastered') },
    { value: '200+', label: t('studentsHelped') },
  ];

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {t('title')}
            </h2>
          </div>

          <p className="text-lg text-muted-foreground max-w-3xl text-center leading-relaxed">
            {t('summary')}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl mt-12">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6 pb-6">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
