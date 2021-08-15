export const titleMapper = (slug: string) => {
  switch (slug) {
    case 'kamakura-photowalk':
      return '鎌倉フォトウォーク'
    case 'jomyoji':
      return '浄妙寺'
    case 'kamakura-bungakukan':
      return '鎌倉文学館'
    case 'fumotoppara':
      return 'ふもとっぱら'
    case 'yamate':
      return '山手'
    case 'sakura':
      return '桜'
    default:
      return ''
  }
}

export const getPhotographySlides = (slugs: string[]) => {
  const resources = []
  slugs.map(s => {
    const slide = {
      name: s,
      src: `images/slides/${s}.png`,
      label: titleMapper(s),
    }
    resources.push(slide)
  })

  return resources
}
