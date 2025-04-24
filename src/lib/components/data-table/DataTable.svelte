<script lang="ts">
  import type { Snippet } from "svelte"
  import type { ClassValue, HTMLAttributes } from "svelte/elements"
  import classMapUtil from "../../utils/classMapUtil.js"
  import styles from "./DataTable.module.css"

  interface Props extends HTMLAttributes<HTMLDivElement> {
    class?: ClassValue
    columns?: {
      name: string
      label: string
      customBodyRender?: (value: any) => Snippet
    }[]
    data: Record<string, any>[]
    renderExpandableRow?: (row: Record<string, any>) => Snippet
  }

  let {
    class: className = "",
    columns,
    data,
    renderExpandableRow,
    ...rest
  }: Props = $props()

  const currentIndex = $state(-1)

  const columnsData =
    data.length > 0
      ? Object.keys(data[0]).map((name) => ({ name, label: name }))
      : []
  const columnsNames = columns || columnsData
  const colSpan = Boolean(renderExpandableRow)
    ? columnsNames.length + 1
    : columnsNames.length

  const customBodyRender = (value: any, index: number) => {
    const column = columns ? columns[index] : null
    return column?.customBodyRender ? column.customBodyRender(value) : value
  }

  function handleClick(index: number) {
    currentIndex === index ? -1 : index
  }

  function isActive(index: number) {
    return currentIndex === index ? styles.active : ""
  }
</script>

<table
  class={classMapUtil({
    [className as string]: true,
    [styles.table]: true,
  })}
  {...rest}
>
  <thead>
    <tr>
      {#if renderExpandableRow}
        <th style="width: 5px;"></th>
      {/if}
      {#each columnsNames as item}
        <th>{item.label}</th>
      {/each}
    </tr>
  </thead>

  <tbody>
    {#each data as row, index}
      <tr>
        {#if renderExpandableRow}
          <td>
            <button aria-label="expand" onclick={() => handleClick(index)}
            ></button>
          </td>
        {/if}

        {#each columnsNames as col, colIndex}
          <td>{customBodyRender(row[col.name], colIndex)}</td>
        {/each}
      </tr>

      {#if renderExpandableRow}
        <tr class={`${styles.colappse} ${isActive(index)}`}>
          <td colspan={colSpan}>
            <div class={styles.content}>
              {@render renderExpandableRow(row)}
            </div>
          </td>
        </tr>
      {/if}
    {/each}
  </tbody>
</table>
