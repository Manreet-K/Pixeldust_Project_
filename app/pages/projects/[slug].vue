<template>
  <template v-if="pageData">
    <ProductHero
      :label="pageData?.heroSection?.label"
      :title="pageData?.heroSection?.title"
      :description="pageData?.heroSection?.description"
      :leaderHeadline="pageData?.heroSection?.leaderHeadline"
    />
    <ProductStrongPoints
      :label="pageData?.featuresSection?.label"
      :title="pageData?.featuresSection?.title"
      :description="pageData?.featuresSection?.description"
      :points="pageData?.featuresSection?.points"
    />
    <ProductContact :title="pageData?.contactSection?.title" />
  </template>
  <Page404 v-else />
</template>

<script setup>
import meeruData from '~/utils/meeru-ai.js'
const route = useRoute()
const slug = route.params.slug

const pageData = ref(null)

const initPage = () => {
  if(slug === 'meeru-ai') {
    pageData.value = meeruData
  }
}
initPage()

</script>

<style scoped>
</style>