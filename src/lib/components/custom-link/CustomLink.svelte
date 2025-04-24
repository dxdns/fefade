<script lang="ts">
  import type { HTMLAnchorAttributes } from "svelte/elements"
  import classMapUtil from "../../utils/classMapUtil.js"
  import { page } from "$app/state"
  import styles from "./CustomLink.module.css"

  interface Props extends HTMLAnchorAttributes {
    class?: string | (({ isActive }: { isActive: boolean }) => string)
  }

  let { class: className = "", children, ...rest }: Props = $props()

  const isActive = $derived(page.url.pathname === rest.href)
</script>

<a
  class={classMapUtil({
    [typeof className === "function" ? className({ isActive }) : className]:
      true,
    [styles.customLink]: true,
  })}
  aria-current={isActive ? "page" : undefined}
  {...rest}
>
  {@render children?.()}
</a>
