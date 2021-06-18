import { Header } from '../components/Header'
import { Player } from '../components/Player'
import { PlayerContextProvider } from '../contexts/PlayerContext'
import {ThemeContextPRovider, useTheme} from '../contexts/ThemeContext'

import styles from '../styles/app.module.scss'
import '../styles/global.scss'

function MyApp({ Component, pageProps }) {
  const {isChecked} = useTheme()

    return(
      <PlayerContextProvider>
          <div className={styles.wrapper}>
            <main className={isChecked ? styles.check : ''}>
              <Header />
              <Component {...pageProps} />
            </main>
            <Player />
          </div>
        </PlayerContextProvider>
  )
}

export default MyApp
