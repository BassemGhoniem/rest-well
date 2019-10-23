module.exports = (Model, schema) => ({
  async filter(req, res, next) {
    try {
      const { error } = schema.validate(req.query);

      if (error) {
        return next({ status: 400, message: error.details[0].message });
      }

      const docs = await Model.find(req.query, 'name').exec();

      return res.status(200).json(docs.map((doc) => doc.name));
    } catch (error) {
      return next(error);
    }
  },
});
