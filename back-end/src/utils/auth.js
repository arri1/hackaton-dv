const jwt = require('jsonwebtoken')

const checkRole = async (authorization, role, prisma, require) => {
    if (!authorization) {
        throw new Error('Not access')
    }
    let error = false
    const verify = await jwt.verify(
        authorization,
        process.env[`${role.toUpperCase()}_SECRET`],
        (err, decoded) => {
            if (err) {
                if (require) {
                    throw new Error('Not access')
                } else {
                    error = true
                    return null
                }
            }
            return decoded
        }
    )

    if (error) return throw new Error('Not access')

    return verify
}

module.exports = {
    checkRole
}
