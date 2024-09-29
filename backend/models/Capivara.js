import { Model, DataTypes } from 'sequelize';

class Capivara extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          field: 'nome',
          type: DataTypes.STRING,
          allowNull: false,
        },
        idade: {
          field: 'idade',
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
            isInt: true,
            min: 0,
          },
        },
        peso: {
          field: 'peso',
          type: DataTypes.DECIMAL(5, 2),
          allowNull: false,
          validate: {
            isDecimal: true,
          },
        },
        status_saude: {
          field: 'status_saude',
          type: DataTypes.STRING,
          allowNull: false,
        },
        habitat: {
          field: 'habitat',
          type: DataTypes.STRING,
          allowNull: false,
        },
        comportamento: {
          field: 'comportamento',
          type: DataTypes.TEXT,
        },
        dieta: {
          field: 'dieta',
          type: DataTypes.TEXT,
        },
        observacoes: {
          field: 'observacoes',
          type: DataTypes.TEXT,
        },
      },
      {
        tableName: 'zoologico',
        timestamps: false,
        sequelize,

      }
    )
  }
}

export default Capivara;