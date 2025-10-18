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
    <ProductContact :title="pageData?.contactSection?.title" />
  </template>
  <Page404 v-else />
</template>

<script setup>
import meeruData from '~/utils/meeru-ai.js'
import insightsStudioData from '~/utils/insights-studio.js';
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
  else {
    pageData.value = null
  }
}
initPage()

</script>

<style scoped>
</style>