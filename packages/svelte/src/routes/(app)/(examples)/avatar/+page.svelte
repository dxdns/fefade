<script lang="ts">
	import { Avatar, Status } from "@/index.js"
</script>

<Avatar textFallback="test" />
<br />
<div style="position: relative; display: inline-block;">
	<Avatar
		src="https://img.odcdn.com.br/cdn-cgi/image/width=1200,height=1200,fit=cover/wp-content/uploads/2023/01/Avatar-Loak.jpg"
		textFallback="test"
	/>
	<Status
		size="8px"
		color="green"
		style="
		position: absolute; 
		top: 0; 
		right: 0; 
		box-sizing: border-box; 
		transform: translate(-50%, 50%);
		"
	/>
</div>
<br />
<Avatar
	src="https://avatars.githubusercontent.com/u/26321303?v=4"
	textFallback="test"
	width="150px"
	height="150px"
/>
