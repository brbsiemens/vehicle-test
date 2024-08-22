import React, {createContext, useContext, useState, ReactNode} from 'react'

type AppContextType = {
	selectedType: string
	selectedYear: string
	setSelectedType: (value: string) => void
	setSelectedYear: (value: string) => void
}

const AppContext = createContext<AppContextType>({
	selectedType: '',
	setSelectedType: () => {},
	selectedYear: '',
	setSelectedYear: () => {},
})

export const AppProvider: React.FC<{children: ReactNode}> = ({children}) => {
	const [selectedType, setSelectedType] = useState<string>('')
	const [selectedYear, setSelectedYear] = useState<string>('')

	return <AppContext.Provider value={{selectedType, selectedYear, setSelectedYear, setSelectedType}}>{children}</AppContext.Provider>
}

// Хук для использования контекста
export const useAppContext = () => {
	const context = useContext(AppContext)
	return context
}
