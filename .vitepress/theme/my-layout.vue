<script setup>
import DefaultTheme from 'vitepress/theme'
import Giscus from '@giscus/vue';

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #aside-outline-after>
    </template>
    <template #doc-after>
      <Giscus
        id="comments"
        repo="shangwenhe/shangwenhe.github.io"
        repoId="MDEwOlJlcG9zaXRvcnk0MDgxNTQyMA=="
        category="Comments"
        categoryId="DIC_kwDOAm7LPM4CZRBn"
        mapping="url"
        strict="1"
        reactionsEnabled="0"
        emitMetadata="1"
        inputPosition="bottom"
        theme="light"
        lang="zh-CN"
        loading="lazy"
        crossorigin="anonymous"
        term="Welcome to @giscus/vue component!"
      />
    </template>
  </Layout>
</template>
<style>

#comments::part(iframe) {
  padding-top: 30px;
  width: 100%;
  margin: auto;
  display: flex;
}

.comments-container {
  max-height: 640px;
  overflow-y: scroll;
}
</style>
