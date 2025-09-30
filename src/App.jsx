import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='text-[red]'>Vite + React</h1>
      <figure className="hover-gallery max-w-60">
  <img src="https://img.daisyui.com/images/stock/daisyui-hat-1.webp" />
  <img src="https://img.daisyui.com/images/stock/daisyui-hat-2.webp" />
  <img src="https://img.daisyui.com/images/stock/daisyui-hat-3.webp" />
  <img src="https://img.daisyui.com/images/stock/daisyui-hat-4.webp" />
</figure>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
