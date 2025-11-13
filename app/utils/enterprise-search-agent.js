import IconPermission from '../assets/images/icons/icon-permission.svg';
import IconSearch from '../assets/images/icons/icon-internal-search.svg';
import IconRankedResult from '../assets/images/icons/icon-arrow-facing.svg';
import IconSmartPreview from '../assets/images/icons/icon-smart-preview.svg';
import IconSourceTrace from '../assets/images/icons/icon-source-trace.svg';
import IconScalable from '../assets/images/icons/icon-scalable.svg';
import IconBox from '../assets/images/icons/icon-box.svg';
import IconBubble from '../assets/images/icons/icon-bubble.svg';
import IconTriangle from '../assets/images/icons/icon-triangle.svg';

export default [
  {
    _component: 'heroSection',
    label: 'Enterprise Search Agent',
    title: 'Find what matters fast',
    description: `Your internal knowledge librarian that locates the right document,
      answer, or precedent across intranets, SharePoint, wikis, and document systems.`,
    leaderHeadline: `Enterprise Search Agent gives teams instant access to institutional knowledge.
      It unifies search across internal systems, understands context, and surfaces the most relevant,
      trusted results so work moves faster.`,
    headingMaxWidth: 920,
    leaderMaxWidth: 955
  },
  {
    _component: 'featuresSection',
    label: 'Core Capabilities',
    title: 'Built for knowledge at work',
    description: `Reduce rework, speed onboarding, and
      make every decision smarter with precise, permission-aware search.`,
    points: [
      {
        title: 'Unified Internal Search',
        description: `Query intranets, SharePoint, wikis, and DMS in one place`,
        image: IconSearch
      },
      {
        title: 'Context-Ranked Results',
        description: `Semantic understanding prioritizes what is most relevant`,
        image: IconRankedResult
      },
      {
        title: 'Permission Awareness',
        description: `Honors enterprise security, roles, and access policies`,
        image: IconPermission
      },
      {
        title: 'Smart Previews',
        description: `Quick snippets and anchors to the exact section you need`,
        image: IconSmartPreview
      },
      {
        title: 'Source Traceability',
        description: `Clear provenance for compliance and trust`,
        image: IconSourceTrace
      },
      {
        title: 'Scalable and Extensible',
        description: `Connect new repositories, APIs, and file stores easily`,
        image: IconScalable
      }
    ]
  },
  {
    _component: 'mediaData',
    videos: {
      label: 'See Enterprise Search Agent in Action',
      list: [
        {
          title: 'Unlock Hidden Intelligence using Enterprise Search Agent.',
          url: 'https://youtu.be/hppX4DPqqkQ?t=217'
        }
      ]
    },
    docs: {
      label: 'See Enterprise Search Agent Documentation',
      list: [
        {
          title: 'From Data Chaos to Enterprise Intelligence',
          url: 'https://drive.google.com/file/d/1XhNyZ092FBrfeC6r2-LDWiQYrVopvR-M/view?usp=drive_link',
          image: IconBubble,
        }
      ]
    },
  },
  {
    _component: 'contactSection',
    title: 'Put your institutional knowledge to work',
  }
]
