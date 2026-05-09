'use client';

import { signOut } from '@/db/auth';

export default function SignOutForm() {
  return (
    <form action={signOut}>
      <button type="submit">Sign Out</button>
    </form>
  );
}
