/**
 * @jest-environment node
 */
import User from '@models/User'
import mongoose, { mongo } from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import config from '@config'

describe('The User model', () => {
    const user = {
        name: 'Test User',
        email: 'test@user.com',
        password: 'password'
    }

    let createdUser
    beforeAll(async () => {
        await mongoose.connect(
            'mongodb+srv://Manuel:Pelotudo5654@manowar-z9ets.mongodb.net/devcamper?retryWrites=true&w=majority',
            { useUnifiedTopology: true, useNewUrlParser: true }
        )
        createdUser = await User.create(user)
    })
    it('should hash the user password before saving to the database', async () => {
        expect(bcrypt.compareSync(user.password, createdUser.password)).toBe(
            true
        )
    })

    it('Should send the email confirmation code for the user before saving to the system', async () => {
        expect(createdUser.emailConfirmCode).toEqual(expect.any(String))
    })
    describe('The generateToken method', () => {
        it('should generate a valid jwt for a user', () => {
            const token = createdUser.generateToken()
            const { id } = jwt.verify(token, config.jwtSecret)

            expect(id).toEqual(JSON.parse(JSON.stringify(createdUser._id)))
        })
    })

    afterAll(async () => {
        await mongoose.connection.close()
    })
})
