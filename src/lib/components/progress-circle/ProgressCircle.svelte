<script lang="ts">
  import type { HTMLAttributes, ClassValue } from "svelte/elements"
  import styles from "./ProgressCircle.module.css"
  import classMapUtil from "../../utils/classMapUtil.js"

  interface Props extends HTMLAttributes<HTMLDivElement> {
    class?: ClassValue
    percent: number
  }

  let { class: className = "", percent, ...rest }: Props = $props()

  let strokeDasharray = $state("0")
  let el: SVGSVGElement

  function getColor(percent: number) {
    return percent < 50 ? "var(--color-error)" : "var(--color-success)"
  }

  $effect(() => {
    const roundCircum = 2 * 36 * Math.PI
    const roundDraw = (percent * roundCircum) / 100
    strokeDasharray = `${roundDraw} 999`
  })
</script>

<div
  {...rest}
  class={classMapUtil({
    [className as string]: true,
    [styles.progressCircle]: true,
  })}
>
  <svg
    bind:this={el}
    stroke-dasharray={strokeDasharray}
    data-percent={percent}
    width="92"
    height="92"
    viewBox="-11.5 -11.5 115 115"
  >
    <circle
      r="36"
      cx="46"
      cy="46"
      fill="transparent"
      stroke="#e0e0e0"
      stroke-dasharray={"0"}
    ></circle>
    <circle
      r="36"
      cx="46"
      cy="46"
      stroke={getColor(percent)}
      stroke-width={"10px"}
      fill="transparent"
    ></circle>
    <text x={"28px"} y={"52px"} fill={getColor(percent)}>
      {percent}%
    </text>
  </svg>
</div>
