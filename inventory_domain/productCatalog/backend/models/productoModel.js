const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Producto = sequelize.define(
    "Producto",
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        nombre: { type: DataTypes.STRING(255), allowNull: false },
        descripcion: { type: DataTypes.TEXT, allowNull: false },
        precio: { type: DataTypes.FLOAT, allowNull: false },
        imagenes: { type: DataTypes.JSON, allowNull: false },
        categoria: { type: DataTypes.STRING(100), allowNull: false } 
    },
    { tableName: "productos", timestamps: false }
);

module.exports = Producto;
