<template>
  <div class="canvas" ref="canvas"></div>
</template>

<script>
import ForceGraph3D from '3d-force-graph'
import axios from 'axios'
import qs from 'qs'
import * as THREE from 'three'
import SpriteText from 'three-spritetext'

const img1 = require('@/assets/forceDirected/icon_two.png')
const img2 = require('@/assets/forceDirected/bg_core.png')
const img3 = require('@/assets/forceDirected/bg_blue.png')
const iconObj = {
  0: img1,
  1: img2,
  2: img3
}

export default {
  name: 'ForceDirected',
  data() {
    this.Graph = null

    return {
      sourceData: []
    }
  },
  created() {
    this.getSourceData()
  },
  methods: {
    async getSourceData() {
      const {
        data: { data }
      } = await axios({
        method: 'post',
        url: 'http://tu.yuezhix.com/api/knowledgeList',
        data: qs.stringify({ subject_id: 2 })
      })

      this.eachTree([data])
    },
    eachTree(sourceData) {
      if (sourceData.length === 0) return []
      const nodes = []
      const links = []

      const fn = data => {
        data.forEach(item => {
          if (item.children) {
            fn(item.children)
          }
          nodes.push({
            name: item.name,
            id: item.id,
            has_children: !!item.children,
            level: item.level,
            parent_id: item.parent_id,
            icon: iconObj[item.level] || img3
          })

          if (item.parent_id === -1) return

          links.push({
            source: item.parent_id,
            target: item.id
          })
        })
      }
      fn(sourceData)

      this.initForceGraph3D({
        nodes,
        links
      })
    },
    //添加文字
    addSpriteText(node) {
      const sprite = new SpriteText(node.name)
      sprite.color = '#fff'
      sprite.textHeight = 10
      sprite.position.set(0, 12, 0)
      return sprite
    },
    initForceGraph3D(gData) {
      this.Graph = ForceGraph3D()(this.$refs.canvas)
        .showNavInfo(false)
        .dagMode('td')
        .dagLevelDistance(150)
        .nodeResolution(50)
        .backgroundColor('#000')
        .nodeThreeObjectExtend(false)
        .nodeThreeObject(({ icon, level }) => {
          const imgTexture = new THREE.TextureLoader().load(icon)
          const material = new THREE.SpriteMaterial({ map: imgTexture })
          const sprite = new THREE.Sprite(material)
          switch (level) {
            case 0:
              sprite.scale.set(100, 100)
              break
            case 1:
              sprite.scale.set(60, 60)
              break
            default:
              sprite.scale.set(30, 30)
          }
          return sprite
        })
        // .nodeThreeObject(node => {
        //   return this.addSpriteText(node)
        // })
        .nodeAutoColorBy('type')
        .linkDirectionalParticles(3)
        .graphData(gData)
    }
  }
}
</script>

<style lang="less" scoped>
.canvas {
  width: 100vw;
  height: 100vh;
  // background: url('../assets/forceDirected/bg.png') no-repeat center center / cover;
}
</style>
