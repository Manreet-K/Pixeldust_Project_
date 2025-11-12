<template>
  <template
    v-if="pageData"
    v-for="(cmp, i) in pageData"
    :key="`comp_${i+1}`"
  >
    <ProductHero
      v-if="cmp._component ==='heroSection'"
      v-bind="getComponentProps(cmp)"
    />
    <ProductStrongPoints
      v-else-if="cmp._component ==='featuresSection'"
      v-bind="getComponentProps(cmp)"
    />
    <ProductMediaData
      v-else-if="cmp._component ==='mediaData'"
      :data="getComponentProps(cmp)"
    />
    <ProductContact
      v-else-if="cmp._component ==='contactSection'"
      v-bind="getComponentProps(cmp)"
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
import customAgentData from '~/utils/custom-agent.js';

const route = useRoute()
const slug = route.params.slug

const pageData = ref(null)

const getComponentProps = (propData = {}) => {
  const {_component, ...rest} = propData
  return rest
}

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
  else if(slug === 'custom-agent') {
    pageData.value = customAgentData
  }
  else {
    pageData.value = null
  }
}
initPage()

</script>

<style scoped>
</style>