import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { createBrowserHistory } from 'history'
import { Router, Switch } from 'react-router-dom'
import './App.css'
import { ParticleBackground } from './components/ParticleBaground'
import { WordsProvider } from './context/wordsContext'
import { Routes } from './routes'

const history = createBrowserHistory()
const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#de57d9',
		},
		secondary: {
			main: '#090909',
		},
	},
})

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<WordsProvider>
					<Router history={history}>
						<Switch>
							<Routes />
						</Switch>
					</Router>
					<ParticleBackground />
				</WordsProvider>
			</ThemeProvider>
		</>
	)
}

export default App
