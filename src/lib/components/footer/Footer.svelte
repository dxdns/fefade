<script lang="ts">
  import styles from "./Footer.module.css"

  const year = new Date().getFullYear()
</script>

<div class={styles.footer}>
  <section>
    <a href="https://dxdns.dev" target="_blank" rel="noopener noreferrer">
      <img
        src="https://dxdns.dev/favicon.ico"
        alt="logo"
        title="logo"
        aria-label="logo"
      />
    </a>
    <p>
      Desenvolvido por
      <a
        href="https://dxdns.dev"
        target="_blank"
        title="dxdns"
        rel="noopener noreferrer"
      >
        {" "}dxdns
      </a>
    </p>
  </section>

  <footer class={styles.bottom}>
    <p>Copyright &copy;</p>
    <p>{year} All Rights Reserved.</p>
  </footer>
</div>
