import Sequelize, { Model } from 'sequelize';

export default class Trip extends Model {
  static init(sequelize) {
    super.init({
      start_location_name: {
        type: Sequelize.STRING,
        dafaultValue: ' ',
        validate: {
          notEmpty: {
            msg: 'Local de partida Não informado',
          },
        },
      },
      start_location_lat: {
        type: Sequelize.STRING,
        dafaultValue: ' ',
        validate: {
          notEmpty: {
            msg: 'Faltando Latitude de partida',
          },
        },
      },
      start_location_lng: {
        type: Sequelize.STRING,
        dafaultValue: ' ',
        validate: {
          notEmpty: {
            msg: 'Faltando Longitude de partida',
          },
        },
      },
      end_location_name: {
        type: Sequelize.STRING,
        dafaultValue: ' ',
        validate: {
          notEmpty: {
            msg: 'Local de chegada Não informado',
          },
        },
      },

      end_location_lat: {
        type: Sequelize.STRING,
        dafaultValue: ' ',
        validate: {
          notEmpty: {
            msg: 'Faltando Latitude de chegada'
          },
        },
      },
      end_location_lng: {
        type: Sequelize.STRING,
        dafaultValue: ' ',
        validate: {
          notEmpty: {
            msg: 'Faltando Longitude de chegada',
          },
        },
      },

    }, {
      sequelize,
      tableName: 'trips',
      freezeTableName: true,
    });
    return this;
  }
}
