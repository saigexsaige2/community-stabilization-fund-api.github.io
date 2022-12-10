import { executeQuery, queries } from '../../../src/db';

import type { User } from '../../../src/db';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  data: User[];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const sql = queries.makeGetAllSql('users');
  const users: User[] = await executeQuery({ sql });
  const adminUsers = users.filter(user => user.role === 'admin');

  res.status(200).json({ data: adminUsers });
};