export interface SocialEntry {
  type: 'github' | 'twitter' | 'email'
  icon: string
  link: string
}

export interface Creator {
  avatar: string
  name: string
  username?: string
  title?: string
  org?: string
  desc?: string
  links?: SocialEntry[]
  nameAliases?: string[]
  emailAliases?: string[]
}

const getAvatarUrl = (name: string) => `https://github.com/${name}.png`

export const creators: Creator[] = [
  {
    name: '自权的SPACE',
    avatar: '',
    username: 'SelfBalancing',
    title: '公众号撰写者',
    desc: '前端、设计、计算机科学',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/SelfBalancing' },
      { type: 'twitter', icon: 'twitter', link: 'https://selfbalancing.github.io/homepage/' },
    ],
    nameAliases: ['自权的SPACE', '自权'],
    emailAliases: ['2895887410@qq.com'],
  },
  
].map<Creator>((c) => {
  c.avatar = c.avatar || getAvatarUrl(c.username)
  return c as Creator
})

export const creatorNames = creators.map(c => c.name)
export const creatorUsernames = creators.map(c => c.username || '')
