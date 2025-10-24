import IconInfra from '../assets/images/icons/icon-enterprise-infra.svg';
import IconEcosystem from '../assets/images/icons/icon-ecosystem.svg';
import IconLifecycle from '../assets/images/icons/icon-lifecycle.svg';
import IconAutomation from '../assets/images/icons/icon-code-automation.svg';
import IconCollab from '../assets/images/icons/icon-collaboration.svg';
import IconBox from '../assets/images/icons/icon-box.svg';
import IconBubble from '../assets/images/icons/icon-bubble.svg';
import IconTriangle from '../assets/images/icons/icon-triangle.svg';

export default {
  heroSection: {
    label: 'Insights Studio',
    title:'The AI-Native Platform for Enterprise Intelligence',
    description: `Build, automate, and scale data-driven decisions with a unified
      no/low-code environment for every team, from business users to data scientists.`,
    leaderHeadline: `Insights Studio is a full-stack AI platform that turns complexity into clarity.
      It empowers enterprises to automate data workflows, build AI apps,
      and accelerate analytics - all in one collaborative environment that bridges business,
      engineering, and data science.`,
    headingMaxWidth: 920,
    leaderMaxWidth: 940
  },
  featuresSection: {
    label: 'Core Capabilities',
    title: 'Built for Intelligent Enterprises',
    description: `Insights Studio helps organizations move beyond dashboards
      to a true operating system for intelligence - enabling faster go-to-market,
      lower costs, and scalable innovation through automation, governance, and collaboration.`,
    points: [
      {
        title: 'No/Low-Code Data Automation',
        description: `Design and deploy data and AI workflows in hours, not months.`,
        image: IconAutomation
      },
      {
        title: 'Unified Collaboration',
        description: `Connect business users, analysts, and engineers on a single platform.`,
        image: IconCollab
      },
      {
        title: 'AI Lifecycle Management',
        description: `Train, validate, deploy, and monitor models with full governance.`,
        image: IconLifecycle
      },
      {
        title: 'Enterprise-Grade Infrastructure',
        description: `Secure, compliant, and scalable across clouds or on-prem.`,
        image: IconInfra
      },
      {
        title: 'Open Ecosystem',
        description: `Integrate easily with APIs, SDKs, and open-source frameworks.`,
        image: IconEcosystem
      }
    ]
  },
  mediaData: {
    videos: {
      label: 'See Insights Studio in Action',
      list: [
        {
          title: 'Building a Predictive Model in Minutes',
          videoUrl: 'https://www.youtube.com/watch?v=D0UnqGm_miA'
        },
        {
          title: 'Automating Analytics Pipelines with No Code',
          videoUrl: 'https://www.youtube.com/watch?v=D0UnqGm_miA'
        },
        {
          title: 'From Data Chaos to Enterprise Intelligence',
          videoUrl: 'https://www.youtube.com/watch?v=D0UnqGm_miA'
        }
      ]
    },
    docs: {
      label: 'See Insights Studio Documentation',
      list: [
        {
          title: 'Automating Month-End Close with Agents',
          url: '/sample-pdf.pdf',
          image: IconBubble,
        },
        {
          title: 'Automating Analytics Pipelines with No Code',
          url: '/sample-pdf.pdf',
          image: IconTriangle,
        },
        {
          title: 'From Data Chaos to Enterprise Intelligence',
          url: '/sample-pdf.pdf',
          image: IconBox,
        },
      ]
    },
    tutorials: {
      label: 'See Insights Studio Tutorials',
      list: [
        {
          title: 'Building a Predictive Model in Minutes',
          videoUrl: 'https://www.youtube.com/watch?v=D0UnqGm_miA'
        },
        {
          title: 'Automating Analytics Pipelines with No Code',
          videoUrl: 'https://www.youtube.com/watch?v=D0UnqGm_miA'
        },
        {
          title: 'From Data Chaos to Enterprise Intelligence',
          videoUrl: 'https://www.youtube.com/watch?v=D0UnqGm_miA'
        }
      ]
    },
  },
  contactSection: {
    title: 'Power Enterprise Intelligence with Insights Studio'
  }
}