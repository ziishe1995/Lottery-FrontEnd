<template>
  <div>
    <div class="index-bg">
      <div class="topbar" />
      <Header />
      <nuxt />
    </div>
    <FooterBlockAd />
    <QRBlock />
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '@/components/Header'
import FooterBlockAd from '@/components/FooterBlockAd'
import QRBlock from '@/components/QRBlock'
import Footer from '@/components/Footer'
export default {
  name: 'Dashboard',
  components: {
    Header,
    QRBlock,
    FooterBlockAd,
    Footer
  },
  computed: {
    ...mapGetters({
      title: 'site/settingsInfo'
    })
  },
  mounted () {
  }
}
</script>
