import User from '../models/User';

export const findByEmail = (email: string) => User.findOne({ where: { email } });
