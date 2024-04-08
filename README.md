# sessionstate

> 

[![NPM](https://img.shields.io/npm/v/sessionstate.svg)](https://www.npmjs.com/package/sessionstate) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save sessionstate
```

## Description

This simple hook should make it easier to add JSON and string objects to the window sessionStorage variable using useState.

## Usage

```jsx
// string

import React, { useEffect } from 'react'

import { useSessionState } from 'sessionstate'

const Example = () => {
  const [state, setState] = useSessionState("window.sessionStorage variable")
  useEffect(()=>{
    console.log("sessionStorage: " + window.sessionStorage["window.sessionStorage variable"])
    console.log("sessionState: " + state)
  }, [state])
  return (
    <div>      
      <p>{state}</p>
      <button onClick={()=>setState("Your value")}>Save value</button>
    </div>
  )
}

// JSON

import React, { useEffect } from 'react'

import { useSessionState } from 'sessionstate'

const Example = () => {
  const [state, setState] = useSessionState("window.sessionStorage variable")
  useEffect(()=>{
    console.log("sessionStorage: " + window.sessionStorage["window.sessionStorage variable"])
    console.log("sessionState: " + state)
  }, [state])
  return (
    <div>      
      <p>{state}</p>
      <button onClick={()=>setState([{"key1": "value1"}, {"key2": "value2"}])}>Save value</button>
    </div>
  )
}
```

## License

MIT © [NikitaBondar](https://github.com/NikitaBondar)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
