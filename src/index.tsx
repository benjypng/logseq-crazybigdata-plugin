import '@logseq/libs'

import { generateCrazyBigData } from './generate-crazy-big-data'
import { settings } from './settings'

const main = async () => {
  logseq.UI.showMsg('logseq-crazybigdata-plugin loaded')

  logseq.App.registerCommandPalette(
    { key: 'crazybigdata', label: 'Crazy Big Data: Start generating' },
    async () => {
      await generateCrazyBigData()
    },
  )
}

logseq.useSettingsSchema(settings).ready(main).catch(console.error)
