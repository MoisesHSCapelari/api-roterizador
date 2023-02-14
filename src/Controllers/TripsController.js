import Trip from '../Models/Trip';

class TripsController {
  async store(req, res) {
    try {
      const eventNew = await Trip.create(req.body);
      return res.json({ eventNew });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // index
  async index(req, res) {
    try {
      const trips = await Trip.findAll();
      return res.status(200).json(trips);
    } catch (e) {
      return res.status(400).json('Acesso não Autorizado!');
    }
  }

  // show
  async show(req, res) {
    const { id } = req.params;
    try {
      if (!id) {
        return res.status(400).json({
          errors: ['ID não informado'],
        });
      }
      const trip = await Trip.findByPk(id);
      return res.status(200).json(trip);
    } catch (e) {
      return res.status(400).json({
        errors: ['Acesso não Autorizado!'],
      });
    }
  }

  // update
  async update(req, res) {
    const { id } = req.params;
    try {
      if (!id) {
        return res.status(400).json({
          errors: ['ID não informado'],
        });
      }

      const trip = await Trip.findByPk(id);
      if (!trip) {
        return res.status(400).json({
          errors: ['Rota não encontrada'],
        });
      }

      const newTrip = await Trip.update(req.body);
      return res.status(200).json(newTrip);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const trip = await Trip.findByPk(req.params.id);

      if (!trip) {
        return res.status(400).json({
          errors: ['a Rota não existe'],
        });
      }

      await Trip.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new TripsController();
