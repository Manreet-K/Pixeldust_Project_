import IconGraph from '../assets/images/icons/icon-graph-2.svg';
import IconDrumTick from '../assets/images/icons/icon-drum-tick.svg';
import IconCubes from '../assets/images/icons/icon-cubes.svg';
import IconDrums from '../assets/images/icons/icon-drums.svg';
import IconBox from '../assets/images/icons/icon-box.svg';
import IconBubble from '../assets/images/icons/icon-bubble.svg';
import IconTriangle from '../assets/images/icons/icon-triangle.svg';

export default {
  heroSection: {
    label: 'Meeru.ai',
    title:'The AI Operating system for the CFO',
    description: `Transform finance from a reactive function into a proactive,
      data-driven powerhouse. Meeru.ai connects your ERP, data platforms,
      and analytics tools to automate workflows and deliver real-time insights.`,
    leaderHeadline: `Meeru.ai is a specialized AI platform built for the Office of the CFO.
      It goes beyond dashboards - orchestrating no-code, agent-driven workflows that streamline accounting,
      ensure data integrity, and turn financial data into strategic advantage.`
  },
  featuresSection: {
    label: 'Key Features',
    title: 'Built for the modern finance leader',
    description: `From automation to auditability, Meeru.ai empowers CFOs with intelligent tools
      to simplify financial operations, maintain transparency, and make faster, data-driven decisions.`,
    points: [
      {
        title: 'Workflow & Task Automation',
        description: `Automate journal entries, reconciliations, and month-end close through intelligent, no-code agents.`,
        image: IconCubes
      },
      {
        title: 'Conversational Intelligence',
        description: `Ask complex financial questions in plain English and get instant, auditable answers.`,
        image: IconDrums
      },
      {
        title: 'Data Integrity & Auditability',
        description: `Maintain transparency with end-to-end audit trails for every financial action.`,
        image: IconDrumTick
      },
      {
        title: 'Real-Time Insight',
        description: `Harmonize data across systems for always-current financial visibility.`,
        image: IconGraph
      }
    ]
  },
  mediaData: {
    videos: {
      label: 'See Meeru.ai in Action',
      list: [
        {
          title: 'Automating Month-End Close with Agents',
          videoUrl: 'https://www.youtube.com/watch?v=D0UnqGm_miA'
        },
        {
          title: 'Conversational Finance: How CFOs Ask, Meeru Answers',
          videoUrl: 'https://www.youtube.com/watch?v=D0UnqGm_miA'
        },
        {
          title: 'Integrating Meeru.ai with Your ERP in Minutes',
          videoUrl: 'https://www.youtube.com/watch?v=D0UnqGm_miA'
        }
      ]
    },
    docs: {
      label: 'See Meeru.ai Documentation',
      list: [
        {
          title: 'Automating Month-End Close with Agents',
          videoUrl: '/sample-pdf.pdf',
          image: IconBubble,
        },
        {
          title: 'Automating Analytics Pipelines with No Code',
          videoUrl: '/sample-pdf.pdf',
          image: IconTriangle,
        },
        {
          title: 'From Data Chaos to Enterprise Intelligence',
          videoUrl: '/sample-pdf.pdf',
          image: IconBox,
        },
      ]
    },
    tutorials: {
      label: 'See Meeru.ai Tutorials',
      list: [
        {
          title: 'Automating Month-End Close with Agents',
          videoUrl: 'https://www.youtube.com/watch?v=D0UnqGm_miA'
        },
        {
          title: 'Conversational Finance: How CFOs Ask, Meeru Answers',
          videoUrl: 'https://www.youtube.com/watch?v=D0UnqGm_miA'
        },
        {
          title: 'Integrating Meeru.ai with Your ERP in Minutes',
          videoUrl: 'https://www.youtube.com/watch?v=D0UnqGm_miA'
        }
      ]
    },
  },
  contactSection: {
    title: 'Experience the future of finance automation'
  }
}