/*** IMPORT */
const { DataTypes } = require('sequelize')
const bcrypt = require('bcrypt')

/*** USER MODEL */
module.exports = (sequelize) => {
    const User = sequelize.define('User', {
        id:{
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        pseudo:{
            type: DataTypes.STRING(100),
            defaultValue: '',
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            validate:{
                isEmail: true
            }
        },
        password:{
            type: DataTypes.STRING(64),
            is: /^[0-9a-f]{64}$/i
        }
    })

    User.beforeCreate( async (user, options) => {
        let hash = await bcrypt.hash(user.password, parseInt(process.env.BCRYPT_SALT_ROUND))
        user.password = hash
    })

    User.checkPassword = async (password, original) => {
        return await bcrypt.compare(password, original)
    }

    return User
}