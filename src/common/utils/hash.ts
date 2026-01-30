import bcrypt from 'bcrypt'

const ROUND = 12
export const generateHashPassword = async (password: string) => {
    return await bcrypt.hash(password, ROUND)
}

export const comparePassword = async (hash: string, password: string) => {
    return await bcrypt.compare(password, hash)
}