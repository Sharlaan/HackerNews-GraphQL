import ListItem from '@material-ui/core/ListItem'
import * as React from 'react'

interface ILinkProps {
  link: {
    description: string
    url: string
  }
}

export default class Link extends React.PureComponent<ILinkProps, any> {
  public render() {
    return (
      <ListItem>
        {this.props.link.description} ({this.props.link.url})
      </ListItem>
    )
  }

  public voteForLink = async () => {
    // ... you'll implement this in chapter 6
  }
}
