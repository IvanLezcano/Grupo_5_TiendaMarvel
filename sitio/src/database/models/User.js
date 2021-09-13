module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      nameUser: {
        type: dataTypes.STRING(45),
        allowNull: false,
      },
      password: {
        type: dataTypes.STRING(100),
        allowNull: false,
      },
      first_name: {
        type: dataTypes.STRING(45),
        allowNull: false,
      },
      email: {
        type: dataTypes.STRING(45).UNIQUE,
        allowNull: false,
      },
      avatar: {
        type: dataTypes.STRING(45),
        allowNull: true,
        defaultValue: null,
      },
      rol: {
        type: dataTypes.STRING(45),
        allowNull: true,
        defaultValue: null,
      },
      created_ad: {
        type: dataTypes.DATE,
        allowNull: false,
      },
      updated_ad: {
        type: dataTypes.DATE,
        allowNull: false,
      },
      country: {
        type: dataTypes.STRING(45),
        allowNull: true,
        defaultValue: null,
      },
      city: {
        type: dataTypes.STRING(45),
        allowNull: true,
        defaultValue: null,
      },
      favorite_avenger: {
        type: dataTypes.STRING(45),
        allowNull: true,
        defaultValue: null,
      },
      hobbies: {
        type: dataTypes.STRING(500),
        allowNull: true,
        defaultValue: null,
      },
    };
    let config = {
        tableName: 'users',
        timestamps: true
    };
    const Usuario = sequelize.define(alias, cols, config)
    /* relaciones */

    Usuario.associate = models => {
        /* defino las relaciones */
        User.hasMany(models.Carrito,{
            as : 'Carrito',
            foreignKey : 'user_id'
        })
    }

    return Usuario
}