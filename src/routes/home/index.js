import { h } from "preact"
import { useState } from "preact/hooks"
import Gauge from "../../components/gauge"
import style from "./style.css"

const Home = () => {
  const [value, setValue] = useState(50)
  return (
    <div class={style.home}>
      <h1>Home</h1>
      <p>This is the Home component.</p>
      <Gauge percent={value} />
      <br />
      <input
        type="range"
        value={value}
        onInput={(e) => setValue(e.target.value)}
      />
      {value} %
    </div>
  )
}
export default Home
