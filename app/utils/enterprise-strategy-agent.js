import IconStrategyAgent from '../assets/images/icons/icon-strategy-agent.svg';
import IconSearchAgent from '../assets/images/icons/icon-search-agent.svg';
import IconDataAnalyst from '../assets/images/icons/icon-data-graph.svg';
import IconResearchAgent from '../assets/images/icons/icon-deep-research-agent.svg';
import IconBox from '../assets/images/icons/icon-box.svg';
import IconBubble from '../assets/images/icons/icon-bubble.svg';
import IconTriangle from '../assets/images/icons/icon-triangle.svg';

export default {
  heroSection: {
    label: 'Enterprise Strategy Agent',
    title:'The orchestrator of intelligent decisions',
    description: `A high-level AI agent that coordinates specialized sub-agents
      to tackle complex business challenges and deliver unified, data-backed strategies.`,
    leaderHeadline: `The Enterprise Strategy Agent (ESA) acts as the brain of your enterprise AI ecosystem.
      It intelligently manages a network of specialized sub-agents, from research and analytics to strategy,
      synthesizing their outputs into clear, actionable plans that move your business forward.`,
    headingMaxWidth: 920,
    leaderMaxWidth: 950
  },
  featuresSection: {
    label: 'Core Capabilities',
    title: 'Built for strategic intelligence',
    description: `ESA brings together data, insights, and strategic foresight into one
      orchestrated workflow — empowering leaders to make faster, more confident decisions.`,
    points: [
      {
        title: 'Deep Research Agent',
        description: `Gathers intelligence from internal systems, private repositories, and trusted external sources.`,
        image: IconResearchAgent
      },
      {
        title: 'Data Analyst Agent',
        description: `Interprets structured and unstructured data to uncover trends and insights.`,
        image: IconDataAnalyst
      },
      {
        title: 'Enterprise Search Agent',
        description: `Surfaces institutional knowledge instantly from intranets, SharePoint, and document systems.`,
        image: IconSearchAgent
      },
      {
        title: 'Strategy Agent',
        description: `Transforms research and analysis into well-defined, data-driven business strategies.`,
        image: IconStrategyAgent
      }
    ]
  },
  mediaData: {
    videos: {
      label: 'See ESA in Action',
      list: [
        {
          title: 'How ESA Synthesizes Research into Strategy',
          videoUrl: 'https://www.youtube.com/watch?v=D0UnqGm_miA'
        },
        {
          title: 'Orchestrating AI Sub-Agents for Complex Decisions',
          videoUrl: 'https://www.youtube.com/watch?v=D0UnqGm_miA'
        },
        {
          title: 'From Data to Direction: ESA in the Enterprise Flow',
          videoUrl: 'https://www.youtube.com/watch?v=D0UnqGm_miA'
        }
      ]
    },
    docs: {
      label: 'See ESA Documentation',
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
      label: 'See ESA Tutorials',
      list: [
        {
          title: 'How ESA Synthesizes Research into Strategy',
          videoUrl: 'https://www.youtube.com/watch?v=D0UnqGm_miA'
        },
        {
          title: 'Orchestrating AI Sub-Agents for Complex Decisions',
          videoUrl: 'https://www.youtube.com/watch?v=D0UnqGm_miA'
        },
        {
          title: 'From Data to Direction: ESA in the Enterprise Flow',
          videoUrl: 'https://www.youtube.com/watch?v=D0UnqGm_miA'
        }
      ]
    },
  },
  contactSection: {
    title: 'Orchestrate intelligent strategy with ESA'
  }
}