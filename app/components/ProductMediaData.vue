<template>
  <section class="px-6 py-[100px] md:py-[120px]">
    <div class="mb-6 flex items-stretch rounded-lg overflow-clip divide-x divide-[#4c4c4c] border border-[#4c4c4c] overflow-x-auto mx-auto max-w-[1200px]">
      <button
        v-for="item in tabs"
        :key="item.key"
        class="tab-btn flex-1 p-4 font-medium text-base md:text-[22px]"
        :class="{
          'active': selectedTab === item.key
        }"
        @click="handleTabSelect(item.key)"
      >
        {{ item.label }}
      </button>
    </div>
    <div class="rounded-lg overflow-clip border border-[#4c4c4c] p-6 mx-auto max-w-[1200px] xl:p-[64px]">
      <div v-show="selectedTab === tabs[0].key">
        <h5
          v-if="props.data?.videos?.label"
          class="mb-8 font-medium text-lg md:text-[22px]"
        >
          {{ props.data?.videos?.label }}
        </h5>
        <div class="min-h-[50vh] gap-8 grid grid-cols-1 md:grid-cols-2 xl:gap-[64px]">
          <div
            v-for="(item, i) in props.data?.videos?.list || []"
            :key="`v_${i}`"
          >
            <div class="video-container bg-gray-900 rounded-lg mb-5">
              <iframe
                width="560"
                height="315"
                :src="getEmbedUrl(item.videoUrl)"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <p class="text-base font-medium md:text-lg">{{ item.title }}</p>
          </div>
        </div>
      </div>
      <div v-show="selectedTab === tabs[1].key">
        <h5
          v-if="props.data?.docs?.label"
          class="mb-8 font-medium text-lg md:text-[22px]"
        >
          {{ props.data?.docs?.label }}
        </h5>
        <div class="min-h-[50vh] gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-[64px]">
          <div
            v-for="(item, i) in props.data?.docs?.list || []"
            :key="`v_${i}`"
            @click="downloadPDF(item.url, item.title)"
          >
            <div class="doc-container bg-gray-900 border border-[#4c4c4c] rounded-lg mb-5">
              <img :src="item.image" alt="" loading="lazy" />
            </div>
            <p class="text-base font-medium md:text-lg">{{ item.title }}</p>
          </div>
        </div>
      </div>
      <div v-show="selectedTab === tabs[2].key">
        <h5
          v-if="props.data?.tutorials?.label"
          class="mb-8 font-medium text-lg md:text-[22px]"
        >
          {{ props.data?.tutorials?.label }}
        </h5>
        <div class="min-h-[50vh] gap-8 grid grid-cols-1 md:grid-cols-2 xl:gap-[64px]">
          <div
            v-for="(item, i) in props.data?.tutorials?.list || []"
            :key="`v_${i}`"
          >
            <div class="video-container bg-gray-900 rounded-lg mb-5">
              <iframe
                width="560"
                height="315"
                :src="getEmbedUrl(item.videoUrl)"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <p class="text-base font-medium md:text-lg">{{ item.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  }
})
const tabs = [
  {
    label: 'Videos',
    key: 'videos'
  },
  {
    label: 'Documentation',
    key: 'docs'
  },
  {
    label: 'Tutorials',
    key: 'tutorials'
  }
]

const selectedTab = ref(tabs[0].key)

const handleTabSelect = (key) => {
  selectedTab.value = key
}
const getEmbedUrl = (videoUrl) => {
  if(!videoUrl) {
    return ''
  }
  return videoUrl.replace("watch?v=", "embed/");
}
const downloadPDF = (url, name) => {
  const link = document.createElement("a")
  link.href = url
  // link.download = url.split("/").pop() || "grupo-brocal-product-catalogue.pdf" /* set filename */
  link.download = `${name}.pdf` // default filename
  link.target = "_blank" // ensures it works across browsers
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>

<style scoped>
.tab-btn {
  position: relative;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 92px;
}
.tab-btn:hover,
.tab-btn.active {
  background: linear-gradient(180deg, rgba(255, 107, 53, 0) 5.91%, rgba(255, 107, 53, 0.0814045) 73.62%, #FF6B35 496.24%);
}
.tab-btn.active::after {
  content: "";
  position: absolute;
  background-color: #FF6B35;
  height: 6px;
  left: 0;
  right: 0;
  bottom: 0;
}
.doc-container {
  width: 200px;
  height: 250px;
  @apply flex items-center justify-center cursor-pointer transition-transform duration-200 scale-100;
}
.doc-container > img {
  @apply object-contain;
}
.doc-container:hover {
  @apply scale-95;
}
.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  outline: 1px solid rgba(255, 255, 255, 0.1);
}
.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
</style>