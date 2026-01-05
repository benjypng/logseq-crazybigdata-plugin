import { SettingSchemaDesc } from '@logseq/libs/dist/LSPlugin.user'

export const settings: SettingSchemaDesc[] = [
  {
    key: 'totalPages',
    type: 'number',
    default: '1000',
    title: 'Total Pages',
    description: 'Total number of pages to create.',
  },
  {
    key: 'blocksPerPage',
    type: 'number',
    default: '500',
    title: 'Blocks Per Page',
    description: 'Total number of blocks per page to create.',
  },
  {
    key: 'paragraphPerBlock',
    type: 'number',
    default: '25',
    title: 'Paragraphs Per Block',
    description:
      'Total number of paragraphs per block to create. 1 paragraph has about 30 words.',
  },
]
