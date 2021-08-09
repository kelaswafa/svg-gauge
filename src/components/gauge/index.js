const Gauge = ({ percent }) => {
  const deg = (percent * Math.PI) / 100
  const deg2 = (percent * Math.PI) / 100 - Math.PI / 2
  const r = 40
  const r2 = 3
  const [py, px] = [r * Math.sin(deg), 50 + r * Math.cos(deg)]
  const [dy, dx] = [-r2 * Math.sin(deg), 50 + -r2 * Math.cos(deg)]
  const [ay, ax] = [-r2 * Math.sin(deg2), 50 + -r2 * Math.cos(deg2)]
  const [by, bx] = [r2 * Math.sin(deg2), 50 + r2 * Math.cos(deg2)]

  return (
    <div
      style={{ position: "relative", display: "inline-block", width: "160px" }}
    >
      <svg
        width="100%"
        viewBox="0 -10 100 60"
        style="transform: rotate(180deg)"
      >
        <circle
          cx="50"
          cy="0"
          r="40"
          stroke="#FBE7C6"
          stroke-width="20"
          stroke-dasharray={`126, ${r * 2 * Math.PI}`}
          fill="none"
        />
        <circle
          cx="50"
          cy="0"
          r="40"
          stroke="#FFAEBC"
          stroke-width="20"
          stroke-dasharray={`80, ${r * 2 * Math.PI}`}
          fill="none"
        />
        <circle
          cx="50"
          cy="0"
          r="40"
          stroke="#A0E7E5"
          stroke-width="20"
          stroke-dasharray={`50, ${r * 2 * Math.PI}`}
          fill="none"
        />
        <path d={`M${bx} ${by} L${ax} ${ay} L${px} ${py} Z`} />
        <circle cx="50" cy="0" r={r2} fill="black" />
      </svg>
      <div style={{ position: "absolute", bottom: "0" }}>0 %</div>
      <div style={{ position: "absolute", bottom: "0", right: "0" }}>100 %</div>
      <div
        style={{
          position: "absolute",
          display: "flex",
          bottom: "30%",
          right: "0",
          left: "0",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            padding: "5px 10px",
            color: "white",
            backgroundColor: "teal",
            fontWeight: "bold",
            borderRadius: "5px",
            boxShadow: "0px 0px 10px white",
          }}
        >
          {percent} %
        </div>
      </div>
    </div>
  )
}

export default Gauge
