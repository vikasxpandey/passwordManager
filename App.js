import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import HomeTabs from './components/HomeTabs'

const App = () => {
	return (
		<NavigationContainer>
			<HomeTabs />
		</NavigationContainer>
	)
}

export default App
