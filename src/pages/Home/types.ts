import { ConnectProps } from '../../store/types'
import { mapActionsToProps, mapStateToProps } from './container'

type WithRedux = ConnectProps<typeof mapStateToProps, typeof mapActionsToProps>

export type Props = WithRedux & {}
