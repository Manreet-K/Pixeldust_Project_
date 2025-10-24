import IconPermission from '../assets/images/icons/icon-permission.svg';
import IconTranslation from '../assets/images/icons/icon-language-translator.svg';
import IconRetention from '../assets/images/icons/icon-retention.svg';
import IconMic from '../assets/images/icons/icon-mic.svg';
import IconRecycle from '../assets/images/icons/icon-lifecycle.svg';
import IconLearning from '../assets/images/icons/icon-learning.svg';
import IconBox from '../assets/images/icons/icon-box.svg';
import IconBubble from '../assets/images/icons/icon-bubble.svg';
import IconTriangle from '../assets/images/icons/icon-triangle.svg';

export default {
  heroSection: {
    label: 'Multilingual Chatbot',
    title: `Speak every customer's language`,
    description: `An AI-powered conversational assistant that understands, translates,
      and responds naturally across languages — ensuring global reach with local empathy.`,
    leaderHeadline: `The Multilingual Chatbot enables seamless communication across borders.
      Built on advanced natural language understanding, it helps enterprises deliver personalized,
      context-aware conversations in 100+ languages while maintaining brand tone and accuracy.`,
    headingMaxWidth: 920,
    leaderMaxWidth: 940
  },
  featuresSection: {
    label: 'Core Capabilities',
    title: 'Built for global conversations',
    description: `Designed for enterprises that operate worldwide,
      the Multilingual Chatbot bridges language gaps to enhance support,
      engagement, and accessibility.`,
    points: [
      {
        title: 'Real-Time Translation',
        description: `Understands and responds instantly across multiple languages.`,
        image: IconTranslation
      },
      {
        title: 'Context Retention',
        description: `Maintains conversation flow, tone, and meaning across translations.`,
        image: IconRetention
      },
      {
        title: 'Domain Adaptation',
        description: `Customizable vocabulary and tone for industries like finance, retail, and healthcare.`,
        image: IconRecycle
      },
      {
        title: 'Voice & Text Support',
        description: `Works across chat, voice assistants, and embedded systems.`,
        image: IconMic
      },
      {
        title: 'Secure and Compliant',
        description: `Protects user data with enterprise-grade privacy and encryption.`,
        image: IconPermission
      },
      {
        title: 'Continuous Learning',
        description: `Improves with every interaction using reinforcement and feedback loops.`,
        image: IconLearning
      }
    ]
  },
  mediaData: {
    videos: {
      label: 'See the Multilingual Chatbot in Action',
      list: [
        {
          title: 'Cross-Language Conversations in Real Time',
          videoUrl: 'https://www.youtube.com/watch?v=D0UnqGm_miA'
        },
        {
          title: 'How Enterprises Scale Global Support with AI',
          videoUrl: 'https://www.youtube.com/watch?v=D0UnqGm_miA'
        },
        {
          title: 'Adapting Tone and Vocabulary for Different Markets',
          videoUrl: 'https://www.youtube.com/watch?v=D0UnqGm_miA'
        }
      ]
    },
    docs: {
      label: 'See Multilingual Chatbot Documentation',
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
      label: 'See Multilingual Chatbot Tutorials',
      list: [
        {
          title: 'Cross-Language Conversations in Real Time',
          videoUrl: 'https://www.youtube.com/watch?v=D0UnqGm_miA'
        },
        {
          title: 'How Enterprises Scale Global Support with AI',
          videoUrl: 'https://www.youtube.com/watch?v=D0UnqGm_miA'
        },
        {
          title: 'Adapting Tone and Vocabulary for Different Markets',
          videoUrl: 'https://www.youtube.com/watch?v=D0UnqGm_miA'
        }
      ]
    },
  },
  contactSection: {
    title: 'Engage the world in their language',
    headingMaxWidth: 540,
  }
}