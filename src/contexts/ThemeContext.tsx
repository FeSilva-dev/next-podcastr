import { createContext, useState, ReactNode, useContext} from 'react'

type ThemeContextData = {
  isChecked: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextData)

type ThemeContextProviderProps = {
  children: ReactNode
}

export function ThemeContextPRovider({children}: ThemeContextProviderProps){
  const [isChecked, setIsChecked] = useState(false)

  function toggleTheme(){
    setIsChecked(!isChecked)
  }

  return(
    <ThemeContext.Provider
      value={{
        isChecked,
        toggleTheme
      }}>

      {children}

    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  return useContext(ThemeContext)
}