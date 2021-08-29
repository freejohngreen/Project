module.exports = (sequelize, DataTypes) => {
    
    //This code is what builds the database
    const Maintenanceform = sequelize.define("Maintenanceform",{
        First_Name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Last_Name:{
            type: DataTypes.STRING,
            allowNull: false,

        },

        Maintenance_Request:{
            type: DataTypes.STRING,
            allowNull: false

        }


    })

    return Maintenanceform
}