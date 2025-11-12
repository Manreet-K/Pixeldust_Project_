import IconLifecycle from '../assets/images/icons/icon-lifecycle.svg';
import IconAutomation from '../assets/images/icons/icon-code-automation.svg';
import IconCollab from '../assets/images/icons/icon-collaboration.svg';
import IconCubes from '../assets/images/icons/icon-cubes.svg';
import IconBox from '../assets/images/icons/icon-box.svg';
import IconBubble from '../assets/images/icons/icon-bubble.svg';
import IconTriangle from '../assets/images/icons/icon-triangle.svg';

export default [
  {
    _component: 'heroSection',
    label: 'Data Analyst Agent',
    title:'Turning data into clarity',
    description: `A versatile AI analyst that transforms raw numbers and
      unstructured text into meaningful, actionable insights for smarter decisions.`,
    leaderHeadline: `The Data Analyst Agent bridges analytics and storytelling.
      It works across structured and unstructured data—connecting patterns, uncovering sentiment,
      and delivering insights that shape strategy and impact.`,
    headingMaxWidth: 920,
    leaderMaxWidth: 955
  },
  {
    _component: 'featuresSection',
    label: 'Core Capabilities',
    title: 'Built for insightful intelligence',
    description: `From spreadsheets to reports, this agent interprets
      data in every form to reveal what truly drives performance.`,
    points: [
      {
        title: 'Structured Data Analysis',
        description: `Detects patterns and trends from databases, CSVs, and spreadsheets.`,
        image: IconAutomation
      },
      {
        title: 'Unstructured Data Understanding',
        description: `Extracts meaning from reports, emails, and communications.`,
        image: IconCollab
      },
      {
        title: 'Contextual Storytelling',
        description: `Translates data into clear narratives that support business strategy.`,
        image: IconLifecycle
      },
      {
        title: 'Cross-Source Intelligence',
        description: `Merges structured and unstructured inputs for holistic insight.`,
        image: IconCubes
      }
    ]
  },
  {
    _component: 'mediaData',
    videos: {
      label: 'See the Data Analyst Agent in Action',
      list: [
        {
          title: 'From Raw Data to Strategic Insight',
          videoUrl: 'https://www.youtube.com/watch?v=D0UnqGm_miA'
        },
        {
          title: 'Analyzing Unstructured Reports at Scale',
          videoUrl: 'https://www.youtube.com/watch?v=D0UnqGm_miA'
        },
        {
          title: 'Combining Data Streams for Deeper Understanding',
          videoUrl: 'https://www.youtube.com/watch?v=D0UnqGm_miA'
        }
      ]
    },
    docs: {
      label: 'See Data Analyst Agent Documentation',
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
      label: 'See Data Analyst Agent Tutorials',
      list: [
        {
          title: 'From Raw Data to Strategic Insight',
          videoUrl: 'https://www.youtube.com/watch?v=D0UnqGm_miA'
        },
        {
          title: 'Analyzing Unstructured Reports at Scale',
          videoUrl: 'https://www.youtube.com/watch?v=D0UnqGm_miA'
        },
        {
          title: 'Combining Data Streams for Deeper Understanding',
          videoUrl: 'https://www.youtube.com/watch?v=D0UnqGm_miA'
        }
      ]
    },
  },
  {
    _component: 'contactSection',
    title: 'Transform datasets into decisions with the Analyst Agent.',
    headingMaxWidth: 850
  }
]