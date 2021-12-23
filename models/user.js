'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });

  User.readdata=async function(id){
    const row= await sequelize.models.Users.findByPk(id);
    return row;
  };

  User.Insertdata=async function(record){
    const row=await sequelize.models.Users.create(record);
    return row? true : false;
  }

  User.Deletedata = async function(idval){
    const row=await sequelize.models.Users.destroy({where: {id:idval}});
    console.log(row);
    return row? true : false;
  }

  User.Updatepassword = async function(idval,email){
    const row=await User.update({ email: email }, {
      where: {
        id:idval
      }
    });
    console.log(row);
    return row? true : false;
  }

  return User;
};

