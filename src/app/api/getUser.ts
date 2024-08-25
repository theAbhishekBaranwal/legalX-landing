// pages/api/getUser.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { isAuthenticated, getUser } = getKindeServerSession(req, res);
  const authenticated = await isAuthenticated();

  if (authenticated) {
    const user = await getUser();
    return res.status(200).json({ user });
  } else {
    return res.status(401).json({ user: null });
  }
}
