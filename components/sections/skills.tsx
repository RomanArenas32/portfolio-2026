"use client"

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Layers, Database, Cloud, Activity, TestTube2, Sparkles, Laptop } from 'lucide-react';
import { motion } from 'motion/react';

const skillsData = {
  languages: {
    icon: Code,
    items: ['JavaScript', 'TypeScript', 'Python']
  },
  frontend: {
    icon: Laptop,
    items: ['React', 'Vue.js', 'Next.js', 'React Native', 'Angular', 'Redux', 'Vuex', 'Webpack', 'Babel', 'SASS', 'LESS', 'Bootstrap', 'Tailwind CSS', 'Material-UI', 'Chart.js', 'Leaflet']
  },
  backend: {
    icon: Layers,
    items: ['Node.js', 'Express.js', 'NestJS', 'FastAPI', 'Django', 'RESTful APIs', 'GraphQL', 'Microservices', 'Serverless', 'API Gateway', 'WebSockets', 'MCP server']
  },
  database: {
    icon: Database,
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'DynamoDB', 'Firebase', 'Prisma', 'SQLAlchemy', 'Sequelize', 'TypeORM']
  },
  devops: {
    icon: Cloud,
    items: ['Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP', 'Jenkins', 'GitLab CI/CD', 'GitHub Actions', 'Terraform', 'Ansible', 'CloudFormation']
  },
  monitoring: {
    icon: Activity,
    items: ['Prometheus', 'Grafana', 'ELK Stack', 'CloudWatch', 'New Relic', 'Datadog', 'Splunk']
  },
  testing: {
    icon: TestTube2,
    items: ['Jest', 'Cypress', 'Selenium', 'Unit Testing', 'Integration Testing', 'E2E Testing', 'TDD']
  },
  emerging: {
    icon: Sparkles,
    items: ['AI/ML', 'Blockchain', 'Ethereum', 'Smart Contracts', 'IoT', 'Edge Computing']
  }
};

export function SkillsSection() {
  const t = useTranslations('skills');

  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center space-y-12">
          <motion.div
            className="space-y-4 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {t('title')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {Object.entries(skillsData).map(([key, { icon: Icon, items }], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
                whileHover={{ y: -4 }}
              >
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon className="h-5 w-5 text-primary" />
                      {t(`categories.${key}`)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
