import AppBar from '@material-ui/core/AppBar'
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import * as React from 'react'

const styles = (theme: Theme) =>
  createStyles({
    appBar: {
      gridArea: 'appBar',
      position: 'static',
      zIndex: theme.zIndex.drawer + 1,
    },
  })

interface IHeaderProps extends WithStyles<typeof styles> {}

const Header: React.SFC<IHeaderProps> = ({ classes }) => (
  <AppBar className={classes.appBar}>
    <Toolbar>
      <Typography variant="title" color="inherit" noWrap={true}>
        Title
      </Typography>
    </Toolbar>
  </AppBar>
)

export default withStyles(styles)(Header)
