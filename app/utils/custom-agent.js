import IconPermission from '../assets/images/icons/icon-permission.svg';
import IconTranslation from '../assets/images/icons/icon-language-translator.svg';
import IconRetention from '../assets/images/icons/icon-retention.svg';
import IconMic from '../assets/images/icons/icon-mic.svg';
import IconRecycle from '../assets/images/icons/icon-lifecycle.svg';
import IconLearning from '../assets/images/icons/icon-learning.svg';
import IconBox from '../assets/images/icons/icon-box.svg';
import IconBubble from '../assets/images/icons/icon-bubble.svg';
import IconTriangle from '../assets/images/icons/icon-triangle.svg';

export default [
  {
    _component: 'heroSection',
    label: '',
    title: `Explore CriticalRiver’s AI Universe`,
    description: `Experience our Advanced and Agentic AI Capabilities, take Platform Tours,
      and gain Glimpses into Interactive Workshops and Use Case Discovery Sessions.`,
    leaderHeadline: '',
    headingMaxWidth: 860,
    leaderMaxWidth: 940,
    hideCTA: true,
  },
  {
    _component: 'featuresSection',
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
  {
    _component: 'contactSection',
    title: 'Ready to unlock<br/> the power of Your data?',
    headingMaxWidth: 640,
  }
]