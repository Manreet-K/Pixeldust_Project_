<template>
  <template v-if="pageData">
    <ProductHero
      :label="pageData?.heroSection?.label"
      :title="pageData?.heroSection?.title"
      :description="pageData?.heroSection?.description"
      :leaderHeadline="pageData?.heroSection?.leaderHeadline"
      :headingMaxWidth="pageData?.heroSection?.headingMaxWidth"
      :leaderMaxWidth="pageData?.heroSection?.leaderMaxWidth"
    />
    <ProductStrongPoints
      :label="pageData?.featuresSection?.label"
      :title="pageData?.featuresSection?.title"
      :description="pageData?.featuresSection?.description"
      :points="pageData?.featuresSection?.points"
    />
    <ProductMediaData
      :data="pageData?.mediaData"
    />
    <ProductContact
      :title="pageData?.contactSection?.title"
      :headingWidth="pageData?.contactSection?.headingMaxWidth"
    />
  </template>
  <Page404 v-else />
</template>

<script setup>
import meeruData from '~/utils/meeru-ai.js'
import insightsStudioData from '~/utils/insights-studio.js';
import EsaData from '~/utils/enterprise-strategy-agent.js';
import DsaData from '~/utils/data-analyst-agent.js';
import EpSrData from '~/utils/enterprise-search-agent.js';
import multilingualChatbotData from '~/utils/multilingual-chatbot.js';

const route = useRoute()
const slug = route.params.slug

const pageData = ref(null)

const initPage = () => {
  if(slug === 'meeru-ai') {
    pageData.value = meeruData
  }
  else if(slug === 'insights-studio') {
    pageData.value = insightsStudioData
  }
  else if(slug === 'enterprise-strategy-agent') {
    pageData.value = EsaData
  }
  else if(slug === 'enterprise-search-agent') {
    pageData.value = EpSrData
  }
  else if(slug === 'data-analyst-agent') {
    pageData.value = DsaData
  }
  else if(slug === 'multilingual-chatbot') {
    pageData.value = multilingualChatbotData
  }
  else {
    pageData.value = null
  }
}
initPage()

</script>

<style scoped>
</style>