import React from 'react'
import { useMyHook } from 'sessionstate'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App