import React, {createContext, useContext, useState, ReactNode} from 'react'

// Определите типы значений контекста
type AppContextType = {
	selectedValue: string
	setSelectedValue: (value: string) => void
}

// Создайте контекст с начальным значением
const AppContext = createContext<AppContextType>({
	selectedValue: '',
	setSelectedValue: () => {},
})

export const AppProvider: React.FC<{children: ReactNode}> = ({children}) => {
	const [selectedValue, setSelectedValue] = useState<string>('')

	return <AppContext.Provider value={{selectedValue, setSelectedValue}}>{children}</AppContext.Provider>
}

// Хук для использования контекста
export const useAppContext = () => {
	const context = useContext(AppContext)
	return context
}
