<script lang="ts">
  import "./style.css";
  import { base } from "$app/paths";
</script>

<nav>
  <a href="{base}/">Back</a>
  <a href="{base}/positioning/static">Static</a>
  <a href="{base}/positioning/relative">Relative</a>
  <a href="{base}/positioning/absolute">Absolute</a>
  <a href="{base}/positioning/fixed">Fixed</a>
  <a href="{base}/positioning/sticky">Sticky</a>
</nav>

<slot />
