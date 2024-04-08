import { useEffect, useState } from 'react';

export function useSessionState (variableName) {
  let sessionStorage

  try {
    sessionStorage = JSON.parse(window.sessionStorage[variableName])
  }catch(e){
    sessionStorage = window.sessionStorage[variableName]
  }

  const [stateStorage, setStateStorage] = useState(sessionStorage)

  useEffect(()=>{
    if(stateStorage == null || stateStorage == undefined){
      window.sessionStorage?.removeItem(variableName)
      return
    }
    window.sessionStorage?.setItem(variableName, typeof(stateStorage) === "string"? stateStorage:JSON.stringify(stateStorage))
  }, [stateStorage])
  return [stateStorage, setStateStorage]
}