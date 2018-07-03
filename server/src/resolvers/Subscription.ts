import { Context } from '../utils'

const newLink = {
  subscribe: (parent, args, context: Context, info) => {
    return context.db.subscription.link(
      // https://github.com/graphcool/prisma/issues/1734
      // { where: { mutation_in: ['CREATED'] } },
      {},
      info,
    )
  },
}

const newVote = {
  subscribe: (parent, args, context: Context, info) => {
    return context.db.subscription.vote(
      // https://github.com/graphcool/prisma/issues/1734
      // { where: { mutation_in: ['CREATED'] } },
      {},
      info,
    )
  },
}

export default { newLink, newVote }
