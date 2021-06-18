import Switch from 'react-switch'
import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'
import styles from './styles.module.scss'
import { useState } from 'react'

export function Header(){
  const [isChecked, setIsChecked] = useState(false)

  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR
  })

  function toggleMode(){
    setIsChecked(!isChecked)
  }

  console.log(isChecked)

  return(
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="Podcastr"/>
      <p>O melhor para você ouvir, sempre</p>

      <span>{currentDate}</span>

      <Switch checkedIcon={false} uncheckedIcon={false} offColor="#f7ea00" onColor="#150485" className={styles.switch} onChange={toggleMode} checked={isChecked} />
    </header>
  );
}