export async function verifyTurnstile(token: string | undefined) {
  if (!token) return false;
  if (!process.env.TURNSTILE_SECRET_KEY) {
    // In dev, allow if token is present
    return process.env.NODE_ENV !== "production";
  }
  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: `secret=${encodeURIComponent(process.env.TURNSTILE_SECRET_KEY)}&response=${encodeURIComponent(token)}`,
    });
    const data = await res.json();
    return !!data.success;
  } catch {
    return false;
  }
}
