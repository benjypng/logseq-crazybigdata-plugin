import { faker } from '@faker-js/faker'

interface PluginSettings {
  totalPages: number
  blocksPerPage: number
  paragraphsPerBlock: number
}

export const generateCrazyBigData = async () => {
  const { totalPages, blocksPerPage, paragraphsPerBlock } =
    logseq.settings as unknown as PluginSettings

  logseq.UI.showMsg(
    `Starting to generate crazy big data. Please watch your system's resource monitor`,
  )
  console.info(
    '%cStarting to generate crazy big data',
    'color: #00ff00; font-weight: bold;',
  )

  for (let p = 1; p <= totalPages; p++) {
    const pageTitle = `${faker.company.name()} Strategic Plan ${p}`
    try {
      await logseq.Editor.createPage(pageTitle)
      for (let b = 1; b <= blocksPerPage; b++) {
        const blockContent = [
          faker.hacker.phrase(),
          faker.company.catchPhrase(),
          faker.hacker.phrase(),
          faker.commerce.productDescription(),
          ...Array.from({ length: paragraphsPerBlock }, () =>
            faker.word.sample(2),
          ),
        ].join(' ')
        await logseq.Editor.appendBlockInPage(pageTitle, blockContent)
        if (b % 10 === 0) {
          await new Promise((r) => setTimeout(r, 10))
        }
      }
      console.info(`Finished Page: ${pageTitle}`)
    } catch (err) {
      console.error(`Error on page ${p}:`, err)
    }
  }
  console.info(
    '%cGenerated 50,000 blocks',
    'background: #222; color: #bada55; font-size: 20px;',
  )
}
