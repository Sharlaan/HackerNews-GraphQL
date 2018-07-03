import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles'
import * as React from 'react'
import Drawer from './layout/Drawer'
import Header from './layout/Header'
import LinkList from './LinkList'

const styles = (theme: Theme) =>
  createStyles({
    appBar: {
      gridArea: 'appBar',
      position: 'static',
      zIndex: theme.zIndex.drawer + 1,
    },
    container: {
      display: 'grid',
      gridTemplateAreas: `'appBar appBar'
                        'drawer content'`,
      gridTemplateColumns: `auto 1fr`,
      gridTemplateRows: 'auto 1fr',
      height: '100%',
    },
    content: {
      alignItems: 'center',
      backgroundColor: theme.palette.background.default,
      display: 'flex',
      gridArea: 'content',
      justifyContent: 'center',
      padding: theme.spacing.unit * 3,
    },
    drawer: { gridArea: 'drawer' },
  })

interface IAppProps extends WithStyles<typeof styles> {}

const App: React.SFC<IAppProps> = (props) => {
  const { classes } = props

  return (
    <div className={classes.container}>
      <Header />

      <Drawer className={classes.drawer} />

      <section className={classes.content}>
        <LinkList />
      </section>
    </div>
  )
}

export default withStyles(styles)(App)
