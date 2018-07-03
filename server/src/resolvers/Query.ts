import { Context } from '../utils'

export default {
  feed: feedLinks,
}

/*****  LINKS  *****/

async function feedLinks(
  parent,
  { filter, first, skip },
  context: Context,
  info,
) {
  const where = filter
    ? { OR: [{ url_contains: filter }, { description_contains: filter }] }
    : {}

  const allLinks = await context.db.query.links({})
  const count = allLinks.length

  const queriedLinks = await context.db.query.links({ first, skip, where })

  return {
    count,
    linkIds: queriedLinks.map((link) => link.id),
  }
}

/*****  POSTS  *****/

// export default {
//   feed: feedPosts,
//   drafts,
//   post,
// }

// function feedPosts(parent, args, context: Context, info) {
//   return context.db.query.posts({ where: { isPublished: true } }, info)
// }

// function drafts(parent, args, context: Context, info) {
//   return context.db.query.posts({ where: { isPublished: false } }, info)
// }

// function post(parent, { id }, context: Context, info) {
//   return context.db.query.post({ where: { id: id } }, info)
// }
