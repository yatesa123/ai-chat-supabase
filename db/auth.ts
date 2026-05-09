import { supabase } from '../lib/supabase/client';

export type AuthError = {
  message: string;
  status: number;
};



  if (error) {
    throw {
      message: error.message,
      status: error.status || 500,
    } as AuthError;
  }

  return data;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw {
      message: error.message,
      status: error.status || 500,
    } as AuthError;
  }
}
