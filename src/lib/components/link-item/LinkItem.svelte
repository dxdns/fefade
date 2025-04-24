<script lang="ts">
  import type { ClassValue, HTMLAnchorAttributes } from "svelte/elements"
  import classMapUtil from "../../utils/classMapUtil.js"
  import type { Snippet } from "svelte"
  import CustomLink from "../custom-link/index.js"
  import styles from "./LinkItem.module.css"

  interface Props extends HTMLAnchorAttributes {
    class?: ClassValue
    handleClick?: () => void
    left?: Snippet
  }

  let {
    class: className = "",
    handleClick,
    children,
    left,
    ...rest
  }: Props = $props()
</script>

<CustomLink
  class={({ isActive }) =>
    classMapUtil({ [styles.active]: isActive, [styles.linkItem]: true })}
  onclick={handleClick}
  {...rest}
>
  {#if left}
    <span>{@render left?.()}</span>
  {/if}
  <h3>{@render children?.()}</h3>
</CustomLink>
