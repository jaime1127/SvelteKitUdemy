<script lang="ts">
  import { invalidateAll } from "$app/navigation";
  import type { Snapshot } from "../$types";

  let username = "";
  let password = "";

  export const snapshot: Snapshot = {
    capture: () => {},
    restore: (value) => {},
  };

  const login = async () => {
    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });
    const resJSON = await response.json();
    if (response.ok) {
      //   goto("/", {
      //     invalidateAll: true,
      //   });
      invalidateAll();
    } else {
      alert(resJSON.message);
    }
  };
</script>

<form on:submit|preventDefault={login}>
  <label for="username">Username</label><br />
  <input
    bind:value={username}
    id="username"
    name="username"
    placeholder="Username"
  />
  <br /><br />

  <label for="password">Password</label><br />
  <input
    bind:value={password}
    id="password"
    name="password"
    placeholder="Password"
    type="password"
  />

  <br /><br />

  <button type="submit">Login</button>
</form>
