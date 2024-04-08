import { useEffect, useState } from 'react';

export function useSessionState (variableName) {
  let sessionStorage:any = typeof(window) !== 'undefined'?window.sessionStorage:null

  const [stateStorage, setStateStorage] = useState<any>(sessionStorage?.[variableName]?JSON.parse(sessionStorage[variableName]):null)

  useEffect(()=>{
    if(stateStorage == null || stateStorage == undefined){
      sessionStorage?.removeItem(variableName)
      return
    }
    sessionStorage?.setItem(variableName, JSON.stringify(stateStorage))
  }, [stateStorage])
  return [stateStorage, setStateStorage]
}