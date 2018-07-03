import { compare, hash } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

import { APP_SECRET, getUserId, Context } from '../utils'

export default {
  login,
  post,
  signup,
  vote,
}

/*****  LINKS  *****/

async function login(parent, { email, password }, context: Context, info) {
  const user = await context.db.query.user({ where: { email } })
  if (!user) {
    throw new Error('Unknown user')
  }

  const valid = await compare(password, user.password)
  if (!valid) {
    throw new Error('Invalid password')
  }

  const token = sign({ userId: user.id }, APP_SECRET)

  return { token, user }
}

async function signup(parent, args, context: Context, info) {
  const encryptedPassword = await hash(args.password, 10)
  const user = await context.db.mutation.createUser({
    data: { ...args, password: encryptedPassword },
  })

  const token = sign({ userId: user.id }, APP_SECRET)

  return { token, user }
}

function post(parent, { url, description }, context: Context, info) {
  const userId = getUserId(context)
  return context.db.mutation.createLink(
    { data: { url, description, postedBy: { connect: { id: userId } } } },
    info,
  )
}

async function vote(parent, { linkId }, context: Context, info) {
  const userId = getUserId(context)
  const linkExists = await context.db.exists.Vote({
    user: { id: userId },
    link: { id: linkId },
  })
  if (linkExists) {
    throw new Error(`Already voted for link: ${linkId}`)
  }

  return context.db.mutation.createVote(
    {
      data: {
        user: { connect: { id: userId } },
        link: { connect: { id: linkId } },
      },
    },
    info,
  )
}

/*****  POSTS  *****/

// function createDraft(parent, { title, text }, context: Context: Context, info) {
//   return context.db.mutation.createPost({ data: { title, text } }, info)
// }

// function deletePost(parent, { id }, context: Context: Context, info) {
//   return context.db.mutation.deletePost({ where: { id } }, info)
// }

// function publish(parent, { id }, context: Context: Context, info) {
//   return context.db.mutation.updatePost(
//     {
//       where: { id },
//       data: { isPublished: true },
//     },
//     info,
//   )
// }

// export default {
//   createDraft,
//   deletePost,
//   publish,
// }
