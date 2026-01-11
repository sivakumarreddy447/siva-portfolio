'use client'

import { skills } from '@/data/profile'
import { 
  Code2, 
  Server, 
  Cloud, 
  Database, 
  Brain, 
  Layout, 
  Activity, 
  Cpu 
} from 'lucide-react'

// Skill icon mapping - using simple styled divs with text as fallback
const SkillIcon = ({ icon, name }: { icon: string; name: string }) => {
  // Color mappings for different skills
  const iconColors: Record<string, string> = {
    go: 'text-cyan-500',
    python: 'text-blue-500',
    javascript: 'text-yellow-500',
    java: 'text-red-500',
    nodejs: 'text-green-600',
    django: 'text-green-800',
    springboot: 'text-green-500',
    kafka: 'text-gray-800',
    redis: 'text-red-600',
    git: 'text-orange-600',
    docker: 'text-blue-500',
    aws: 'text-orange-500',
    kubernetes: 'text-blue-600',
    terraform: 'text-purple-600',
    jenkins: 'text-red-500',
    mongodb: 'text-green-500',
    postgresql: 'text-blue-600',
    mysql: 'text-blue-800',
    dynamodb: 'text-blue-500',
    numpy: 'text-blue-500',
    pandas: 'text-purple-600',
    sklearn: 'text-orange-500',
    tensorflow: 'text-orange-500',
    html: 'text-orange-600',
    css: 'text-blue-500',
    react: 'text-cyan-400',
    nextjs: 'text-gray-900',
    grafana: 'text-orange-500',
    newrelic: 'text-green-600',
    datadog: 'text-purple-500',
    cloudwatch: 'text-orange-500',
    spark: 'text-orange-500',
    airflow: 'text-teal-500',
    hadoop: 'text-yellow-600',
    batch: 'text-indigo-600',
  }

  // Icon abbreviations
  const iconText: Record<string, string> = {
    go: 'Go',
    python: 'Py',
    javascript: 'JS',
    java: 'Ja',
    nodejs: 'No',
    django: 'Dj',
    springboot: 'Sb',
    kafka: 'Ka',
    redis: 'Re',
    git: 'Gi',
    docker: 'Do',
    aws: 'AW',
    kubernetes: 'K8',
    terraform: 'Tf',
    jenkins: 'Jk',
    mongodb: 'Mo',
    postgresql: 'Pg',
    mysql: 'My',
    dynamodb: 'Dy',
    numpy: 'Np',
    pandas: 'Pd',
    sklearn: 'Sk',
    tensorflow: 'Ts',
    html: 'Ht',
    css: 'Cs',
    react: 'Re',
    nextjs: 'Nx',
    grafana: 'Gr',
    newrelic: 'Nr',
    datadog: 'Dd',
    cloudwatch: 'Cw',
    spark: 'Sp',
    airflow: 'Af',
    hadoop: 'Hd',
    batch: 'Bp',
  }

  return (
    <div className={`w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center font-bold text-lg ${iconColors[icon] || 'text-gray-600'}`}>
      {iconText[icon] || icon.substring(0, 2).toUpperCase()}
    </div>
  )
}

type SkillCategory = {
  title: string
  icon: React.ReactNode
  items: { name: string; icon: string }[]
}

export default function Skills() {
  const categories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      icon: <Code2 className="w-5 h-5" />,
      items: skills.programmingLanguages,
    },
    {
      title: 'Backend',
      icon: <Server className="w-5 h-5" />,
      items: skills.backend,
    },
    {
      title: 'Cloud',
      icon: <Cloud className="w-5 h-5" />,
      items: skills.cloud,
    },
    {
      title: 'Databases',
      icon: <Database className="w-5 h-5" />,
      items: skills.databases,
    },
    {
      title: 'Machine Learning',
      icon: <Brain className="w-5 h-5" />,
      items: skills.machineLearning,
    },
    {
      title: 'Frontend',
      icon: <Layout className="w-5 h-5" />,
      items: skills.frontend,
    },
    {
      title: 'Monitoring',
      icon: <Activity className="w-5 h-5" />,
      items: skills.monitoring,
    },
    {
      title: 'Data Engineering',
      icon: <Cpu className="w-5 h-5" />,
      items: skills.dataEngineering,
    },
  ]

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {categories.map((category, index) => (
            <div key={category.title} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                {category.icon}
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-4">
                {category.items.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <SkillIcon icon={skill.icon} name={skill.name} />
                    <span className="text-sm text-gray-600 font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
