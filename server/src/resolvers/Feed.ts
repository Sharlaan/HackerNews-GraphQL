import { Context } from '../utils'

export default { links }

function links(parent, args, context: Context, info) {
  const { linkIds } = parent
  return context.db.query.links({ where: { id_in: linkIds } }, info)
}
