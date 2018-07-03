import Spinner from '@material-ui/core/CircularProgress'
import List from '@material-ui/core/List'
import gql from 'graphql-tag'
import * as React from 'react'
import { Query } from 'react-apollo'
import Error from './Error'
import Link from './Link'

const FEED_QUERY = gql`
  query FeedQuery {
    feed {
      links {
        createdAt
        description
        id
        url
      }
    }
  }
`

// same interface as FEED_QUERY
interface ILink {
  createdAt: Date
  description: string
  id: number
  url: string
}

const LinkList: React.SFC = () => (
  <Query query={FEED_QUERY}>
    {({ data, error, loading }) => {
      if (error) {
        return <Error error={error} />
      }

      if (loading || !data) {
        return <Spinner />
      }

      return (
        <List>
          {data.feed.links.map((link: ILink) => (
            <Link key={link.id} link={link} />
          ))}
        </List>
      )
    }}
  </Query>
)

export default LinkList
