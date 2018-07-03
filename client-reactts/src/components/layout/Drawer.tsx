import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles'
import * as React from 'react'

const DRAWER_WIDTH: number = 240

const styles = createStyles({
  paper: { width: `${DRAWER_WIDTH}px`, height: '100%', position: 'static' },
})

interface IDrawerProps extends WithStyles<typeof styles> {
  className?: string
}

const DrawerComponent: React.SFC<IDrawerProps> = ({ className, classes }) => (
  <Drawer
    className={className}
    variant="permanent"
    classes={{
      paper: classes.paper,
    }}
  >
    <List>
      <ListItem>Some item 1</ListItem>
      <ListItem>Some item 2</ListItem>
      <ListItem>Some item 3</ListItem>
    </List>
    <Divider />
    <List>
      <ListItem>Some other item 4</ListItem>
      <ListItem>Some other item 5</ListItem>
      <ListItem>Some other item 6</ListItem>
    </List>
  </Drawer>
)

export default withStyles(styles)(DrawerComponent)
