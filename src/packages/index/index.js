import VeBar from '../bar'
import VeHistogram from '../histogram'
import VeLine from '../line'
import VePie from '../pie'
import VeRing from '../ring'
import VeWaterfall from '../waterfall'
import VeFunnel from '../funnel'
import VeRadar from '../radar'
import VeChart from '../chart'
import VeMap from '../map'
import VeBmap from '../bmap'
import VeSankey from '../sankey'
import VeHeatmap from '../heatmap'
import VeScatter from '../scatter'
import VeCandle from '../candle'

const components = [
  VeBar,
  VeHistogram,
  VeLine,
  VePie,
  VeRing,
  VeWaterfall,
  VeFunnel,
  VeRadar,
  VeChart,
  VeMap,
  VeBmap,
  VeSankey,
  VeHeatmap,
  VeScatter,
  VeCandle
]

function install (Vue, _) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  VeBar,
  VeHistogram,
  VeRing,
  VeLine,
  VePie,
  VeWaterfall,
  VeFunnel,
  VeRadar,
  VeChart,
  VeMap,
  VeBmap,
  VeSankey,
  VeScatter,
  VeCandle,
  install
}
